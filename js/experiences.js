"use strict";

var experienceEvents = () => {
    tabsOnClick();
    getSkillsData();
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

function getSkillsData() {
    readJSON('/resources/json/skills.json', createSkills)
}

function createSkills(skillsData) {
    const skillsContainer = document.querySelector('.skills-content');

    if (skillsData.length == 0) {
        skillsContainer.innerHTML = `<span class="none-text">No skills found</span>`;
        return;
    }

    skillsData.forEach(skill => {
        let skillList = '';

        skill.skills.forEach(s => {
            skillList += `
                <li class="skill">
                    <img src="./resources/images/icons/skills/${skill.type}/${s.logo}" alt="" class="skill-logo">
                    <p class="skill-name">${s.name}</span></p>
                    <div class="rate-background">
                        <div class="rate-bar" style="width: ${s.rate}%;"></div>
                    </div>
                </li>
            `;
        });

        skillsContainer.innerHTML += `
            <div class="skills-container">
                <h4 class="skills-title">${skill.type}</h4>
                <ul class="skills-list">
                    ${skillList}
                </ul>
            </div>
        `;
    })
}