const clickList = document.getElementById('CLick-list');
const toggleBtn = document.getElementById('toggle-btn');

clickList.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleBtn.classList.toggle('visible');
});

document.addEventListener('click', function (e) {
    if (!clickList.contains(e.target) && !toggleBtn.contains(e.target)) {
        toggleBtn.classList.remove('visible');
    }
});

toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
});