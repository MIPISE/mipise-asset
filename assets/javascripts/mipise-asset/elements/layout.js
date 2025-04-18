// Footer dynamic
document.addEventListener("DOMContentLoaded", () => {
    const pageHeight = document.documentElement.scrollHeight;
    const footer = document.getElementById("cardFixed-footer");

    if (footer == null)
        return;

    const updateFooterState = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const offset = 100;

        if (scrollPosition > pageHeight - offset) {
            footer.style.position = "relative";
        } else {
            footer.style.position = "fixed";
            footer.style.padding = "12px 5%";
        }
    };

    window.addEventListener("scroll", updateFooterState);
    updateFooterState();
});
