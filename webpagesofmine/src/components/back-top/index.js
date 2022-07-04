import './back-top.css'

const btn = document.getElementById('to-top-btn');

btn.onclick = function () {
    let height = document.documentElement.scrollTop || window.scrollY;
    var timer = null;
    timer = setInterval(() => {
        if (height >= 0) {
            height -= 20;
            document.documentElement.scrollTop = height;
        }else{
            clearInterval(timer)
        }
    }, 10)
}

document.onscroll = function(){
    let height = document.documentElement.scrollTop || window.scrollY;
    if(height <= 0){
        btn.style.display = 'none'
    }else{
        btn.style.display = 'block'
    }
}