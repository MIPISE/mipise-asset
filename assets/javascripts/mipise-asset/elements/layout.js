// Footer dynamic
document.addEventListener("DOMContentLoaded", () => {
    const pageHeight = document.documentElement.scrollHeight;
    const footer = document.getElementById("cardFixed-footer");

    const updateFooterState = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const offset = 100;

        if (scrollPosition > pageHeight - offset) {
            footer.style.position = "relative";
        } else {
            footer.style.position = "fixed";
        }
    }

    window.addEventListener("scroll", updateFooterState);
    updateFooterState();
});
