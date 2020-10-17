/*-------------------------------------------------------------*/
/*---------------- VISTA DE LA PÁGINA PROYECTOS ---------------*/
/*-------------------------------------------------------------*/
'use strict'

const projectsPage = {
    buildProjectsPage: getLabel => {
        const projectsHTML = `
            <article class='root__body__project'>
                <h1 class='root__body__h1'>${getLabel('projects.title')}</h1>
                <div class='projects__img__row'>
                    <div>
                        <a href='#/projects/todolist'><img id='todolist' src='../assets/img/todolist/principal.png' class='projects__project__img'></a>
                        <h2 class='projects__project__title'>${getLabel('projects.project1.title')}</h2>
                        <p class='projects__project__description'>${getLabel('projects.project1.description')}</p>
                    </div>
                    <div>
                        <img src='../assets/img/todolist/principal.png' class='projects__project__img'>
                        <h2 class='projects__project__title'>${getLabel('projects.project1.title')}</h2>
                        <p class='projects__project__description'>${getLabel('projects.project1.description')}</p>
                    </div>
                </div>
            </article>
        `
        document.getElementById('root').innerHTML = projectsHTML
        projectsPage.setProjectsAsCurrentSelection()
    },
    setProjectsAsCurrentSelection: () => {
        document.getElementById('curriculum').classList.remove('dark-blue')
        document.getElementById('about').classList.remove('dark-blue')
        document.getElementById('projects').classList.add('dark-blue')
    }
}
