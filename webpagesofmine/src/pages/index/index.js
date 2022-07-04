//公共样式
import 'styles/reset.css'
import 'styles/layout.css'
import 'icons/icon-font.css'
// 样式
import './index.css'

//组件
import 'components/top-bar'
import 'components/header-nav'
import './slider'
import './right-tab'
import './main'
import 'components/back-top'
import 'components/footer'

const width = window.innerWidth;
const html = document.querySelector('html');
html.style.fontSize = width/800*100 + 'px'