/*==========================================================
    THE SOUL OF RAMEN
    Minimal JavaScript
    CSS First • JS Enhancement Only
==========================================================*/

(() => {
    "use strict";

    const scene = document.querySelector(".scene");
    const bowl = document.querySelector(".bowl-wrapper");
    const lanterns = document.querySelectorAll(".lantern");
    const steam = document.querySelector(".steam-container");

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const strength = 6;

    /*======================================================
        PARALLAX
    ======================================================*/

    function updateParallax() {

        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        scene.style.transform = `
            perspective(1800px)
            rotateY(${currentX * strength}deg)
            rotateX(${currentY * -strength}deg)
        `;

        if (bowl) {

            bowl.style.transform = `
                translateX(${currentX * 8}px)
                translateY(${currentY * 4}px)
            `;

        }

        if (steam) {

            steam.style.transform = `
                translateX(calc(-50% + ${currentX * 10}px))
            `;

        }

        lanterns.forEach((lantern, index) => {

            const direction = index === 0 ? -1 : 1;

            lantern.style.transform = `
                translateX(${currentX * 6 * direction}px)
                rotate(${currentX * 3 * direction}deg)
            `;

        });

        requestAnimationFrame(updateParallax);

    }

    updateParallax();

    document.addEventListener("mousemove", (e) => {

        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;

    });

    document.addEventListener("mouseleave", () => {

        mouseX = 0;
        mouseY = 0;

    });

    /*======================================================
        BOWL HOVER
    ======================================================*/

    if (bowl && steam) {

        bowl.addEventListener("mouseenter", () => {

            steam.classList.add("steam-active");

        });

        bowl.addEventListener("mouseleave", () => {

            steam.classList.remove("steam-active");

        });

    }

    /*======================================================
        REDUCED MOTION
    ======================================================*/

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {

        scene.style.transform = "none";

    }

})();