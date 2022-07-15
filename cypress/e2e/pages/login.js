export class loginPage {

        navigate() {

                cy
                        .visit('/');
                cy
                        .title()
                        .should('eq', 'HeyPractice')

        }

        enterUserName() {

                cy
                        .get('[placeholder="name@mail.com"]')
                        .type('qa-8@demo.com')

        }

        enterPassword() {

                cy
                        .get('[placeholder="Enter password"]')
                        .type('HeyPractice2022')

        }

        submit() {

                cy
                        .get('.MuiButton-root').click()

        }

}