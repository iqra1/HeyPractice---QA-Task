import { coursePage } from "../pages/course"
import { loginPage } from "../pages/login"
const course= new coursePage()
const login= new loginPage()

describe('Open the created course', () => 
    {
        it('User Login', () =>
            {
                login.navigate()
                login.enterUserName()
                login.enterPassword()
                login.submit()

            }
        )
        
        it('Open course', () =>
            {
               course.openNewlyCreatedCourse()
            }
        )

    }
)