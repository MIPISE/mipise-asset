// Footer dynamic 

const pageHeight = document.documentElement.scrollHeight;

window.addEventListener("scroll", () => {
    const footer = document.getElementById("cardFixed-footer");
    const scrollPosition = window.scrollY + window.innerHeight;
    const offset = 100;

    if (scrollPosition > pageHeight - offset) {
        footer.style.position = "relative";
    } else {
        footer.style.position = "fixed";
    }
});
