
import './slider.css'

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const carousel = document.getElementById('carousel');
const container = document.getElementById('carousel-container');
const imgs = document.querySelectorAll('.carousel img');
const cloneImg = imgs[0].cloneNode(true);
carousel.appendChild(cloneImg);
const ul = document.getElementById('ul');
const lis = document.querySelectorAll('.carousel-container ul li');


let index = 0;
let lock = true;
const rightBtnClick = rightBtn.onclick = function () {
    if (!lock) return;
    lock = false;
    index++;
    carousel.style.transition = `all .5s ease`;
    if (index > 5) {
        setTimeout(() => {
            index = 0
            carousel.style.transition = `none`;
            carousel.style.transform = `none`;
        }, 500)
    }
    carousel.style.transform = `translateX(-${12.5 * index}%)`
    dot();
    setTimeout(() => { lock = true }, 1000)
}

const leftBtnClick = leftBtn.onclick = function () {
    if (!lock) return;
    lock = false;
    if (index === 0) {
        carousel.style.transition = `none`;
        carousel.style.transform = `translateX(-${12.5 * 6}%)`;
        setTimeout(function () {
            carousel.style.transition = `transform .5s ease 0s`;
            carousel.style.transform = ` translateX(-${12.5 * 5}%)`;
            index = 5;
            dot();
        }, 0)
    } else {
        index--;
        carousel.style.transform = `translateX(-${12.5 * index}%)`
        dot();
    }
    setTimeout(() => { lock = true }, 1000)
}

const dot = () => {
    lis.forEach((v, i) => {
        i === index % 6 ? v.classList.add('active') : v.classList = [];
    })
}

let timer = setInterval(rightBtnClick, 1000);
container.onmouseenter = function () {
    clearInterval(timer)
}
container.onmouseleave = function () {
    clearInterval(timer);
    timer = setInterval(rightBtnClick, 1000)
}

ul.onclick = function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        let n = e.target.getAttribute('data-n');
        index = n;
        carousel.style.transform = `translateX(-${12.5 * index}%)`;
        dot()
    }
}

document.onkeyup = function(e){
    if(e.keyCode === 37 || e.keyCode === 38){
        leftBtnClick()
    }else if(e.keyCode === 39 || e.keyCode === 40){
        rightBtnClick()
    }
}