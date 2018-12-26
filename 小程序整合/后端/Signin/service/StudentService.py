from DAO.StudentDAO import *
from util.GPS import *
import datetime

def bindStudentInfoWithOpenID(studentName, studentID, openID):
    return InsertIntoStudentInfo(studentID.upper(), studentName, openID)

def getStudentInfoByOpenID(openID):
    return SelectByOpenIDFromStudentInfo(openID)

def studentSignBySignNumber(student_info):
    now = datetime.datetime.now().strftime("%Y%m%d%H%M")
    result = studentSignInCourse(student_info, now)

    if result:
        teacher_longitude = result[7]
        teacher_latitude = result[8]
        distance = getDistance(teacher_latitude, teacher_longitude, student_info['latitude'], student_info['longitude'])
        if distance <= 0.2:
            return {
                'returnstate': True,
                'returnmsg': '签到成功'

            }
        else:
            return {
                'returnstate': False,
                'returnmsg': '您不在签到范围内'

            }
    else:
        return {
                'returnstate': False,
                'returnmsg': '签到失败'

            }

def addCourseByStudentID(studentID, courseID):
    return addCourse(studentID, courseID)

def getCoursesByStudentID(studentID):
    return selectCoursesByStudentID(studentID)

def getUnSelectedCoursesByStudentID(studentID):
    return selectAllUnselectedCourses(studentID)

def deleteCourseByStudentID(studentID, courseID):
    return deleteCourse(studentID, courseID)

def addCommentByStudentID(studentID, courseID, content):
    return addComment(studentID, courseID, content)

if __name__ == '__main__':
    print(getUnSelectedCoursesByStudentID('MF1832123'))