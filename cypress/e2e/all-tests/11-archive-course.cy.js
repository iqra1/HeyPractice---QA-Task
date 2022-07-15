import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
const login = new loginPage()
const course = new coursePage()

describe('Archive course', () => {
    it('User Login', () => {
        login.navigate();
        login.enterUserName();
        login.enterPassword();
        login.submit();
    })

    it('Go to course & archive it', () => {
        course.navigateToCourses()
        course.archiveCourse()
    })

})