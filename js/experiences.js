"use strict";

var experienceEvents = () => {
    tabsOnClick();
    getSkillsData();
    getCompaniesData();
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

function getCompaniesData() {
    readJSON('/resources/json/companies.json', createCompanies)
}

function createSkills(skillsData) {
    const skillsContainer = document.querySelector('#skills-content');
    
    if (skillsData.length == 0) {
        skillsContainer.innerHTML = `<span class="none-text">No skills found</span>`;
        return;
    }

    skillsData.forEach(skill => {
        let skillList = '';
        
        skill.skills.forEach(s => {
            var type = skill.type;

            if(type.indexOf(' ') > 0){
                type = type.replace(/\s/g, '_');
            }

            skillList += `
            <li class="skill">
                <img src="./resources/images/icons/skills/${type}/${s.logo}" alt="" class="skill-logo">
                <p class="skill-name medium-font">${s.name}</span></p>
                <div class="rate-background">
                    <div class="rate-bar" style="width: ${s.rate}%;"></div>
                </div>
            </li>
            `;
        });

        skillsContainer.innerHTML += `
        <div class="skills-container white-box-shadow">
            <h4 class="skills-title">${skill.type}</h4>
            <ul class="skills-list">
                ${skillList}
            </ul>
        </div>
        `;
    })
}

function createCompanies(companiesData) {
    const companiesContainer = document.querySelector('#companies-content');

    if (companiesData.length == 0) {
        skillsContainer.innerHTML = `<span class="none-text">No Companies found</span>`;
        return;
    }

    companiesData.forEach(company => {
        let desc = '';

        company.description.forEach(d => {
            desc += `
            <p class="company-description medium-font">
                ${d}
            </p>
            `
        })

        companiesContainer.innerHTML += `
            <div class="company-card">
                <a href="${company.link}" target="_blank" rel="noopener noreferrer">
                    <img src="./resources/images/icons/companies/${company.logo}" alt="" class="company-logo">
                </a>
                <div class="company-content white-box-shadow">
                    <div class="company-header">
                        <h4 class="company-name">${company.companyName}</h4>
                        <span class="years medium-font">${company.startYear} - ${company.endYear}</span>
                    </div>
                    <div class="company-description">
                        ${desc}
                    </div>
                </div>
            </div>
        `;
    })
}