import {default as menu} from './modules/menu.js';
import {default as accordion} from './modules/accordion.js';
import {default as swiper} from './modules/swiper.js';
import {default as tabs} from './modules/tabs.js';

menu();
accordion();
swiper();
tabs();

let toUp = document.querySelector('.to-up');

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        toUp.style.opacity = '1';
        toUp.style.visibility = 'visible';
    } else {
        toUp.style.opacity = '0';
        toUp.style.visibility = 'hidden';
    }
}

