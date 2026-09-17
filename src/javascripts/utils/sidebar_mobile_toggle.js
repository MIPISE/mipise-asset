const MOBILE_BREAKPOINT = 992;

const usesCollapsibleSubmenus = () =>
  window.innerWidth < MOBILE_BREAKPOINT || window.matchMedia("(hover: none)").matches;

document.addEventListener("click", (event) => {
  if (!usesCollapsibleSubmenus()) return;

  const link = event.target.closest("a.nav-link");
  if (!link) return;

  const wrapper = link.closest(".js-sidebar-collapse");
  if (!wrapper) return;

  if (link.closest(".dropdown-menu")) return;

  event.preventDefault();
  wrapper.classList.toggle("mobile-open");
});
