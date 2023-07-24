"use strict";

var whoEvents = () => {
    setAge();
}

var setAge = () => {
    const birthDay = 17;
    const birthMonth = 8;
    const birthYear = 2002;
    const ageElement = document.querySelector('#age-text');

    var age = new Date().getFullYear() - birthYear;
    if (new Date().getDay() < birthDay && new Date().getMonth() < birthMonth)
    {
        age--;
    }

    ageElement.textContent = age;
}