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
            for (let j = 0; j < currentProject.tags.length && j <= 3; j++) {
                if (j == 3) {
                    projectTags += `
                        <li>
                            <img class="tag" src="./resources/images/badges/tech/dot.svg" alt="" />
                        </li>
                    `;
                    break;
                }

                projectTags += `
                    <li>
                        <img class="tag" src="./resources/images/badges/tech/${currentProject.tags[j]}_badge.svg" alt="" />
                    </li>
                `;
            }
        } 

        // projectContainer.innerHTML += `
        //     <div class="project-card" onclick="cardClicked(${i})">
        //         <div id class="card-header">
        //             <h1 class="card-title">${currentProject.title}</h1>
        //             <span class="card-year">${currentProject.year}</span>
        //         </div>
        //         <div class="card-content">
        //             <p class="card-pre-description">${currentProject.previewDescription}</p>
        //         </div>
        //         <hr>
        //         <div class="card-footer">
        //             <div class="card-tags">
        //                 ${projectTags}
        //             </div>
        //             <span class="card-type">${currentProject.type}</span>
        //         </div>
        //     </div>
        // `;

        projectContainer.innerHTML += `
        <div class="project-card" onclick="cardClicked(${i})">   
            <div class="card-content">
                <div class="card-header">
                    <div class="title-container">
                        <img class="project-icon" src="${currentProject.icon}" />
                        <h2 class="card-title bold">${currentProject.title}</h2>
                    </div>
                    <span class="card-year bold medium-font">${currentProject.year}</span>
                </div>
                <p class="card-pre-description medium-font">${currentProject.previewDescription}</p>
                <span class="card-type bold medium-font">${currentProject.type}</span>
            </div>
            <ul class="card-tags">
                ${projectTags}
            </ul>
            <div class="overlay">
                <p class="more-text"><img src="./resources/images/icons/clic-icon.svg"/>Click to see more</p>
            </div>
        </div>
        `;
    }
}

var cardClicked = (id) => {
    var project = projectData[id];
    var detailContainer = document.querySelector('#project-detail');
    let links = '<div class="detail-button">';
    let imgs = '';
    let tags = '';
    let descs = '';

    if (project.imageUrls.length > 0) {
        for (let img = 0; img < project.imageUrls.length; img++) {
            imgs += `<img src="${project.imageUrls[img]}" />`;
        }
    } else {
        imgs = '<span class="none-text">No images found<span/>'
    }

    if (project.tags.length > 0) {
        for (let tag = 0; tag < project.tags.length; tag++) {
            tags += `
                <li>
                    <img class="detail-tag" src="./resources/images/badges/tech/${project.tags[tag]}_badge.svg" />
                </li>
            `;
        }
    } else {
        imgs = '<li class="none-text">No tags found<li/>'
    }

    if (project.description.length > 0) {
        for (let desc = 0; desc < project.description.length; desc++) {
            descs += `
                <p class="detail-description">
                    ${project.description[desc]}
                </p>
                <br/>
            `;
        }
    } else {
        descs = '<p class="none-text">No descriptions found<p/>'
    }

    if (project.demo) {
        links += `<a href="${project.demo}" target="_blank" class="demo"></a>`;
    }

    if (project.repo) { 
        links += `<a href="${project.repo}" target="_blank" class="repo"></a>`;
    }

    links += '</div>';

    detailContainer.innerHTML = `
        <section class="detail-header">
            <div class="detail-nav">
                <img class="detail-icon" src="${project.icon}" />
                <h1 class="detail-title">${project.title}</h1>
                ${links}
            </div>
            <button id="close-detail" aria-controls="project-detail" onclick="closeDetail()"></button>
        </section>
        <section class="detail-content">
            <div class="description-container">
                ${descs}
            </div>
            <div class="image-container">
                ${imgs}
            </div>
        </section>
        <section class="detail-footer">
            <ul class="detail-tags">
                ${tags}
            </ul>
            <span class="detail-type">${project.type}</span>
        </section>
    `;

    detailContainer.setAttribute('aria-expanded', true);
}

var closeDetail = () => {
    var detailContainer = document.querySelector('#project-detail');

    detailContainer.setAttribute('aria-expanded', false);
}