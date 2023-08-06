"use strict";

var experienceEvents = () => {
    tabsOnClick();
}

var setLine = () => {
    const active = document.querySelector('.active-tab');
    const line = document.querySelector('.line');
    
    line.style.width = active.offsetWidth + "px";
    line.style.left = active.offsetLeft + "px";
}

var tabsOnClick = () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.sub-sections');
    const line = document.querySelector('.line');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            var current = document.querySelector('.active-tab');

            if (current) {
                current.classList.remove('active-tab')
            }

            tab.classList.add('active-tab');

            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";

            sections.forEach( section => { section.classList.remove('active-section') });
            sections[index].classList.add('active-section')
        })
    })
}