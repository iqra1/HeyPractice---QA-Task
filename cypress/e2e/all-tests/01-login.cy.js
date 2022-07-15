import { loginPage } from "../pages/login"
const login = new loginPage()

describe('Login to HeyPractice', () => {
    it('User Login', () => {
        login.navigate()
        login.enterUserName()
        login.enterPassword()
        login.submit()

    })
})