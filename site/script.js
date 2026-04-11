document.addEventListener("DOMContentLoaded", () => {
  const bodyPage = document.body.dataset.page;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === bodyPage) {
      link.classList.add("is-active");
    }
  });

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  if (header && menuToggle) {
    menuToggle.addEventListener("click", () => {
      header.classList.toggle("is-open");
    });
  }

  const searchInput = document.querySelector("[data-scenario-search]");
  const chips = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-scenario-card]");
  const countEl = document.querySelector("[data-scenario-count]");
  const emptyEl = document.querySelector("[data-empty]");

  if (cards.length > 0) {
    let activeFilter = "all";

    const applyFilter = () => {
      const query = (searchInput?.value || "").trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const category = card.dataset.category || "";
        const keywords = card.dataset.keywords || "";
        const matchesFilter = activeFilter === "all" || category.split(" ").includes(activeFilter);
        const matchesQuery = !query || keywords.toLowerCase().includes(query);
        const visible = matchesFilter && matchesQuery;
        card.classList.toggle("hidden", !visible);
        if (visible) visibleCount += 1;
      });

      if (countEl) {
        countEl.textContent = `${visibleCount} scenarios`;
      }

      if (emptyEl) {
        emptyEl.classList.toggle("is-visible", visibleCount === 0);
      }
    };

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((item) => item.classList.remove("is-active"));
        chip.classList.add("is-active");
        activeFilter = chip.dataset.filter || "all";
        applyFilter();
      });
    });

    searchInput?.addEventListener("input", applyFilter);
    applyFilter();
  }
});
