// JavaScript for animations
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for articles
    const articles = document.querySelectorAll("article");
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = 1;
            article.style.transform = "translateY(0)";
        }, index * 200); // Staggered animations
    });

    // Highlight "Read More" links on hover
    const readMoreLinks = document.querySelectorAll(".read-more");
    readMoreLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ff5722"; // Highlight color
        });
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "#000000"; // Revert to original
        });
    });

    // Scroll-triggered animations
window.addEventListener("scroll", () => {
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
        const position = article.getBoundingClientRect().top; // Get article position
        const windowHeight = window.innerHeight; // Get viewport height
        if (position < windowHeight - 100) { // Trigger when article is within view
            article.style.opacity = 1;
            article.style.transform = "translateY(0)";
        }
    });
});
});