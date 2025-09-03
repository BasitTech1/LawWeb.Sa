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


const CLickList = document.getElementById('CLick-list')
const toggleBtn = document.getElementById('toggle-btn')

CLickList.addEventListener("click", () => {
    toggleBtn.style.display = "flex"
})