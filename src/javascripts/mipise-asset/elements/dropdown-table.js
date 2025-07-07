// Dropdowns

window.addEventListener('load', event => {

    document.querySelectorAll('.dropdown-responsive').forEach((dropdown) => {
        new bootstrap.Dropdown(dropdown, {
            popperConfig: function (defaultBsPopperConfig) {
                const newPopperConfig = {
                    ...defaultBsPopperConfig,
                    strategy: 'fixed',
                };
                return newPopperConfig;
            }
        });
    })

});
