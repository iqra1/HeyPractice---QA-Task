import { audioPage } from "../pages/audio-slide";
import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
import { trainingPage } from "../pages/training";

const login = new loginPage()
const course = new coursePage()
const training = new trainingPage()
const audio = new audioPage()

describe('Add audio slide to the training', () => {
    it('User Login', () => {
        login.navigate();
        login.enterUserName();
        login.enterPassword();
        login.submit();

    })

    it('Go to training', () => {
        course.openNewlyCreatedCourse()
        training.editPitch()

    })

    it('Create an audio slide', () => {
        audio.clickAudioType()
        audio.addContentValues()
        audio.addDynamicContentValues()
        audio.addAIFeedbackValues()
        audio.saveSlide()

    })

})