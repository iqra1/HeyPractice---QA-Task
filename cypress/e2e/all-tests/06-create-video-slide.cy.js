import { coursePage } from "../pages/course";
import { loginPage } from "../pages/login"
import { trainingPage } from "../pages/training";
import { videoPage } from "../pages/video-slide";
const login = new loginPage()
const course = new coursePage()
const video = new videoPage()
const training = new trainingPage()

describe('Add video slide to the training', () => {
    it('User Login', () => {
        login.navigate()
        login.enterUserName()
        login.enterPassword()
        login.submit()

    })

    it('Go to training', () => {
        course.openNewlyCreatedCourse()
        training.editPitch()

    })

    it('Create a video slide', () => {
        video.clickVideoType()
        video.addContentValues()
        video.addDynamicContentValues()
        video.addAIFeedbackValues()
        video.saveSlide()

    })

})