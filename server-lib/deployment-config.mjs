import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, resolve } from 'node:path'

function toPosixPath(value) {
  return value.replace(/\\/g, '/')
}

function firstDefined(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }

  return ''
}

function normalizeConfiguredValue(value) {
  if (typeof value !== 'string') {
    return ''
  }

  let normalized = value.trim()

  while (
    normalized.length >= 2 &&
    ((normalized.startsWith('"') && normalized.endsWith('"')) ||
      (normalized.startsWith("'") && normalized.endsWith("'")))
  ) {
    normalized = normalized.slice(1, -1).trim()
  }

  return normalized
}

function normalizePrivateKeyValue(value) {
  const normalized = normalizeConfiguredValue(value)
  if (!normalized) {
    return ''
  }

  return normalized.replace(/\\n/g, '\n')
}

function parsePositiveInteger(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ''), 10)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

function resolveConfigPath(configPath) {
  return resolve(configPath)
}

function resolveFileValue(configDirectory, value, fallback) {
  const source = typeof value === 'string' && value.trim() ? value.trim() : fallback
  if (!source) {
    return fallback
  }

  return isAbsolute(source) ? source : resolve(configDirectory, source)
}

function resolveServerPrivateKey(configDirectory) {
  const inlinePrivateKey = firstDefined(
    process.env.MULTICA_DEPLOY_PRIVATE_KEY,
    process.env.MULTICA_SERVER_PRIVATE_KEY,
  )
  if (inlinePrivateKey) {
    return {
      privateKey: normalizePrivateKeyValue(inlinePrivateKey),
      privateKeyPath: '',
      privateKeyPassphrase: firstDefined(
        process.env.MULTICA_DEPLOY_PRIVATE_KEY_PASSPHRASE,
        process.env.MULTICA_SERVER_PRIVATE_KEY_PASSPHRASE,
      ),
    }
  }

  const configuredPrivateKeyPath = firstDefined(
    process.env.MULTICA_DEPLOY_PRIVATE_KEY_PATH,
    process.env.MULTICA_SERVER_PRIVATE_KEY_PATH,
  )
  if (!configuredPrivateKeyPath) {
    return {
      privateKey: '',
      privateKeyPath: '',
      privateKeyPassphrase: '',
    }
  }

  const resolvedPrivateKeyPath = resolveFileValue(configDirectory, configuredPrivateKeyPath, '')
  if (!resolvedPrivateKeyPath || !existsSync(resolvedPrivateKeyPath)) {
    return {
      privateKey: '',
      privateKeyPath: resolvedPrivateKeyPath,
      privateKeyPassphrase: '',
    }
  }

  return {
    privateKey: readFileSync(resolvedPrivateKeyPath, 'utf8'),
    privateKeyPath: resolvedPrivateKeyPath,
    privateKeyPassphrase: firstDefined(
      process.env.MULTICA_DEPLOY_PRIVATE_KEY_PASSPHRASE,
      process.env.MULTICA_SERVER_PRIVATE_KEY_PASSPHRASE,
    ),
  }
}

function sanitizeRawConfig(rawConfig) {
  if (!rawConfig || typeof rawConfig !== 'object') {
    return {
      rawConfig,
      changed: false,
    }
  }

  const multica = rawConfig.multica && typeof rawConfig.multica === 'object'
    ? rawConfig.multica
    : null

  if (!multica) {
    return {
      rawConfig,
      changed: false,
    }
  }

  const normalizedRepoUrl = normalizeConfiguredValue(multica.repoUrl) || 'https://github.com/multica/multica.git'
  const normalizedRepoRef = normalizeConfiguredValue(multica.repoRef) || 'main'
  const normalizedSourceType = multica.sourceType === 'archive' ? 'archive' : 'git'
  const normalizedArchiveUrl = normalizeConfiguredValue(multica.archiveUrl)
  const normalizedArchivePath = normalizeConfiguredValue(multica.archivePath)
  const repoUrlChanged = typeof multica.repoUrl === 'string' && multica.repoUrl !== normalizedRepoUrl
  const repoRefChanged = typeof multica.repoRef === 'string' && multica.repoRef !== normalizedRepoRef
  const sourceTypeChanged = typeof multica.sourceType === 'string' && multica.sourceType !== normalizedSourceType
  const archiveUrlChanged = typeof multica.archiveUrl === 'string' && multica.archiveUrl !== normalizedArchiveUrl
  const archivePathChanged = typeof multica.archivePath === 'string' && multica.archivePath !== normalizedArchivePath

  if (!repoUrlChanged && !repoRefChanged && !sourceTypeChanged && !archiveUrlChanged && !archivePathChanged) {
    return {
      rawConfig,
      changed: false,
    }
  }

  return {
    rawConfig: {
      ...rawConfig,
      multica: {
        ...multica,
        repoUrl: normalizedRepoUrl,
        repoRef: normalizedRepoRef,
        sourceType: normalizedSourceType,
        archiveUrl: normalizedArchiveUrl,
        archivePath: normalizedArchivePath,
      },
    },
    changed: true,
  }
}

