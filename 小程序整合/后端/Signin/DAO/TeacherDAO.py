import pymysql, datetime,uuid
ip = "localhost"
user = "root"
pwd = "123456"
db_name = "signin"

#添加课程
def AddCourseByTeacherID(teacherID, courseName,StudentNumber):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    print(teacherID, courseName,StudentNumber)
    id = uuid.uuid4()
    # sql1 = """SELECT count(*) FROM course"""
    try:
        # cursor.execute(sql1)
        # results = cursor.fetchall()
        # for row in results:
        #     id = row[0]+1

        sql = """INSERT INTO course
             VALUES ('%s','%s', '%s', '%s')""" % (id, courseName, teacherID, StudentNumber)
        cursor.execute(sql)
        db_signin.commit()
        return 'SUCCESS'
    except:
        db_signin.rollback()
        return 'FAIL'
    finally:
        db_signin.close()

#显示老师所教授的课程,应该是在老师最初进入的界面显示
def showCoursesByTeacherID(teacherID):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    courses=[]
    sql = """SELECT * FROM course where teacher_id='%s'""" % (teacherID)
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        for row in results:
            courses.append({
                'id': row[0],
                'courseName': row[1],
                'teacherid': teacherID,
                'studentNumber': row[3]
            })
        return courses
    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

#开放签到
def addAttend(course_id, sign_number, longitude, latitude, startDate, endDate):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    # 从前台获取
    studentList=[]

    id = uuid.uuid4()
    sql1 = """SELECT * FROM student_course where course_id= '%s'""" % (course_id)

    try:
        cursor.execute(sql1)
        results = cursor.fetchall()
        for row in results:
            studentList.append(row[1])
        for stuid in studentList:
            sql = """INSERT INTO class_sign
             VALUES ('%s','%s', '%s', '%s', '%s','%s','%s','%s','%s')""" % (id,stuid,course_id,0,startDate,endDate,sign_number,longitude,latitude)
            cursor.execute(sql)
            db_signin.commit()
            id = uuid.uuid4()
        return str(len(studentList))
    except:
        db_signin.rollback()
        return '0'
    finally:
        db_signin.close()

#查看总签到
def showAttend(course_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    studentList=[]

    id=0
    shouldAttendCount=0
    sql1 = """SELECT student_course.student_id, student_info.student_name FROM student_course,student_info where course_id= %s and student_course.student_id=student_info.student_id""" % (course_id)

    attendarr=[]
    try:
        cursor.execute(sql1)
        results = cursor.fetchall()
        for row in results:
            studentList.append({'student_id': row[0], 'student_name': row[1]})
        sql = """SELECT count(*) FROM class_sign where course_id= '%s' and student_id='%s'""" % (
        course_id, studentList[0].get('student_id'))
        cursor.execute(sql)
        results = cursor.fetchall()
        for row in results:
            shouldAttendCount=row[0]
        for i in range(0, len(studentList)):
            sql = """SELECT count(*) FROM class_sign where course_id= '%s' and student_id='%s' and issign=1""" % (
            course_id, studentList[i].get('student_id'))
            cursor.execute(sql)
            results = cursor.fetchall()
            for row in results:
                attendarr.append({
                    'student_name': studentList[i].get('student_name'),
                    'student_id': studentList[i].get('student_id'),
                    'shouldAttend': shouldAttendCount,
                    'actualAttend': row[0]
                })

        return attendarr
    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

#查看实时签到,只能查看缺课学生学号
def showNowAttend(course_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    studentList=[]

    id=0
    shouldAttendCount=0
    attendcount=0
    sql1 = """SELECT student_course.student_id, student_info.student_name FROM student_course,student_info where course_id= '%s' and student_course.student_id=student_info.student_id""" % (course_id)
    studentNoSignList=[]
    try:
        cursor.execute(sql1)
        results = cursor.fetchall()
        for row in results:
            studentList.append({'student_id': row[0], 'student_name': row[1]})
        shouldAttendCount=len(studentList)
        now = datetime.datetime.now()
        otherStyleTime = now.strftime("%Y%m%d")
        min = otherStyleTime + '0000'
        max = otherStyleTime + '2400'
        for i in range(0, len(studentList)):
            sql = """SELECT * FROM class_sign where course_id= '%s' and student_id='%s' and issign=1 and start_date>'%s' and end_date<'%s'""" % (course_id,studentList[i].get('student_id'),max,min)
            cursor.execute(sql)
            results = cursor.fetchall()
            for row in results:
                attendcount+=1
                studentList.remove(studentList[i])
        for i in range(0, len(studentList)):
            studentNoSignList.append({'student_id':studentList[i].get('student_id'),'student_name':studentList[i].get('student_name')})

        return studentNoSignList
    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

#显示课程反馈，从前台获取课程id,按日期降序显示
def showComment(course_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    commentarr=[]
    id=0
    sql1 = """SELECT * FROM comment where course_id= '%s' order by date desc """ % (course_id)
    self=''
    try:
        cursor.execute(sql1)
        results = cursor.fetchall()
        for row in results:
            commentarr.append({
                'studentID': row[1],
                'content': row[2],
                'date': row[3]
            })

        return commentarr

    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

if __name__ == '__main__':
    print(showAttend())