import { coursePage } from "../pages/course"
import { loginPage } from "../pages/login"
import { trainingPage } from "../pages/training"

const login = new loginPage()
const course = new coursePage()
const training = new trainingPage()

describe('Add new training within that course', () => {
    it('User Login', () => {
        login.navigate()
        login.enterUserName()
        login.enterPassword()
        login.submit()

    })

    it('Add new training', () => {
        course.openNewlyCreatedCourse()
        training.navigateToAddNewTraining()
        training.addCoverPhoto()
        training.enterTrainingName()
        training.enterTrainingDescription()
        training.chooseTag()
        training.createTrainingAndValidate()

    })

})