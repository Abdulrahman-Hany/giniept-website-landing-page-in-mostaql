const links = document.querySelectorAll('nav ul li a');

function setActiveLink(index) {
    links.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let step = 500;
    let activeIndex = Math.floor(scrollPosition / step);
    setActiveLink(activeIndex);
});

// Show and hide the barContainer when clicking on the menu icon or anywhere outside it
const menuToggle = document.querySelector(".container i");
const barContainer = document.querySelector(".bar-container");
menuToggle.addEventListener("click", (e) => {
    barContainer.classList.toggle('active');
    e.stopPropagation(); 
});
document.addEventListener("click", () => {
    barContainer.classList.remove('active');
});
