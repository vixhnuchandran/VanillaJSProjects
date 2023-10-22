let counter = 0;;

const counterValue = document.getElementById('count');
const dBtn = document.querySelector('.decrease');
const rBtn = document.querySelector('.reset');
const iBtn = document.querySelector('.increase');


dBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
})

rBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.innerHTML = counter;
})

iBtn.addEventListener('click', () => {
    counter++ ;
    counterValue.innerHTML = counter;
})

counter.a