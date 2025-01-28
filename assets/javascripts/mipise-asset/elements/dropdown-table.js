// Dropdowns table height

window.addEventListener('DOMContentLoaded', event => {

    const dropdownElement = document.querySelector('.dropdown-responsive');
    const dropdown = new bootstrap.Dropdown(dropdownElement, {
        popperConfig: function (defaultBsPopperConfig) {
            const newPopperConfig = {
                ...defaultBsPopperConfig,
                strategy: 'fixed',
            };
            return newPopperConfig;
        }
    });

});
