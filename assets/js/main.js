const navLinks = document.querySelectorAll('nav a');
// Loop  each link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
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
