// ------------------------------mobile-menu---------

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle")
    const menuCross = document.getElementById("menu-cross")
    const menuBtns = document.getElementById("menu-btns")

    menuToggle.addEventListener('click', function () {
        menuBtns.style.opacity = '100'
        menuCross.style.opacity = '1'
        menuToggle.style.opacity = '0'
    })

    menuCross.addEventListener('click', function () {
        menuBtns.style.opacity = '0'
        menuCross.style.opacity = '0'
        menuToggle.style.opacity = '1'
        console.log('click')   
    })
})