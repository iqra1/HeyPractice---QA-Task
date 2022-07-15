import { loginPage } from "../pages/login"
import { coursePage } from "../pages/course"

const login=new loginPage()
const course=new coursePage()

describe('Create a course', () =>
    {

        it('User Login', () =>
            {
                    login.navigate()
                    login.enterUserName()
                    login.enterPassword()
                    login.submit()

            }
        )

        it('Navigate to courses in menu and create new course', () =>
            {
                   course.navigateToCourses()
                   course.createNewCourse()
                   course.uploadCoverPhoto()
                   course.enterCourseName()
                   course.enterCourseDescription()
                   course.chooseTag()
                   course.chooseTeam()
                   course.createAndValidateCourse()


            }
        )
        
    }
)