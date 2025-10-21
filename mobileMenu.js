// ------------------------------mobile-menu---------

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle")
    const menuCross = document.getElementById("menu-cross")
    const menuBtns = document.getElementById("menu-btns")

    menuToggle.addEventListener('click', function () {
        menuBtns.style.display = 'flex'
        menuCross.style.display = 'flex'
        menuToggle.style.display = 'none'
    })

    menuCross.addEventListener('click', function () {
        menuBtns.style.display = 'none'
        menuCross.style.display = 'none'
        menuToggle.style.display = 'flex'
        console.log('click')   
    })
})