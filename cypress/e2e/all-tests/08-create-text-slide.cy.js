import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
import { textPage } from "../pages/text-slide";
import { trainingPage } from "../pages/training";

const login= new loginPage()
const course= new coursePage()
const training= new trainingPage()
const text= new textPage()


describe('Add text slide to the training', () => 
    {
        it('User Login', () =>
            {
                login.navigate();
                login.enterUserName();
                login.enterPassword();
                login.submit();

            }
        )

        it('Go to training',() =>
        {
                course.openNewlyCreatedCourse()      
                training.editPitch()
                      
        })

        it('Create a text slide', () => 
        {
                text.clickTextType()
                text.addContentValues()
                text.addAIFeedbackValues()
                text.saveSlide()

            }
        )

    }
)