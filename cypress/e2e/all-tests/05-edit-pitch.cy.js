import { coursePage } from "../pages/course"
import { loginPage } from "../pages/login"
import { trainingPage } from "../pages/training"
const course= new coursePage()
const login= new loginPage()
const training= new trainingPage()

describe('Edit pitch', () =>
{
    it('User Login', () =>
            {
                login.navigate();
                login.enterUserName();
                login.enterPassword();
                login.submit();

            }
        )

    it('Navigate to training and click on Edit',() =>
    {
                course.openNewlyCreatedCourse();
                training.editPitch();      
               
                  
    })
})