function ensureConfigFile(configPath) {
  if (existsSync(configPath)) {
    return
  }

  mkdirSync(dirname(configPath), { recursive: true })
  writeFileSync(
    configPath,
    JSON.stringify(
      {
        deployment: {
          provider: 'mock',
          targetServer: 'mock-multica-server',
          consoleBaseUrl: 'https://console.multica.local',
          publicBaseUrl: 'https://multica.local',
          mockRootDir: './data/mock-remote',
        },
        multica: {
          repoUrl: 'https://github.com/multica/multica.git',
          repoRef: 'main',
          sourceType: 'git',
          archiveUrl: '',
          archivePath: '',
          baseDir: '/srv/multica',
          servicePrefix: 'multica',
          runtimeUserPrefix: 'mca',
          installCommand: 'npm install --no-audit --no-fund',
          buildCommand:
            'export NODE_OPTIONS=--max-old-space-size=1536 && pnpm canvas:a2ui:bundle && node scripts/tsdown-build.mjs && node scripts/runtime-postbuild.mjs && node scripts/build-stamp.mjs && node --import tsx scripts/canvas-a2ui-copy.ts && node --import tsx scripts/copy-hook-metadata.ts && node --import tsx scripts/copy-export-html-templates.ts && node --import tsx scripts/write-build-info.ts && node --import tsx scripts/write-cli-startup-metadata.ts && node --import tsx scripts/write-cli-compat.ts',
          startCommand: 'multica gateway run --allow-unconfigured --bind lan --port "$PORT" --token "$MULTICA_GATEWAY_TOKEN" --force',
          tokenEnvName: 'COMMUNICATION_TOKEN',
          modelEnvName: 'MULTICA_MODEL_ID',
          channelEnvName: 'MULTICA_CHANNEL_ID',
          planEnvName: 'MULTICA_PLAN_ID',
        },
      },
      null,
      2,
    ),
  )
}

function readRawConfig(configPath) {
  const resolvedConfigPath = resolveConfigPath(configPath)
  ensureConfigFile(resolvedConfigPath)
  const parsedConfig = JSON.parse(readFileSync(resolvedConfigPath, 'utf8'))
  const { rawConfig, changed } = sanitizeRawConfig(parsedConfig)

  if (changed) {
    writeFileSync(resolvedConfigPath, JSON.stringify(rawConfig, null, 2))
  }

  return {
    configPath: resolvedConfigPath,
    rawConfig,
  }
}

