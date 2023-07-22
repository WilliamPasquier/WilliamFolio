"use strict";

var homeEvents = () => {
    getScreenSize();

    VanillaTilt.init(document.querySelector('.home-card'), {
        max: 2.5,
        speed: 200,
        glare: true,
        "max-glare": 0.1,
    })
}

var getScreenSize = () => {
    const homeSection = document.querySelector('#home');
    let height = window.innerHeight;
    
    if (height < 480) {
        height = 480;
    }

    homeSection.style.height = `${height}px`;
}

