// Footer dynamic 

const footer = document.getElementById("cardFixed-footer");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const offset = 100;

    if (scrollPosition > pageHeight - offset) {
        footer.style.position = "relative";
    } else {
        footer.style.position = "fixed";
    }
});