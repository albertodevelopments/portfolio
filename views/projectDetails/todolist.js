/*-------------------------------------------------------------*/
/*---------------- DETALLE DEL PROYECTO TODOLIST --------------*/
/*-------------------------------------------------------------*/
'use strict'

const todoListPage = {
    currentImage: 0,
    buildTodoListPage: getLabel => {
        const todoListProjectHTML = `
            <article class='root_body_project'>
                <h1 class='root_body_h1'>${getLabel('projects.project1.title')}</h1>
                <h2 class='project_detail_h2'>${getLabel('projects.project1.description')}</h2>
                <p class='project_description'>${getLabel('project1.long.description')}</p>

                <h2 class='project_detail_h2'>${getLabel('project.screenshots')}</h2>
                <div class='project_slider_container'>
                    <span class='project_slide' id='todolist_slider_prev'><i class="fa fa-angle-left fa-lg project_left_arrow"></i></span>
                    <div class='project_slider'>
                        <img class='project_slider_img' src='./assets/img/todolist/google-login-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/creando-tarea-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/errores-spanish-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/errores-english-small.png'>                    
                        <img class='project_slider_img' src='./assets/img/todolist/lista-tareas-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/lista-tareas-english-small.png'>
                    </div>
                    <div class='project_slider_sm'>
                        <img class='project_slider_img' src='./assets/img/todolist/google-login-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/creando-tarea-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/errores-spanish-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/errores-english-small.png'>                    
                        <img class='project_slider_img' src='./assets/img/todolist/lista-tareas-small.png'>
                        <img class='project_slider_img' src='./assets/img/todolist/lista-tareas-english-small.png'>
                    </div>
                    <span class='project_slide' id='todolist_slider_next'><i class="fa fa-angle-right fa-lg project_right_arrow"></i></span>
                </div>

                <h2 class='project_detail_h2'>${getLabel('projects.project1.tecnologies')}</h2>
                <ul class='project_list'>
                    <li class='project_list_item'>${getLabel('projects.project1.tecnology1')}</li>
                    <li class='project_list_item'>${getLabel('projects.project1.tecnology2')}</li>
                    <li class='project_list_item'>${getLabel('projects.project1.tecnology3')}</li>
                    <li class='project_list_item'>${getLabel('projects.project1.tecnology4')}</li>
                    <li class='project_list_item'>${getLabel('projects.project1.tecnology5')}</li>
                </ul> 
                <h2 class='project_detail_h2'>${getLabel('projects.project1.links')}</h2>
                <ul class='project_list'>
                    <li class='project_list_item'>
                        <a class='link' target=_blank href=${getLabel('projects.project1.link1')}>${getLabel('projects.project1.link1.text')}</a>
                    </li>
                    <li class='project_list_item'>
                        <a class='link' target=_blank href=${getLabel('projects.project1.link2')}>${getLabel('projects.project1.link2.text')}</a>
                    </li>
                </ul>
            </article>
        `

        document.getElementById('root').innerHTML = todoListProjectHTML

        // Gestionamos eventos del slide
        document.getElementById('todolist_slider_prev').addEventListener('click', todoListPage.slideLeft)
        document.getElementById('todolist_slider_next').addEventListener('click', todoListPage.slideRight)

        document.getElementById('todolist_slider_prev').style.opacity = todoListPage.currentImage
        document.getElementById('todolist_slider_next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1

        window.onresize = () => {
            document.querySelectorAll('.project_slider_img').forEach(element => {
                element.style.transform = 'unset'
                element.style.transition = 'unset'
                todoListPage.currentImage = 0
            })
        }
    },
    slideRight: () => {
        if(todoListPage.currentImage < 5){
            let containerWidth = document.querySelectorAll('.project_slider')[0].offsetWidth
            if(window.innerWidth <= 560){
                containerWidth = document.querySelectorAll('.project_slider_sm')[0].offsetWidth
            }

            document.querySelectorAll('.project_slider_img').forEach(element => {
                const offset = (todoListPage.currentImage + 1) * containerWidth
                element.style.transform =`translate(-${offset}px)`
                element.style.transition = 'all 1s ease'       
            })
            todoListPage.currentImage++

            document.getElementById('todolist_slider_prev').style.opacity = todoListPage.currentImage
            document.getElementById('todolist_slider_next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1
        }
    },
    slideLeft: () => {
        if(todoListPage.currentImage > 0){
            let containerWidth = document.querySelectorAll('.project_slider')[0].offsetWidth
            if(window.innerWidth <= 560){
                containerWidth = document.querySelectorAll('.project_slider_sm')[0].offsetWidth
            }

            document.querySelectorAll('.project_slider_img').forEach(element => {
                const offset = (todoListPage.currentImage - 1) * containerWidth
                element.style.transform =`translate(-${offset}px)`
                element.style.transition = 'all 1s ease'
            })
            todoListPage.currentImage--

            document.getElementById('todolist_slider_prev').style.opacity = todoListPage.currentImage
            document.getElementById('todolist_slider_next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1
        }
    },
}
