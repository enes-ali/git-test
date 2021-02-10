const navbar = document.querySelector("nav");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown-link"));


dropdownLinks.forEach(element => {
    element.addEventListener("click", event => {
        event.currentTarget.classList.toggle("dropdown-link-active");
    });

    element.addEventListener("mouseleave", event => {
        event.target.classList.remove("dropdown-link-active");
    });
});
