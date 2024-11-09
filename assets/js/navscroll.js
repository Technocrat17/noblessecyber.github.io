// JavaScript to handle the scrolling behavior
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            const firstSection = document.getElementById('first-section');
            const scrollY = window.scrollY;

            if (scrollY >= firstSection.offsetHeight) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });