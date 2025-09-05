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




// -----------------------------------certicateslider-------------

function LeftButtonClick() {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnLeft = document.getElementById("btnLeft");
    scrollSlider.style.scrollBehavior = 'smooth';
    scrollSlider.scrollLeft -= 900;
}

function rightButtonClick() {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnRight = document.getElementById("btnRight");
    scrollSlider.style.scrollBehavior = 'smooth';
    scrollSlider.scrollLeft += 900;
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnLeft = document.getElementById("btnLeft");
    let btnRight = document.getElementById("btnRight");

    if (scrollSlider && btnLeft && btnRight) {
        scrollSlider.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollSlider.scrollLeft += evt.deltaY * 0.5; // Smoother scrolling
            scrollSlider.style.scrollBehavior = 'auto';
        });
    } else {
        console.error("One or more elements not found in the DOM.");
    }
});