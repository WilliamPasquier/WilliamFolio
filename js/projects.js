"use strict";

var projectsEvents = () => {
    getData();
}

var getData = () => {
    readJSON('/resources/json/projects.json', createProjects);
}

var createProjects = (data) => {
    console.log(data);
    let projectTags = '';
    
    const projectContainer = document.querySelector('.projects-container');
    
    for (let currentProject of data) {
        for (let tag of currentProject.tags) {
            projectTags += `<span class="tag">${tag}</span>`;
        }

        projectContainer.innerHTML += `
        <div class="project-card" id="${currentProject.id}">
            <div id class="card-header">
                <h1 class="card-title">${currentProject.title}</h1>
                <span class="card-year">${currentProject.year}</span>
            </div>
            <div class="card-content">
                <p class="card-pre-description">${currentProject.previewDescription}</p>
            </div>
            <hr>
            <div class="card-footer">
                <div class="card-tags">
                    ${projectTags}
                </div>
                <span class="card-type">${currentProject.type}</span>
            </div>
        </div>
        `;
    }

}