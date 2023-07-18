"use strict";

var navEvents = () => {
    burgerBtnDetection();
    activeNavBtn();
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

var activeNavBtn = () => {
    const btns = document.querySelectorAll('.link-btn');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (function(index) {
            return function() {
                var current = document.querySelector('.active');
                if (current) {
                    current.classList.remove("active");
                }
                btns[index].classList.add("active");
            };
        })(i));
    }
};