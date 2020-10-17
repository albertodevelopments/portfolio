/*-------------------------------------------------------------*/
/*--------------- EVENTOS DEL MENÚ DE NAVEGACIÓN --------------*/
/*-------------------------------------------------------------*/
'use strict'

const navigation = {
    currentPage: 'about',
    loadNavigation: () => {
        window.addEventListener('hashchange', () => {

            const uri = !location.hash ? 'about' : location.hash.replace('#/', '')

            navigation.setCurrentPage(uri)
            switch(uri){
                case 'about':
                    aboutPage.buildAboutPage(translation.getLabel)
                    break
                case 'curriculum':
                    curriculumPage.buildCurriculumPage(translation.getLabel)                    
                    break
                case 'projects':
                    projectsPage.buildProjectsPage(translation.getLabel)
                    break
                case 'projects/todolist':
                    todoListPage.buildTodoListPage(translation.getLabel)
                    break
                default:
                    break
            }   
        })
    },
    setCurrentPage: current => {
        navigation.currentPage = current
    }
}
