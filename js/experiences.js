"use strict";

var experienceEvents = () => {
    tabsOnClick();
}

var tabsOnClick = () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.sub-sections');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            var current = document.querySelector('.active-tab');

            if (current) {
                current.classList.remove('active-tab')
            }

            tab.classList.add('active-tab');

            sections.forEach( section => { section.classList.remove('active-section') });
            sections[index].classList.add('active-section')
        })
    })
}