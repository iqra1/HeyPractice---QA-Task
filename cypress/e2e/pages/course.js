export class coursePage {

        navigateToCourses() {

                cy
                        .xpath('//a[contains(.,"Courses")]')
                        .click()

        }

        createNewCourse() {

                cy
                        .contains('button', 'Add new course')
                        .scrollIntoView()
                        .should('be.visible')
                        .click()
        }

        uploadCoverPhoto() {

                const filepath = 'Images/Agile Model.jpeg'
                cy
                        .contains('label', 'Upload')
                        .click()

                cy
                        .get('input[type="file"]')
                        .attachFile(filepath)
        }

        enterCourseName() {

                cy
                        .contains('span', 'Course name')
                        .next()
                        .find('input')
                        .type('Agile Fundamentals')
        }

        enterCourseDescription() {

                cy
                        .contains('span', 'Description')
                        .next()
                        .find('[placeholder="Enter"]')
                        .type('Agile principles, core values, manifesto details')

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

        chooseTeam() {

                cy
                        .contains('span', 'Teams')
                        .next()
                        .find('input')
                        .click()
                        .xpath('//li[.="Developers"]')
                        .click()
        }

        createAndValidateCourse() {

                cy
                        .contains('button', 'Create new course')
                        .click({ force: true })    
                cy
                        .contains('span', 'Agile Fundamentals')
                        .should('have.text', 'Agile Fundamentals')
        }

        openNewlyCreatedCourse() {

                cy
                        .contains('span', 'Agile Fundamentals')
                        .parent()
                        .siblings('div')
                        .find('button')
                        .click()
                        .xpath("//li[.='Details']")
                        .click({ force: true })
        }

        publishCourse() {

                cy
                        .wait(2000)
                cy
                        .contains('button', 'Publish')
                        .click()
                cy
                        .contains('button', 'Yes, Publish')
                        .click()
        }

        archiveCourse() {

                cy
                        .contains('span', 'Agile Fundamentals')
                        .parent()
                        .siblings('div')
                        .find('button')
                        .click()
                        .xpath("//li[.='Archive']")
                        .click({ force: true })
                cy
                        .contains('button', 'Yes, archive')
                        .click()
                cy
                        .contains('span', 'Agile Fundamentals')
                        .should('not.exist')
        }
}
