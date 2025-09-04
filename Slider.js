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
