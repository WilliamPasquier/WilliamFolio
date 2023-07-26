"use strict";

var navEvents = () => {
    burgerBtnDetection();
}

var burgerBtnDetection = () => {
    const primaryNav = document.querySelector('.primary-nav');
    const navToggle = document.querySelector('.nav-toggle');
    
    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
    
        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        } else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    })
};

var changeNavbarOnScroll = () => {
    const navbar = document.querySelector('.primary-header');

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) { 
        navbar.style.backgroundColor = 'rgba( 27, 22, 49, 0.6 )';

        if (CSS.supports("backdrop-filter", "blur(6px)")) {
            navbar.style.backdropFilter = 'blur(6px)'
        }
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none'
    }
}