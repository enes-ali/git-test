'use strict';
const navbar = document.querySelector("#nav");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown-link"));
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const RIPPLE_ANIMATION_TIME = getComputedStyle(document.documentElement).getPropertyValue("--ripple-animation-time").split("s").slice(0,-1).join("");


dropdownLinks.forEach(element => {
    element.addEventListener("click", event => {
        let is_opened = event.currentTarget.classList.toggle("dropdown-link-active");
        // change navbars max-height to be able to fit
        if(is_opened && navbar.style.maxHeight === "380px"){
            navbar.style.maxHeight = "780px";
        }
        else{
            navbar.style.maxHeight = "380px";
        }
    });

    element.addEventListener("mouseleave", event => {
        event.target.classList.remove("dropdown-link-active");
    });
});

// create ripple element add to given view and remove from given element
function createRipple(element){
    let ripple = document.createElement("div");
    ripple.className = "ripple";
    element.appendChild(ripple);
    setTimeout(() => {element.removeChild(ripple)}, RIPPLE_ANIMATION_TIME * 1000);
}

mobileMenuBtn.addEventListener("click", event => {
    createRipple(event.currentTarget);
    const height = mobileNav.clientHeight;
    if(height !== navbar.clientHeight){
        navbar.style.maxHeight = `${height}px`;
    }
    else{
        navbar.style.maxHeight = `380px`;
    }
}); 