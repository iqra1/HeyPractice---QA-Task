export class quizPage{

        clickQuizType(){
                
                        cy.wait(2000)
                        cy.contains('h5', 'Quiz').parent('div').click()
                

        }

        addContentValues(){
        
                        cy.contains('button', 'Content').scrollIntoView().should('be.visible').click()
                        cy.contains('span', 'Headline').next().find('input').clear().type('Agile training Quiz')
                        cy.contains('span', 'Description').next().find('[placeholder="Enter description"]').clear().type('Agile training Quiz')
                        cy.get('[name="minute"]').type('2')
                
                
        }
        
        addCorrectAnswer()
        {
                        cy.wait(2000) 
                        cy.contains('button','Correct answers').scrollIntoView().should('be.visible').click()
                        cy.xpath('//div[.="a"]').click()
                        
                

        }
    
        saveSlide(){
            
                        cy.wait(2000)
                        cy.contains('button', 'Save').scrollIntoView().should('be.visible').click()

        }

        goBack(){

                        cy.contains('h2', 'Agile Principles-words')
                        .parents('a')
                        .find('button')

        }

}