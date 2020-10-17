/*-------------------------------------------------------------*/
/*------------------------ TRADUCCIONES -----------------------*/
/*-------------------------------------------------------------*/
'use strict'

const translation = {
    translationsFile: '../data/translations.json',
    translationsArray: [],
    language: 'es-ES',
    
    // Construimos el array con todas las traducciones
    // buildTranslationsArray: language => {
    //     fetch(translation.translationsFile)
    //         .then(result => result.json())
    //         .then(response => {
    //             translation.translationsArray = response.labels.map(label => {
    //                 const obj = {}
    //                 obj.label = label.label
    //                 obj.translation = label[language]
    //                 return obj
    //             })   
    //         translation.buildPageLabels()                        
    //     })        
    // },
    // getLabel: label => {
    //     const translationObject = translation.translationsArray.find(
    //         labelObject => labelObject.label === label        
    //     )
    //     return translationObject.translation
    // },
    // buildPageLabels: () => {
    //     header.buildHeader(translation.getLabel)
    //     aboutPage.buildAboutPage(translation.getLabel)
    // }
    buildTranslationsArray: () => {
        translation.translationsArray['es-ES'] = new Array()
        translation.translationsArray['en-US'] = new Array()
        return fetch(translation.translationsFile)
            .then(result => result.json())
            .then(response => {
                response.labels.forEach(labelObject => {
                    const label = labelObject.label

                    Object.keys(labelObject).forEach(key => {
                        if(key !== 'label') {
                            translation.translationsArray[key][label] = labelObject[key]
                            translation.translationsArray[key][label] = labelObject[key]
                        }
                    })
                })   
        })        
    },
    getLabel: label => {
        const languageObject = translation.translationsArray[translation.language]
        let value = null

        Object.keys(languageObject).forEach(key => {
            if(key === label) {
                value = languageObject[key]
            }
        })
        return value
    },
    setLanguage: language => {
        translation.language = language
    }
}

