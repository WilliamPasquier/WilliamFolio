"use strict";

window.onload = () => {
    navEvents();
    homeEvents();
    whoEvents();

    entryAnimation();
}

window.onresize = () => {
    getScreenSize();
}

var entryAnimation = () => {
    const elements = document.querySelectorAll('.entry_anim');
    let index = 0;

    const interval = setInterval(() => {
        if (index < elements.length) {
            const el = elements[index];
            el.style.animation = '2s anim-lineUp ease-out';
            el.style.opacity = '1';
            index++;
        } else {
            clearInterval(interval);
        }
    }, 400);
};