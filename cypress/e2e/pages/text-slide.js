export class textPage {

        clickTextType() {

                cy
                        .wait(2000)
                cy
                        .contains('h5', 'Text')
                        .parent('div')
                        .click()

        }

        addContentValues() {

                cy
                        .contains('button', 'Content')
                        .scrollIntoView()
                        .should('be.visible')
                        .click()
                cy.
                        contains('span', 'Headline')
                        .next()
                        .find('input')
                        .clear()
                        .type('Agile training text')
                cy
                        .contains('span', 'Description')
                        .next()
                        .find('[placeholder="Enter description"]')
                        .clear()
                        .type('Agile training text content')
                cy
                        .get('[name="minute"]')
                        .type('5')
                cy
                        .contains('span', 'Evaluation criterias')
                        .next()
                        .find('input')
                        .check()
                        .should('be.checked')
                cy
                        .get('[placeholder="Add criteria"]')
                        .type('agile basic knowledge')
                        .type('{Enter}')
                cy
                        .contains('h6', 'Add new evaluation criteria')
                        .parents('div')
                        .next()
                        .find('[placeholder="Enter description"]')
                        .type('Agile basics')
                cy
                        .contains('span', 'Select emoji')
                        .next()
                        .find('input')
                        .click()
                cy
                        .get('[aria-label="👍, +1, thumbsup"]')
                        .click({ force: true })
                cy
                        .contains('button', 'Save criteria')
                        .click()

        }

        addAIFeedbackValues() {

                cy
                        .contains('button', 'AI-Feedback')
                        .scrollIntoView()
                        .should('be.visible')
                        .click()
                cy      
                        .contains('span', 'Do-words')
                        .parents('span')
                        .siblings('span')
                        .find('input')
                        .check()
                        .should('be.checked')
                cy
                        .contains('button', 'Add new word')
                        .click()
                cy
                        .contains('h6', 'Add word')
                        .next()
                        .find('input')
                        .type('Agile')
                        .type('{Enter}')
                cy
                        .contains('span', 'Dont-words')
                        .parents('span')
                        .siblings('span')
                        .find('input')
                        .check()
                        .should('be.checked')
                cy
                        .contains('span', 'Dont-words')
                        .parent() //goes to div.jss680
                        .parent() //goes to span.jss687
                        .parent() //goes to div.jss686
                        .parent() //goes to fieldset
                        .parent() //goes to div.Mui-expanded
                        .parent() //goes to MuiAccordionSummary
                        .next('div') //goes to div.MuiCollapse-root
                        .within(() => {
                                cy.get('li').eq(1).find('button').should('be.visible').click()
                        })
                cy
                        .contains('h6', 'Add word')
                        .next()
                        .find('input')
                        .type('bad training')
                        .type('{Enter}')
        }

        saveSlide() {

                cy
                        .contains('button', 'Save')
                        .scrollIntoView()
                        .should('be.visible')
                        .click()
                cy
                        .wait(2000)

        }

}