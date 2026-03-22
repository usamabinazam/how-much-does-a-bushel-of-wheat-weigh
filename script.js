// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// FAQ toggle
const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});
