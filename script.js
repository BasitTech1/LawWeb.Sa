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

// -------------------------------الممارسات----hoverbtn---------------

const CLickList = document.getElementById('CLick-list')
const toggleBtn = document.getElementById('toggle-btn')

function btnHover() {
    CLickList.addEventListener("mouseover", () => {
        toggleBtn.style.display = 'flex'
    })
    CLickList.addEventListener("click", ()=>{
        toggleBtn.style.display = 'none'
    })
}

// ------------------------------------sliderhovering-----------------


function revealBox() {
    document.getElementById('toggleHone').classList.add('toggle-open');
}

function hideBox() {
    document.getElementById('toggleHone').classList.remove('toggle-open');
}

function revealBox1() {
    document.getElementById('toggleHTwo').classList.add('toggle-open1');
}

function hideBox1() {
    document.getElementById('toggleHTwo').classList.remove('toggle-open1');
}

function revealBox2() {
    document.getElementById('toggleHThree').classList.add('toggle-open2');
}

function hideBox2() {
    document.getElementById('toggleHThree').classList.remove('toggle-open2');
}


// --------------------box-animation----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.price-box1, .price-box2, .price-box3, .price-box4');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 300); // Stagger animation by 300ms
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    boxes.forEach(box => {
        observer.observe(box);
    });
});