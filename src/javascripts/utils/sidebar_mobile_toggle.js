const MOBILE_BREAKPOINT = 992;

document.addEventListener("click", (event) => {
  if (window.innerWidth >= MOBILE_BREAKPOINT) return;

  const link = event.target.closest("a.nav-link");
  if (!link) return;

  const wrapper = link.closest(".js-sidebar-collapse");
  if (!wrapper) return;

  if (link.closest(".dropdown-menu")) return;

  event.preventDefault();
  wrapper.classList.toggle("mobile-open");
});
