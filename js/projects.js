"use strict";

var projectData;

var projectsEvents = () => {
    getData();
}

var getData = () => {
    readJSON('/resources/json/projects.json', createProjects);
}

var createProjects = (data) => {
    const projectContainer = document.querySelector('.projects-container');

    if (data.length == 0) {
        projectContainer.innerHTML += `<span class="none-text">No projects found<span/>`;
        return;
    }

    projectData = data
    for (let i = 0; i < projectData.length; i++) {
        let currentProject = projectData[i];
        let projectTags = '';

        if (currentProject.tags.length > 0) {
            // for (let tag of currentProject.tags) {
            for (let j = 0; j < currentProject.tags.length && j < 3; j++) {
                projectTags += `<span class="tag">${currentProject.tags[j]}</span>`;
            }
        } 

        projectContainer.innerHTML += `
            <div class="project-card" onclick="cardClicked(${i})">
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

var cardClicked = (id) => {
    var project = projectData[id];
    var detailContainer = document.querySelector('#project-detail');
    let imgs = '';
    let tags = '';

    if (project.imageUrls.length > 0) {
        for (let img = 0; img < project.imageUrls.length; img++) {
            imgs += `<img src="${project.imageUrls[img]}" />`;
        }
    } else {
        imgs = '<span class="none-text">No images found<span/>'
    }

    if (project.tags.length > 0) {
        for (let tag = 0; tag < project.tags.length; tag++) {
            tags += `<span class="detail-tag">${project.tags[tag]}</span>`;
        }
    } else {
        imgs = '<span class="none-text">No tags found<span/>'
    }

    detailContainer.innerHTML = `
        <div class="detail-header">
            <div class="detail-nav">
                <h1 class="detail-title">${project.title}</h1>
                <div class="detail-button">
                    <a href="${project.demo}" target="_blank" class="demo">Demo</a>
                    <a href="${project.repo}" target="_blank" class="repo">Repo</a>
                </div>
            </div>
            <button id="close-detail" aria-controls="project-detail" onclick="closeDetail()"></button>
        </div>
        <div class="detail-content">
            <p class="detail-description">
                ${project.description}
            </p>
            <div class="image-container">
                ${imgs}
            </div>
        </div>
        <div class="detail-footer">
            <div class="detail-tags">
                ${tags}
            </div>
            <span class="detail-type">${project.type}</span>
        </div>
    `;

    detailContainer.setAttribute('aria-expanded', true);
}

var closeDetail = () => {
    var detailContainer = document.querySelector('#project-detail');

    detailContainer.setAttribute('aria-expanded', false);
}