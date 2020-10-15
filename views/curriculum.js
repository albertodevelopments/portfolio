/*-------------------------------------------------------------*/
/*--------------------- PROGRAMA PRINCIPAL --------------------*/
/*-------------------------------------------------------------*/
'use strict'

const curriculumPage = {
    buildCurriculumPage: getLabel => {

        const curriculumHTML = `
            <article class='root_body'>
                <h1 class='root_body_h1'>${getLabel('curriculum.title')}</h1>
                <h2 class='curriculum_h2'>${getLabel('curriculum.education')}</h2>
                <p class='text-justify'>
                    <h3 class='curriculum_h3'>Universidad Central de Barcelona</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.education.first')}
                    </p>
                    <h3 class='curriculum_h3'>Alexandre Satorras, Mataró</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.education.second')}
                    </p>
                </p>
                <h2 class='curriculum_h2'>${getLabel('curriculum.other.trainings.title')}</h2>
                <p class='curriculum_paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph1')}
                </p>
                <p class='curriculum_paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph2')}
                </p>
                <p class='curriculum_paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph3')}
                </p>
                <p class='curriculum_paragraph text-justify'>
                    ${getLabel('curriculum.other.trainings.paragraph4')}
                </p>
                <ul class='curriculum_paragraph_list'>
                    <li class='curriculum_paragraph_list_line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line1')}
                    </li>
                    <li class='curriculum_paragraph_list_line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line2')}
                    </li>
                    <li class='curriculum_paragraph_list_line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line3')}
                    </li>
                    <li class='curriculum_paragraph_list_line text-justify'>
                        ${getLabel('curriculum.other.trainings.paragraph4.line4')}
                    </li>
                </ul>
                <h2 class='curriculum_h2'>${getLabel('curriculum.work.experience.title')}</h2>
                <p class='text-justify'>
                    <h3 class='curriculum_h3'>${getLabel('curriculum.work.experience.paragraph1.title')}</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph1.text')}
                    </p>
                    <h3 class='curriculum_h3'>${getLabel('curriculum.work.experience.paragraph2.title')}</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph2.text')}
                    </p>
                    <h3 class='curriculum_h3'>${getLabel('curriculum.work.experience.paragraph3.title')}</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph3.text')}
                    </p>
                    <h3 class='curriculum_h3'>${getLabel('curriculum.work.experience.paragraph4.title')}</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph4.text')}
                    </p>
                    <h3 class='curriculum_h3'>${getLabel('curriculum.work.experience.paragraph5.title')}</h3>
                    <p class='curriculum_paragraph text-justify'>
                        ${getLabel('curriculum.work.experience.paragraph5.text')}
                    </p>
                </p>
            </article>
        `
        document.getElementById('root').innerHTML = curriculumHTML
        curriculumPage.setCurriculumAsCurrentSelection()   
    },
    setCurriculumAsCurrentSelection: () => {
        document.getElementById('curriculum').classList.add('dark_blue')
        document.getElementById('about').classList.remove('dark_blue')
        document.getElementById('projects').classList.remove('dark_blue')
    }
}
