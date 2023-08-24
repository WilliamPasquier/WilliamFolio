"use strict";

var homeEvents = () => {
    getScreenSize();
}

var getScreenSize = () => {
    const homeSection = document.querySelector('#home');
    let height = window.innerHeight;
    
    if (height < 480) {
        height = 480;
    }

    homeSection.style.height = `${height}px`;
}

