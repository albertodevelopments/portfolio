/*-------------------------------------------------------------*/
/*--------------------- PROGRAMA DE INICIO --------------------*/
/*-------------------------------------------------------------*/
'use strict'

const init = async () => {

    await translation.buildTranslationsArray()

    const buildSite = () => {
        header.buildHeader(translation.getLabel)
        curriculumPage.buildCurriculumPage(translation.getLabel)
        projectsPage.buildProjectsPage(translation.getLabel)
        aboutPage.buildAboutPage(translation.getLabel)
    }

    buildSite()
    navigation.loadNavigation()    
}

document.addEventListener('DomContentLoaded', init())



