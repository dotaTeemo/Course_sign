import pymysql
import datetime,uuid
ip = "111.230.34.63"
user = "root"
pwd = "root"
db_name = "signin"
# 注册时绑定学生信息
def InsertIntoStudentInfo(student_id, student_name, openid):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    sql = """INSERT INTO student_info
             VALUES ('%s', '%s', '%s')""" % (student_id, student_name, openid)
    print(len(student_name))
    try:
        cursor.execute(sql)
        db_signin.commit()
        return 'SUCCESS'
    except:
        # 绑定失败
        db_signin.rollback()
        return 'FAIL'
    finally:
        db_signin.close()

# 通过openID查看学生信息
def SelectByOpenIDFromStudentInfo(openid):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    sql = """SELECT * FROM student_info WHERE openid='%s';""" % (openid)
    try:
        # 执行SQL语句
        cursor.execute(sql)
        # 获取所有记录列表
        result = cursor.fetchone()
        return {
            'student_id': result[0],
            'student_name': result[1],
            'openid': result[2]
        }
    except:
        return None
    finally:
        db_signin.close()

# 学生签到
def studentSignInCourse(student_info, now):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    sql = """SELECT * FROM class_sign WHERE end_date>'%s' and student_id='%s' and course_id='%s' and sign_number='%s';""" % (now, student_info['studentID'], student_info['courceID'], student_info['signNumber'])

    try:
        cursor.execute(sql)
        result = cursor.fetchone()
        if result:
            sql = """UPDATE class_sign SET issign=1 WHERE id='%s'""" % (result[0])
            print(sql)
            cursor.execute(sql)
            db_signin.commit()
            return result
    except:
        return None
    finally:
        db_signin.close()

#添加反馈
def addComment(student_id, course_id, content):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    now = datetime.datetime.now()
    time = now.strftime("%Y%m%d")
    id=uuid.uuid4()
    try:
        sql = """INSERT INTO comment(id, student_id,content,date, course_id)
             VALUES ('%s','%s', '%s', '%s', '%s')""" % (id,student_id,content,time,course_id)
        cursor.execute(sql)
        db_signin.commit()
        return 'SUCCESS'
    except:
        db_signin.rollback()
        return 'FAIL'
    finally:
        db_signin.close()

# 添加课程
def addCourse(student_id, course_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()

    id = uuid.uuid4()
    try:
        #满人不让选
        testSql1= """SELECT * FROM course where course_id= '%s'"""% (course_id)
        cursor.execute(testSql1)
        results = cursor.fetchall()
        for row in results:
            maxStudentNum = row[3]
        testSql2 = """SELECT count(*) FROM student_course where course_id= '%s'""" % (course_id)
        cursor.execute(testSql2)
        results = cursor.fetchall()
        for row in results:
            actualStudentNum = row[0]

        if(maxStudentNum==actualStudentNum):
            return 'FAIL'

        # 学生选过课就不让选，不懂前端是否需要
        testSql3 = """SELECT count(*) FROM student_course where course_id= '%s' and student_id='%s'""" % (course_id,student_id)
        cursor.execute(testSql3)
        results = cursor.fetchall()
        for row in results:
            isExisted = row[0]
        if(isExisted==1):
            return 'FAIL'

        sql = """INSERT INTO student_course(id, student_id, course_id)
                     VALUES ('%s','%s', '%s')""" % (id, student_id, course_id)
        cursor.execute(sql)
        db_signin.commit()
        return 'SUCCESS'
    except:
        db_signin.rollback()
        return 'FAIL'
    finally:
        db_signin.close()

# 查看课程
def selectCoursesByStudentID(student_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    courseIDArray = []
    courseArray = []
    id = 0
    sql1 = """SELECT * FROM course where course_id in (SELECT course_id FROM student_course where student_id= '%s')""" % (
        student_id)
    try:

        cursor.execute(sql1)
        results = cursor.fetchall()
        for row in results:
            courseArray.append({
                'id': row[0],
                'courseName': row[1],
                'teacherid': row[2],
                'studentNumber': row[3]
            })

        return courseArray
    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

# 学生查看所有老师的课程，但是排除自己已经选过的
def selectAllUnselectedCourses(student_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    courses = []
    sql = """SELECT * FROM course where course.course_id not in (SELECT course_id FROM student_course where student_id= '%s')""" % (
        student_id)
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        for row in results:
            courses.append({
                'id': row[0],
                'courseName': row[1],
                'teacherid': row[2],
                'studentNumber': row[3]
            })
        return courses
    except:
        db_signin.rollback()
        return None
    finally:
        db_signin.close()

#删除课程
def deleteCourse(student_id, course_id):
    db_signin = pymysql.connect(ip, user, pwd, db_name)
    cursor = db_signin.cursor()
    courseArray=[]
    id = 0
    try:
        # 是否已选这门课，事实上有了showCourse本身就从已选课中删除，这步可以不需要
        testSql = """SELECT count(*) FROM student_course where course_id= '%s' and student_id='%s'""" % (
        course_id, student_id)
        cursor.execute(testSql)
        results = cursor.fetchall()
        for row in results:
            isExisted = row[0]
        if not isExisted:
            return 'FAIL'

        # 开始删除
        sql = """DELETE FROM student_course
                             where course_id= '%s' and student_id='%s'""" % (course_id, student_id)

        cursor.execute(sql)
        db_signin.commit()
        #
        # # 主键重排
        # sql1 = """ALTER TABLE student_course DROP student_course_id"""
        # cursor.execute(sql1)
        # db_signin.commit()
        # print(1)
        #
        # sql2 = """ALTER TABLE student_course ADD student_course_id int NOT NULL FIRST"""
        # cursor.execute(sql2)
        # db_signin.commit()
        # print(2)
        #
        # sql3 = """ALTER TABLE student_course MODIFY COLUMN student_course_id int NOT NULL AUTO_INCREMENT,ADD PRIMARY KEY(student_course_id)"""
        # cursor.execute(sql3)
        # db_signin.commit()
        # print(3)
        # # 重排结束

        return 'SUCCESS'
    except:
        db_signin.rollback()
        return 'FAIL'
    finally:
        db_signin.close()
