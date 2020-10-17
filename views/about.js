/*-------------------------------------------------------------*/
/*------------------ VISTA DE LA PÁGINA ABOUT -----------------*/
/*-------------------------------------------------------------*/
'use strict'

const aboutPage = {
    buildAboutPage: getLabel => {
        const aboutHTML = `
            <article class='root__body'>
                <h1 class='root__body__h1'>${getLabel('about.title')}</h1>
                <div class='root__body__about'>
                    <img src='../assets/img/portrait.jpg' class='about__img'>
                    <div>
                        <p class='about__paragraph'>
                            ${getLabel('about.paragraph1')}
                        </p>
                        <p class='about__paragraph'>
                            ${getLabel('about.paragraph2')}
                        </p>
                        <p class='about__paragraph'>
                            ${getLabel('about.paragraph3')}
                        </p>
                        <p class='about__paragraph'>
                            <ul class='about__list'>
                                <li class='about__list__item'>
                                    <a class='link' target=_blank href=${getLabel('about.linkedin.link')}>${getLabel('about.linkedin.text')}</a>
                                </li>
                                <li class='about__list__item'>
                                    ${getLabel('about.email.text')}${getLabel('about.email')}
                                </li>
                            </ul>
                        </p>
                    <div>
                </div>
            </article>
        `
        document.getElementById('root').innerHTML = aboutHTML
        aboutPage.setAboutAsCurrentSelection()
    },
    setAboutAsCurrentSelection: () => {
        document.getElementById('curriculum').classList.remove('dark-blue')
        document.getElementById('about').classList.add('dark-blue')
        document.getElementById('projects').classList.remove('dark-blue')
    }
    
}