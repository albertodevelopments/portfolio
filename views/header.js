/*-------------------------------------------------------------*/
/*-------------------- VISTA DE LA CABECERA -------------------*/
/*-------------------------------------------------------------*/
'use strict'

const header = {
    buildHeader: getLabel => {

        const headerHTML = `
            <h1 class='header__h1'><span class='header__h1_main'>Portfolio</span> <span class='header__h1__trailing'>${getLabel('header.title')}</span></h1>
            <nav class='header__nav'>
                <ul class='header__nav__menu'>
                    <li class='header__nav__menu__item'>
                        <a class='header__nav__menu__item__a' id='about' href='#/about'>-${getLabel('about.title')}-</a>
                    </li>
                    <li class='header__nav__menu__item'>
                        <a class='header__nav__menu__item__a' id='curriculum' href='#/curriculum'>-${getLabel('curriculum.title')}-</a>
                    </li>
                    <li class='header__nav__menu__item'>
                        <a class='header__nav__menu__item__a' id='projects' href='#/projects'>-${getLabel('projects.title')}-</a>
                    </li>
                    <li class='header__nav__menu__language'>
                        <label for='language'>${getLabel('header.language')}</label>
                        <select id='language' class='header__nav__menu__language__sel'>
                            <option value=''>
                                ${getLabel('header.language.default')}
                            </option>
                            <option value='es-ES'>
                                ${getLabel('header.language.spanish')}
                            </option>
                            <option value='en-US'>
                                ${getLabel('header.language.english')}
                            </option>
                        </select>
                    </li>
                </ul>
                <span class='header__nav__menu__language__sm'>
                    <label for='language-sm'>${getLabel('header.language')}</label>
                    <select id='language-sm' class='header__nav__menu__language__sel__sm'>
                        <option value=''>
                            ${getLabel('header.language.default')}
                        </option>
                        <option value='es-ES'>
                            ${getLabel('header.language.spanish')}
                        </option>
                        <option value='en-US'>
                            ${getLabel('header.language.english')}
                        </option>
                    </select>
                </span>
            </nav>
        `
        document.getElementById('header-nav').innerHTML = headerHTML

        document.getElementById('language').addEventListener('change', async e => {
            header.changeLanguage(e.target.value)            
        })

        document.getElementById('language-sm').addEventListener('change', async e => {
            header.changeLanguage(e.target.value)            
        })        
    },
    changeLanguage: async (language) => {
        translation.setLanguage(language)
        await translation.buildTranslationsArray()

        header.buildHeader(translation.getLabel) 
        switch(navigation.currentPage){
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
            }
    }
}
