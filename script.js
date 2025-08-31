const clickList = document.getElementById('CLick-list');
const toggleBtn = document.getElementById('toggle-btn');

clickList.addEventListener('click', function(){
    toggleBtn.classList.toggle('visible')
})