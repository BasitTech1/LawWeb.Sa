
// -------------------------header btn------------------------
const clickList = document.getElementById('CLick-list');
const toggleBtn = document.getElementById('toggle-btn');

clickList.addEventListener('click', function(){
    toggleBtn.classList.toggle('visible')
})

// ---------------------todo-----------------------------

const sum1 = document.getElementById('sum1')
const subtract1 = document.getElementById('subtract1')
const dataPara1 = document.getElementById('data-para1')


sum1.addEventListener('click', function(){
    sum1.style.display = 'none'
    subtract1.style.display = 'flex'
    dataPara1.style.display = 'flex'
})

subtract1.addEventListener('click', function(){
    sum1.style.display = 'flex'
    subtract1.style.display = 'none'
    dataPara1.style.display = 'none'
})

const sum2 = document.getElementById('sum2')
const subtract2 = document.getElementById('subtract2')
const dataPara2 = document.getElementById('data-para2')


sum2.addEventListener('click', function(){
    sum2.style.display = 'none'
    subtract2.style.display = 'flex'
    dataPara2.style.display = 'flex'
})

subtract2.addEventListener('click', function(){
    sum2.style.display = 'flex'
    subtract2.style.display = 'none'
    dataPara2.style.display = 'none'
})

const sum3 = document.getElementById('sum3')
const subtract3 = document.getElementById('subtract3')
const dataPara3 = document.getElementById('data-para3')


sum3.addEventListener('click', function(){
    sum3.style.display = 'none'
    subtract3.style.display = 'flex'
    dataPara3.style.display = 'flex'
})

subtract3.addEventListener('click', function(){
    sum3.style.display = 'flex'
    subtract3.style.display = 'none'
    dataPara3.style.display = 'none'
})

const sum4 = document.getElementById('sum4')
const subtract4 = document.getElementById('subtract4')
const dataPara4 = document.getElementById('data-para4')


sum4.addEventListener('click', function(){
    sum4.style.display = 'none'
    subtract4.style.display = 'flex'
    dataPara4.style.display = 'flex'
})

subtract4.addEventListener('click', function(){
    sum4.style.display = 'flex'
    subtract4.style.display = 'none'
    dataPara4.style.display = 'none'
})

const sum5 = document.getElementById('sum5')
const subtract5 = document.getElementById('subtract5')
const dataPara5 = document.getElementById('data-para5')


sum5.addEventListener('click', function(){
    sum5.style.display = 'none'
    subtract5.style.display = 'flex'
    dataPara5.style.display = 'flex'
})

subtract5.addEventListener('click', function(){
    sum5.style.display = 'flex'
    subtract5.style.display = 'none'
    dataPara5.style.display = 'none'
})


// -----------------------------من نحن---------------------

