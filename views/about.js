/*-------------------------------------------------------------*/
/*------------------ VISTA DE LA PÁGINA ABOUT -----------------*/
/*-------------------------------------------------------------*/
'use strict'

const aboutPage = {
    buildAboutPage: getLabel => {
        const aboutHTML = `
            <article class='root_body'>
                <h1 class='root_body_h1'>${getLabel('about.title')}</h1>
                <div class='root_body_about'>
                    <img src='../assets/img/portrait.jpg' class='about_img'>
                    <div>
                        <p class='about_paragraph'>
                            ${getLabel('about.paragraph1')}
                        </p>
                        <p class='about_paragraph'>
                            ${getLabel('about.paragraph2')}
                        </p>
                        <p class='about_paragraph'>
                            ${getLabel('about.paragraph3')}
                        </p>
                        <p class='about_paragraph'>
                            <ul class='about_list'>
                                <li class='about_list_item'>
                                    <a class='link' target=_blank href=${getLabel('about.linkedin.link')}>${getLabel('about.linkedin.text')}</a>
                                </li>
                                <li class='about_list_item'>
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
        document.getElementById('curriculum').classList.remove('dark_blue')
        document.getElementById('about').classList.add('dark_blue')
        document.getElementById('projects').classList.remove('dark_blue')
    }
    
}