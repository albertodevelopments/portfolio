/*-------------------------------------------------------------*/
/*---------------- VISTA DE LA PÁGINA PROYECTOS ---------------*/
/*-------------------------------------------------------------*/
'use strict'

const projectsPage = {
    buildProjectsPage: getLabel => {
        const projectsHTML = `
            <article class='root_body_project'>
                <h1 class='root_body_h1'>${getLabel('projects.title')}</h1>
                <div class='projects_img_row'>
                    <div>
                        <a href='#/projects/todolist'><img id='todolist' src='../assets/img/todolist/principal.png' class='projects_project_img'></a>
                        <h2 class='projects_project_title'>${getLabel('projects.project1.title')}</h2>
                        <p class='projects_project_description'>${getLabel('projects.project1.description')}</p>
                    </div>
                    <div>
                        <img src='../assets/img/todolist/principal.png' class='projects_project_img'>
                        <h2 class='projects_project_title'>${getLabel('projects.project1.title')}</h2>
                        <p class='projects_project_description'>${getLabel('projects.project1.description')}</p>
                    </div>
                </div>
            </article>
        `
        document.getElementById('root').innerHTML = projectsHTML
        projectsPage.setProjectsAsCurrentSelection()
    },
    setProjectsAsCurrentSelection: () => {
        document.getElementById('curriculum').classList.remove('dark_blue')
        document.getElementById('about').classList.remove('dark_blue')
        document.getElementById('projects').classList.add('dark_blue')
    }
}
