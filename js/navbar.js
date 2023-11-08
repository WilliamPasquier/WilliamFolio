"use strict";

var navEvents = () => {
    burgerBtnDetection();
    // TODO : Hide navbar when scroll down
    // hideNavbarOnScroll();
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

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
        navbar.style.backgroundColor = 'rgba( 27, 22, 49, 0.9 )';
        navbar.style.boxShadow = '0 0.5rem 2rem 0 rgba( 0, 0, 0, 0.6 )';

        if (CSS.supports("backdrop-filter", "blur(6px)")) {
            navbar.style.backdropFilter = 'blur(6px)'
        }
    } else {
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
    }
}

// TODO : Hide navbar when scroll down
// var hideNavbarOnScroll = () => {
//     const navbar = document.querySelector('.primary-header');
//     var prevScrollpos = window.scrollY;

//     window.onscroll = function() {
//         var currentScrollPos = window.scrollY;
        
//         if (prevScrollpos < currentScrollPos) {
//             navbar.style.top = "-100%";
//         } else {
//             navbar.style.top = "0";
//         }

//         prevScrollpos = currentScrollPos;
//     }
// }