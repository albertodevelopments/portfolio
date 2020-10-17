/*-------------------------------------------------------------*/
/*------------------------ TRADUCCIONES -----------------------*/
/*-------------------------------------------------------------*/
'use strict'

const translation = {
    translationsFile: '../data/translations.json',
    translationsArray: [],
    language: 'es-ES',

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

