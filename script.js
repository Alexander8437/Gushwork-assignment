// ================= HEADER SCROLL =================
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 150) {
        if (currentScroll > lastScroll) {
            // Scrolling DOWN → show header
            header.classList.add("show");
        } else {
            // Scrolling UP → hide header
            header.classList.remove("show");
        }
    } else {
        header.classList.remove("show");
    }

    lastScroll = currentScroll;
});

// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= DROPDOWN =================
const productToggle = document.getElementById("productToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

productToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!productToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
});

// ================= FAQ ACCORDION =================
const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
    q.addEventListener("click", () => {
        const current = q.nextElementSibling;

        // Close others
        document.querySelectorAll(".faq-answer").forEach((ans) => {
            if (ans !== current) {
                ans.style.maxHeight = null;
            }
        });

        // Toggle current
        if (current.style.maxHeight) {
            current.style.maxHeight = null;
            current.classList.remove("open");

        } else {
            current.style.maxHeight = current.scrollHeight + "px";
            current.classList.add("open");

        }
    });
});