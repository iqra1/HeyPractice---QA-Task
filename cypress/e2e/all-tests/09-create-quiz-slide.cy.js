import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
import { quizPage } from "../pages/quiz-slide";
import { trainingPage } from "../pages/training";

const login= new loginPage()
const course= new coursePage()
const training= new trainingPage()
const quiz= new quizPage()




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
                      
            }
        )

        it('Create a quiz slide', () => 
            {
                quiz.clickQuizType()
                quiz.addContentValues()
                quiz.addCorrectAnswer()
                quiz.saveSlide()

            }
        )
        it('Go back and publish course', () =>
            {
                //quiz.goBack()

            }
        )

    }
)