// -------------------------header btn------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Helper function to safely set up toggle functionality
    function setupToggle(sumId, subtractId, dataParaId) {
        const sumBtn = document.getElementById(sumId);
        const subtractBtn = document.getElementById(subtractId);
        const dataPara = document.getElementById(dataParaId);

        // Only add event listeners if elements exist
        if (sumBtn && subtractBtn && dataPara) {
            sumBtn.addEventListener('click', function () {
                sumBtn.style.display = 'none';
                subtractBtn.style.display = 'flex';
                dataPara.style.display = 'flex';
            });

            subtractBtn.addEventListener('click', function () {
                sumBtn.style.display = 'flex';
                subtractBtn.style.display = 'none';
                dataPara.style.display = 'none';
            });
        }
    }

    // Set up all toggle pairs
    setupToggle('sum1', 'subtract1', 'data-para1');
    setupToggle('sum2', 'subtract2', 'data-para2');
    setupToggle('sum3', 'subtract3', 'data-para3');
    setupToggle('sum4', 'subtract4', 'data-para4');
    setupToggle('sum5', 'subtract5', 'data-para5');
});


// -----------------------------swifer Trainer-IPAD Slider-------------------
const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        724: {
            slidesPerView: 1
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtns = document.querySelector('.menu-btns');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('.menu-btns li');

    // Toggle menu function
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';

        // Prevent body scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Add click event to menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);

    // Add click event to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('Active-MB'));

            // Add active class to clicked item
            this.classList.add('Active-MB');

            // Close menu after selection (optional)
            setTimeout(toggleMenu, 300);
        });
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});