document.querySelectorAll(".copy_link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const text = link.textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
        }).catch(err => {
        });
    });
});
