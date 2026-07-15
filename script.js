// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Portfolio image hover effect
document.querySelectorAll(".logo-gallery img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.boxShadow = "0 0 20px rgba(255,255,255,0.6)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.boxShadow = "none";
    });
});

// Footer year
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Ahmad Logo Designer. All Rights Reserved.`;
}
