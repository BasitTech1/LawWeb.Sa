// ------------------------------mobile-menu---------

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle")
    const menuBtns = document.getElementById("menu-btns")

    menuToggle.addEventListener('click', function () {
        menuBtns.style.opacity = '100'
    })
})