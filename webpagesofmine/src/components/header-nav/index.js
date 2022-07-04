import './header-nav.css'

const bgcBtn = document.getElementById('bgc-btn');
const body = document.querySelector('body');

bgcBtn.onclick = function(){
    if(!body.classList.contains('trs')){
        body.classList.add('trs');
        bgcBtn.classList.remove('icon-Sun');
        bgcBtn.classList.add('icon-Moon-Star')
    }else{
        body.classList.remove('trs');
        bgcBtn.classList.remove('icon-Moon-Star');
        bgcBtn.classList.add('icon-Sun')
    }
}