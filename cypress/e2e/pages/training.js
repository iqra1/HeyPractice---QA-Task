export class trainingPage {

        navigateToAddNewTraining() {

                cy
                        .wait(2000)
                cy
                        .contains('button', 'Add new training')
                        .parent()
                        .find('button')
                        .scrollIntoView()
                        .should('be.visible')
                        .click()
        }

        addCoverPhoto() {

                const filepath = 'Images/Agile Principles.png'
                cy
                        .contains('label', 'Upload')
                        .click()
                cy
                        .get('input[type="file"]')
                        .attachFile(filepath)

        }

        enterTrainingName() {

                cy
                        .contains('span', 'Training name')
                        .next()
                        .find('input')
                        .type('Agile Principles')

        }

        enterTrainingDescription() {

                cy
                        .contains('span', 'Description')
                        .next()
                        .find('[placeholder="Enter"]')
                        .type('we will discuss each of the 12 principles and what they mean in the real world.')

        }

        chooseTag() {

                cy
                        .contains('span', 'Tags')
                        .next()
                        .find('input')
                        .click()
                        .xpath('//li[.="tech"]')
                        .click()
        }

        createTrainingAndValidate() {

                cy
                        .contains('button', 'Add training')
                        .click()
                cy
                        .contains('span', 'Agile Principles')
                        .should('have.text', 'Agile Principles')

        }

        editPitch() {

                cy
                        .wait(2000)
                cy
                        .contains('a', 'Edit')
                        .scrollIntoView()
                        .click()
        }
}