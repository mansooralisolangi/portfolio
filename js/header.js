// Mobile Menu Toggle
        const burger = document.querySelector('.burger');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.menu-overlay');
        const body = document.body;
        const mobileLinks = document.querySelectorAll('.mobile-nav a');

        function toggleMenu() {
            burger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Update ARIA attribute for accessibility
            const isExpanded = burger.classList.contains('active');
            burger.setAttribute('aria-expanded', isExpanded);
        }

        burger.addEventListener('click', toggleMenu);

        // Close menu when clicking on overlay
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on a mobile link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Close menu on escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Handle window resize - close menu if screen becomes larger than mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992 && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });