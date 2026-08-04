/*
==========================================================
The Soul of Ramen
Minimal JavaScript
==========================================================
*/

const scene = document.querySelector(".scene");

document.addEventListener("mousemove", (e)=>{

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;

    scene.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", ()=>{

    scene.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});