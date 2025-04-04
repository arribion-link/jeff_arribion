      document.getElementById('current-year').textContent = new Date().getFullYear();

        // --- Hamburger Menu Toggle ---
        const menuToggle = document.getElementById('menu-toggle');
        const mainMenu = document.getElementById('main-menu');
        const siteHeader = document.querySelector('.site-header'); // Get the header element
        const navLinks = mainMenu.querySelectorAll('a'); // Get all links in the menu

        if (menuToggle && mainMenu && siteHeader) {
            menuToggle.addEventListener('click', () => {
                // Toggle the .menu-open class on the header
                siteHeader.classList.toggle('menu-open');

                // Toggle ARIA attribute
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);

                // Optional: Toggle class on body to prevent scrolling when menu is open
                document.body.classList.toggle('no-scroll', siteHeader.classList.contains('menu-open'));
            });

             // Close menu when a link is clicked (useful for single-page apps)
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (siteHeader.classList.contains('menu-open')) {
                        siteHeader.classList.remove('menu-open');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        document.body.classList.remove('no-scroll');
                    }
                });
            });
        }
    