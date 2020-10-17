/*-------------------------------------------------------------*/
/*--------------------- PROGRAMA PRINCIPAL --------------------*/
/*-------------------------------------------------------------*/
'use strict'

const curriculumPage = {
    buildCurriculumPage: getLabel => {

        const curriculumHTML = `
            <article class='root__body'>
                <h1 class='root__body__h1'>${getLabel('curriculum.title')}</h1>
                <h2 class='curriculum__h2'>${getLabel('curriculum.education')}</h2>
                <p class='text-justify'>
                    <h3 class='curriculum__h3'>Universidad Central de Barcelona</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.education.first')}
                    </p>
                    <h3 class='curriculum__h3'>Alexandre Satorras, Mataró</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.education.second')}
                    </p>
                </p>
                <h2 class='curriculum__h2'>${getLabel('curriculum.other.trainings.title')}</h2>
                <p class='curriculum__paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph1')}
                </p>
                <p class='curriculum__paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph2')}
                </p>
                <p class='curriculum__paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph3')}
                </p>
                <p class='curriculum__paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph4')}
                </p>
                <ul class='curriculum__paragraph__list'>
                    <li class='curriculum__paragraph__list__line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line1')}
                    </li>
                    <li class='curriculum__paragraph__list__line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line2')}
                    </li>
                    <li class='curriculum_paragraph__list__line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line3')}
                    </li>
                    <li class='curriculum_paragraph__list__line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line4')}
                    </li>
                </ul>
                <h2 class='curriculum__h2'>${getLabel('curriculum.work.experience.title')}</h2>
                <p class='text-justify'>
                    <h3 class='curriculum__h3'>${getLabel('curriculum.work.experience.paragraph1.title')}</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph1.text')}
                    </p>
                    <h3 class='curriculum__h3'>${getLabel('curriculum.work.experience.paragraph2.title')}</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph2.text')}
                    </p>
                    <h3 class='curriculum__h3'>${getLabel('curriculum.work.experience.paragraph3.title')}</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph3.text')}
                    </p>
                    <h3 class='curriculum__h3'>${getLabel('curriculum.work.experience.paragraph4.title')}</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph4.text')}
                    </p>
                    <h3 class='curriculum__h3'>${getLabel('curriculum.work.experience.paragraph5.title')}</h3>
                    <p class='curriculum__paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph5.text')}
                    </p>
                </p>
            </article>
        `
        document.getElementById('root').innerHTML = curriculumHTML
        curriculumPage.setCurriculumAsCurrentSelection()   
    },
    setCurriculumAsCurrentSelection: () => {
        document.getElementById('curriculum').classList.add('dark-blue')
        document.getElementById('about').classList.remove('dark-blue')
        document.getElementById('projects').classList.remove('dark-blue')
    }
}
