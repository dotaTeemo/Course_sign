# coding=utf-8
from flask import Flask, request, render_template, make_response, jsonify
from service.StudentService import *
from service.TeacherService import *

app = Flask(__name__)

# 学生端

@app.route('/getStudentInfo', methods=['GET', 'POST'])
def getStudentInfo():
    openID = request.args['openID']

    return make_response(jsonify(response=getStudentInfoByOpenID(openID)))

@app.route('/bindStudentInfo', methods=['GET', 'POST'])
def bindStudentInfo():
    studentName = request.args['studentName']
    studentID = request.args['studentID']
    openID = request.args['openID']

    return make_response(bindStudentInfoWithOpenID(studentName, studentID, openID))

@app.route('/studentSign', methods=['GET', 'POST'])
def studentSign():
    student_info = {
        'signNumber': request.args['signNumber'],
        'studentName': request.args['studentName'],
        'studentID': request.args['studentID'],
        'courceID': request.args['courceID'],
        'longitude': request.args['longitude'],
        'latitude': request.args['latitude'],
        'openID': request.args['openID']
    }

    return make_response(jsonify(response=studentSignBySignNumber(student_info)))

@app.route('/studentAddCourse', methods=['GET', 'POST'])
def studentAddCourse():
    studentID = request.args['studentID']
    courseID = request.args['courseID']

    return make_response(addCourseByStudentID(studentID, courseID))

@app.route('/getStudentCourses', methods=['GET', 'POST'])
def getStudentCourses():
    studentID = request.args['studentID']

    return make_response(jsonify(response=getCoursesByStudentID(studentID)))

@app.route('/getStudentUnselectedCourses', methods=['GET', 'POST'])
def getStudentUnselectedCourses():
    studentID = request.args['studentID']

    return make_response(jsonify(response=getUnSelectedCoursesByStudentID(studentID)))

@app.route('/studentDeleteCourse', methods=['GET', 'POST'])
def studentDeleteCourse():
    studentID = request.args['studentID']
    courseID = request.args['courseID']

    return make_response(deleteCourseByStudentID(studentID, courseID))

@app.route('/studentAddComment', methods=['GET', 'POST'])
def studentAddComment():
    studentID = request.args['studentID']
    courseID = request.args['courseID']
    content = request.args['content']

    return make_response(addCommentByStudentID(studentID, courseID, content))

# 教师端

@app.route('/getTeacherCourses', methods=['GET', 'POST'])
def getTeacherCourses():
    teacherID = request.args['teacherID']

    return make_response(jsonify(response=getCoursesByTeacherID(teacherID)))

@app.route('/teacherAddCourse', methods=['GET', 'POST'])
def teacherAddCourse():
    teacherID = request.args['teacherID']
    courseName = request.args['courseName']
    studentNumber = request.args['studentNumber']

    return make_response(addCourseByTeacherID(teacherID, courseName, studentNumber))

@app.route('/teacherStartSign', methods=['GET', 'POST'])
def teacherStartSign():
    courseID = request.args['courseID']
    signNumber = request.args['signNumber']
    longitude = request.args['longitude']
    latitude = request.args['latitude']
    endDate = request.args['endDate']

    return make_response(jsonify(response=teacherAddOneSign(courseID, signNumber, longitude, latitude, endDate)))

@app.route('/teacherStopSign', methods=['GET', 'POST'])
def teacherStopSign():
    courseID = request.args['courseID']
    startDate = request.args['startDate']

    return make_response(jsonify(response=teacherStopOneSign(courseID, startDate)))

@app.route('/getSignInResult', methods=['GET', 'POST'])
def getSignInResult():
    courseID = request.args['courseID']

    return make_response(jsonify(response=getSignInResultByCourseID(courseID)))

@app.route('/getNowSignInResult', methods=['GET', 'POST'])
def getNowSignInResult():
    courseID = request.args['courseID']

    return make_response(jsonify(response=getNowSignInResultByCourseID(courseID)))

@app.route('/getCourseAllComments', methods=['GET', 'POST'])
def getCourseAllComments():
    courseID = request.args['courseID']

    return make_response(jsonify(response=getCourseAllCommentsByCourseID(courseID)))

if __name__ == '__main__':
    app.run()

