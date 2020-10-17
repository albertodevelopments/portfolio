/*-------------------------------------------------------------*/
/*---------------- DETALLE DEL PROYECTO TODOLIST --------------*/
/*-------------------------------------------------------------*/
'use strict'

const todoListPage = {
    currentImage: 0,
    buildTodoListPage: getLabel => {
        const todoListProjectHTML = `
            <article class='root__body__project'>
                <h1 class='root__body__h1'>${getLabel('projects.project1.title')}</h1>
                <h2 class='project__detail__h2'>${getLabel('projects.project1.description')}</h2>
                <p class='project__description'>${getLabel('project1.long.description')}</p>

                <h2 class='project__detail__h2'>${getLabel('project.screenshots')}</h2>
                <div class='project__slider__container'>
                    <span class='project__slide' id='todolist__slider__prev'><i class="fa fa-angle-left fa-lg project__left__arrow"></i></span>
                    <div class='project__slider'>
                        <img class='project__slider__img' src='./assets/img/todolist/google-login-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/creando-tarea-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/errores-spanish-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/errores-english-small.png'>                    
                        <img class='project__slider__img' src='./assets/img/todolist/lista-tareas-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/lista-tareas-english-small.png'>
                    </div>
                    <div class='project__slider__sm'>
                        <img class='project__slider__img' src='./assets/img/todolist/google-login-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/creando-tarea-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/errores-spanish-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/errores-english-small.png'>                    
                        <img class='project__slider__img' src='./assets/img/todolist/lista-tareas-small.png'>
                        <img class='project__slider__img' src='./assets/img/todolist/lista-tareas-english-small.png'>
                    </div>
                    <span class='project__slide' id='todolist__slider__next'><i class="fa fa-angle-right fa-lg project__right__arrow"></i></span>
                </div>

                <h2 class='project__detail__h2'>${getLabel('projects.project1.tecnologies')}</h2>
                <ul class='project__list'>
                    <li class='project__list__item'>${getLabel('projects.project1.tecnology1')}</li>
                    <li class='project__list__item'>${getLabel('projects.project1.tecnology2')}</li>
                    <li class='project__list__item'>${getLabel('projects.project1.tecnology3')}</li>
                    <li class='project__list__item'>${getLabel('projects.project1.tecnology4')}</li>
                    <li class='project__list__item'>${getLabel('projects.project1.tecnology5')}</li>
                </ul> 
                <h2 class='project__detail__h2'>${getLabel('projects.project1.links')}</h2>
                <ul class='project__list'>
                    <li class='project__list__item'>
                        <a class='link' target=_blank href=${getLabel('projects.project1.link1')}>${getLabel('projects.project1.link1.text')}</a>
                    </li>
                    <li class='project__list__item'>
                        <a class='link' target=_blank href=${getLabel('projects.project1.link2')}>${getLabel('projects.project1.link2.text')}</a>
                    </li>
                </ul>
            </article>
        `

        document.getElementById('root').innerHTML = todoListProjectHTML

        // Gestionamos eventos del slide
        document.getElementById('todolist__slider__prev').addEventListener('click', todoListPage.slideLeft)
        document.getElementById('todolist__slider__next').addEventListener('click', todoListPage.slideRight)

        document.getElementById('todolist__slider__prev').style.opacity = todoListPage.currentImage
        document.getElementById('todolist__slider__next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1

        window.onresize = () => {
            document.querySelectorAll('.project__slider__img').forEach(element => {
                element.style.transform = 'unset'
                element.style.transition = 'unset'
                todoListPage.currentImage = 0
            })
        }

        todoListPage.clearCurrentMenuSelection()
    },
    slideRight: () => {
        if(todoListPage.currentImage < 5){
            let containerWidth = document.querySelectorAll('.project__slider')[0].offsetWidth
            if(window.innerWidth <= 560){
                containerWidth = document.querySelectorAll('.project__slider__sm')[0].offsetWidth
            }

            document.querySelectorAll('.project__slider__img').forEach(element => {
                const offset = (todoListPage.currentImage + 1) * containerWidth
                element.style.transform =`translate(-${offset}px)`
                element.style.transition = 'all 1s ease'       
            })
            todoListPage.currentImage++

            document.getElementById('todolist__slider__prev').style.opacity = todoListPage.currentImage
            document.getElementById('todolist__slider__next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1
        }
    },
    slideLeft: () => {
        if(todoListPage.currentImage > 0){
            let containerWidth = document.querySelectorAll('.project__slider')[0].offsetWidth
            if(window.innerWidth <= 560){
                containerWidth = document.querySelectorAll('.project__slider__sm')[0].offsetWidth
            }

            document.querySelectorAll('.project__slider__img').forEach(element => {
                const offset = (todoListPage.currentImage - 1) * containerWidth
                element.style.transform =`translate(-${offset}px)`
                element.style.transition = 'all 1s ease'
            })
            todoListPage.currentImage--

            document.getElementById('todolist__slider__prev').style.opacity = todoListPage.currentImage
            document.getElementById('todolist__slider__next').style.opacity = todoListPage.currentImage >= 5 ? 0 : 1
        }
    },
    clearCurrentMenuSelection: () => {
        document.getElementById('curriculum').classList.remove('dark-blue')
        document.getElementById('about').classList.remove('dark-blue')
        document.getElementById('projects').classList.remove('dark-blue')
    }
}
