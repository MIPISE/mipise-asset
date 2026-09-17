// Sidebar

window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sidebar-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sidebar-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sidebar-toggled'));
        });
    }

    const contentWrapper = document.querySelector('#content-wrapper');
    if (sidebarToggle && contentWrapper) {
        contentWrapper.addEventListener('click', event => {
            if (!document.body.classList.contains('sidebar-toggled')) return;
            if (window.getComputedStyle(sidebarToggle).display === 'none') return;

            event.preventDefault();
            event.stopPropagation();
            document.body.classList.remove('sidebar-toggled');
            localStorage.setItem('sb|sidebar-toggle', false);
        });
    }
});