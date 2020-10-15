/*-------------------------------------------------------------*/
/*--------------------- PROGRAMA DE INICIO --------------------*/
/*-------------------------------------------------------------*/
'use strict'

const init = async () => {

    // const main = {
    //     translationsFile: '../data/translations.json',
    //     translationsArray: [],
    //     language: 'es-ES',
        
    //     // Construimos el array con todas las traducciones
    //     // buildTranslationsArray: language => {
    //     //     fetch(main.translationsFile)
    //     //         .then(result => result.json())
    //     //         .then(response => {
    //     //             main.translationsArray = response.labels.map(label => {
    //     //                 const obj = {}
    //     //                 obj.label = label.label
    //     //                 obj.translation = label[language]
    //     //                 return obj
    //     //             })   
    //     //         main.getLabelsArray()
    //     //         main.buildPageLabels()
    //     //     })        
    //     // },
    //     getLabel: label => {
    //         const translatedLabel = main.translationsArray[main.language, label]

    //         return translationObject.translation
    //     },
    //     buildPageLabels: () => {
    //         header.buildHeader(main.getLabel)
    //         aboutPage.buildAboutPage(main.getLabel)
    //     },
    //     start: async () => {
    //         await main.buildTranslationsArray('es-ES')
    //     }
    // }
    await translation.buildTranslationsArray()

    const buildSite = () => {
        header.buildHeader(translation.getLabel)
        curriculumPage.buildCurriculumPage(translation.getLabel)
        projectsPage.buildProjectsPage(translation.getLabel)
        aboutPage.buildAboutPage(translation.getLabel)
    }

    buildSite()
    navigation.loadNavigation()    

    // document.getElementById('language').addEventListener('change', async e => {
    //     translation.setLanguage(e.target.value)
    //     await translation.buildTranslationsArray()
    //     buildSite()
    // })
}

document.addEventListener('DomContentLoaded', init())



