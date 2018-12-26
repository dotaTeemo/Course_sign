import datetime
from DAO.TeacherDAO import *

def getCoursesByTeacherID(teacherID):
    return showCoursesByTeacherID(teacherID)

def addCourseByTeacherID(teacherID, courseName, studentNumber):
    return AddCourseByTeacherID(teacherID, courseName, studentNumber)

def getSignInResultByCourseID(courseID):
    return showAttend(courseID)

def getNowSignInResultByCourseID(courseID):
    return showNowAttend(courseID)

def getCourseAllCommentsByCourseID(courseID):
    return showComment(courseID)

def teacherAddOneSign(courseID, signNumber, longitude, latitude, endDate):
    startDate = datetime.datetime.now().strftime("%Y%m%d%H%M")
    return addAttend(courseID, signNumber, longitude, latitude, startDate, endDate)

if __name__ == '__main__':
    print(getCoursesByTeacherID('123'))