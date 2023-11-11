// Change the background color of the menu when scrolled
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
};

// Change the font color of the menu items on hover
const menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#ff9900';
    });

    item.addEventListener('mouseout', function() {
        this.style.color = '#fff';
    });
});
