"use strict";

window.onload = () => {
    navEvents();
    homeEvents();
    whoEvents();
    projectsEvents();
    experienceEvents();
}

window.onresize = () => {
    getScreenSize();
}

window.onscroll = () => {
    changeNavbarOnScroll();
}
