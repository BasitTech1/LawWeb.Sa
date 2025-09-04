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


// ----------------------------------trainer-slider-------------------------

let scrollContainer = document.querySelector(".trainer-slider")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = 'auto'
})

function BackButtonClick() {
    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft -= 900
    })
}

function nextButtonClick() {
    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += 900
        scrollContainer.style.scrollBehavior = 'smooth'
    })
}
