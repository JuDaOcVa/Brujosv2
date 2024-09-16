
//======================= Navbar ==================================
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    const dropdowns = document.querySelectorAll('.navbar-item');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const dropdownContent = this.querySelector('.dropdown-content');
                if (dropdownContent) {
                    e.preventDefault();
                    dropdownContent.classList.toggle('active');
                }
                const nestedDropdownContent = this.querySelector('.nested-dropdown-content');
                if (nestedDropdownContent) {
                    e.preventDefault();
                    nestedDropdownContent.classList.toggle('active');
                }
            }
        });
    });
});




        
