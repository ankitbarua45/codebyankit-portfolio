/* Smooth and faster */
document.addEventListener("DOMContentLoaded", function () {
    // Native lazy loading for images
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Lazy load images and videos with data-src, load earlier for smoothness
    const lazyElements = document.querySelectorAll("img[data-src], video[data-src]");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.tagName === "IMG") {
                    entry.target.src = entry.target.getAttribute("data-src");
                    entry.target.removeAttribute("data-src");
                } else if (entry.target.tagName === "VIDEO") {
                    entry.target.src = entry.target.getAttribute("data-src");
                    entry.target.load();
                    entry.target.removeAttribute("data-src");
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "200px 0px" // Load before visible for smoothness
    });

    lazyElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

// EmailJS with public key
emailjs.init("");

function sendEmail() {
    console.log("sendEmail() called");

    const form = document.getElementById("contact-form");
    if (!form) {
        console.error("Form not found!");
        return;
    }

    emailjs.sendForm("service_", "template_", form)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            // Show the custom success alert
            const alertBox = document.getElementById("success-alert");
            if (alertBox) {
                alertBox.style.display = "flex";
                setTimeout(() => { alertBox.style.display = "none"; }, 4000);
            }
            // Optionally reset the form
            form.reset();
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("❌ Failed to send message:\n" + JSON.stringify(error));
        });
}

// Hide loader when everything is loaded
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});



// Hide loader when everything is loaded
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});

// Mobile menu toggle

// Hide loader when everything is loaded
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});

