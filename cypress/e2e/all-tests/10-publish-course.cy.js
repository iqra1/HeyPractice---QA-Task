import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
const login = new loginPage()
const course = new coursePage()

describe('Publish course', () => {
    it('User Login', () => {
        login.navigate()
        login.enterUserName()
        login.enterPassword()
        login.submit()
    })

    it('Go to course & publish it', () => {
        course.openNewlyCreatedCourse()
        course.publishCourse()
    })

})