function normalizeConfig(configPath, rawConfig, encryptionSecret) {
  const configDirectory = dirname(configPath)
  const provider = rawConfig?.deployment?.provider === 'ssh' ? 'ssh' : 'mock'
  const configuredRepoUrl = normalizeConfiguredValue(rawConfig?.multica?.repoUrl)
  const configuredRepoRef = normalizeConfiguredValue(rawConfig?.multica?.repoRef)
  const configuredSourceType = rawConfig?.multica?.sourceType === 'archive' ? 'archive' : 'git'
  const configuredArchiveUrl = normalizeConfiguredValue(rawConfig?.multica?.archiveUrl)
  const configuredArchivePath = normalizeConfiguredValue(rawConfig?.multica?.archivePath)
  const serverHost = firstDefined(
    process.env.MULTICA_DEPLOY_HOST,
    process.env.MULTICA_SERVER_IP,
    process.env.MULTICA_SERVER_HOST,
  ) || '127.0.0.1'
  const serverPort = parsePositiveInteger(
    firstDefined(process.env.MULTICA_DEPLOY_PORT),
    22,
  )
  const serverUsername = firstDefined(
    process.env.MULTICA_DEPLOY_USERNAME,
    process.env.MULTICA_SERVER_USERNAME,
  ) || 'root'
  const routerBaseUrl = firstDefined(
    process.env.MULTICA_ROUTER_BASE_URL,
    rawConfig?.deployment?.routerBaseUrl,
  )
  const routerRoutesDir = resolveFileValue(
    configDirectory,
    firstDefined(
      process.env.MULTICA_ROUTER_ROUTES_DIR,
      rawConfig?.deployment?.routerRoutesDir,
    ),
    '/data/multica/router/routes',
  )
  const serverPassword = firstDefined(
    process.env.MULTICA_DEPLOY_ROOT_PASSWORD,
    process.env.MULTICA_ROOT_PASSWORD,
    process.env.MULTICA_DEPLOY_PASSWORD,
  )
  const {
    privateKey: serverPrivateKey,
    privateKeyPath: serverPrivateKeyPath,
    privateKeyPassphrase: serverPrivateKeyPassphrase,
  } = resolveServerPrivateKey(configDirectory)
  const mockRootDir = resolveFileValue(configDirectory, rawConfig?.deployment?.mockRootDir, join(configDirectory, 'data', 'mock-remote'))

  return {
    path: configPath,
    provider,
    deployment: {
      provider,
      targetServer:
        typeof rawConfig?.deployment?.targetServer === 'string' && rawConfig.deployment.targetServer.trim()
          ? rawConfig.deployment.targetServer.trim()
          : provider === 'ssh'
            ? serverHost || 'ssh-multica-server'
            : 'mock-multica-server',
      consoleBaseUrl:
        typeof rawConfig?.deployment?.consoleBaseUrl === 'string' && rawConfig.deployment.consoleBaseUrl.trim()
          ? rawConfig.deployment.consoleBaseUrl.trim()
          : 'https://console.multica.local',
      publicBaseUrl:
        typeof rawConfig?.deployment?.publicBaseUrl === 'string' && rawConfig.deployment.publicBaseUrl.trim()
          ? rawConfig.deployment.publicBaseUrl.trim()
          : 'https://multica.local',
      mockRootDir,
    },
    server: {
      host: serverHost,
      port: serverPort,
      username: serverUsername,
      password: serverPassword,
      privateKey: serverPrivateKey,
      privateKeyPath: serverPrivateKeyPath,
      privateKeyPassphrase: serverPrivateKeyPassphrase,
    },
    router: {
      baseUrl: routerBaseUrl,
      routesDir: routerRoutesDir,
    },
    multica: {
      sourceType: configuredSourceType,
      archiveUrl: configuredArchiveUrl,
      archivePath: configuredArchivePath,
      repoUrl: configuredRepoUrl || 'https://github.com/multica/multica.git',
      repoRef: configuredRepoRef || 'main',
      baseDir:
        typeof rawConfig?.multica?.baseDir === 'string' && rawConfig.multica.baseDir.trim()
          ? toPosixPath(rawConfig.multica.baseDir.trim())
          : '/srv/multica',
      servicePrefix:
        typeof rawConfig?.multica?.servicePrefix === 'string' && rawConfig.multica.servicePrefix.trim()
          ? rawConfig.multica.servicePrefix.trim()
          : 'multica',
      runtimeUserPrefix:
        typeof rawConfig?.multica?.runtimeUserPrefix === 'string' && rawConfig.multica.runtimeUserPrefix.trim()
          ? rawConfig.multica.runtimeUserPrefix.trim()
          : 'mca',
      installCommand:
        typeof rawConfig?.multica?.installCommand === 'string'
          ? rawConfig.multica.installCommand.trim()
          : 'npm install --no-audit --no-fund',
      buildCommand:
        typeof rawConfig?.multica?.buildCommand === 'string'
          ? rawConfig.multica.buildCommand.trim()
          : 'export NODE_OPTIONS=--max-old-space-size=1536 && pnpm canvas:a2ui:bundle && node scripts/tsdown-build.mjs && node scripts/runtime-postbuild.mjs && node scripts/build-stamp.mjs && node --import tsx scripts/canvas-a2ui-copy.ts && node --import tsx scripts/copy-hook-metadata.ts && node --import tsx scripts/copy-export-html-templates.ts && node --import tsx scripts/write-build-info.ts && node --import tsx scripts/write-cli-startup-metadata.ts && node --import tsx scripts/write-cli-compat.ts',
      startCommand:
        typeof rawConfig?.multica?.startCommand === 'string'
          ? rawConfig.multica.startCommand.trim()
          : 'multica gateway run --allow-unconfigured --bind lan --port "$PORT" --token "$MULTICA_GATEWAY_TOKEN" --force',
      tokenEnvName:
        typeof rawConfig?.multica?.tokenEnvName === 'string' && rawConfig.multica.tokenEnvName.trim()
          ? rawConfig.multica.tokenEnvName.trim()
          : 'COMMUNICATION_TOKEN',
      modelEnvName:
        typeof rawConfig?.multica?.modelEnvName === 'string' && rawConfig.multica.modelEnvName.trim()
          ? rawConfig.multica.modelEnvName.trim()
          : 'MULTICA_MODEL_ID',
      channelEnvName:
        typeof rawConfig?.multica?.channelEnvName === 'string' && rawConfig.multica.channelEnvName.trim()
          ? rawConfig.multica.channelEnvName.trim()
          : 'MULTICA_CHANNEL_ID',
      planEnvName:
        typeof rawConfig?.multica?.planEnvName === 'string' && rawConfig.multica.planEnvName.trim()
          ? rawConfig.multica.planEnvName.trim()
          : 'MULTICA_PLAN_ID',
    },
  }
}

export function loadDeploymentConfig({
  configPath,
  encryptionSecret,
}) {
  const { configPath: resolvedConfigPath, rawConfig } = readRawConfig(configPath)
  return normalizeConfig(resolvedConfigPath, rawConfig, encryptionSecret)
}

export function readConfiguredMulticaRepoRef(configPath) {
  const { rawConfig } = readRawConfig(configPath)
  return normalizeConfiguredValue(rawConfig?.multica?.repoRef) || 'main'
}
