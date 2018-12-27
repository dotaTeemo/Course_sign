// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_src: '../../lib/add.jpg',
    canCheckCourses: [],
    hiddenmodalput: true,
    texta: '',
  },
  onLoad: function () {
    //获得所有课程信息
    var page = this
    wx.getStorage({
      key: 'studentID',
      success: function (res) {
        wx.request({
          url: "http://localhost:5000/getStudentUnselectedCourses",
          data: {
            'studentID': res.data
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            page.setData({
              canCheckCourses: res.data.response
            })
          }
        })
      },
    })
  },
  toSign: function () {
    wx.redirectTo({
      url: '../teacher/teacher',
    })
  },
  toCourse: function (event) {
    var course = event.currentTarget.dataset.course;
    this.setData({
      hiddenmodalput: false
    });
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      texta: ''
    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true,
      texta: ''
    })
  },
  addCourse: function (event) {
    var course = event.currentTarget.dataset.course;
    wx.showModal({
      title: '提示',
      content: '确认添加' + course.courseName + '课程?',
      success: function (res) {
        if (res.confirm) {
          wx.getStorage({
            key: 'studentID',
            success: function(res) {
              wx.request({
                url: "http://localhost:5000/studentAddCourse",
                data: {
                  'studentID': res.data,
                  'courseID': course.id
                },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  wx.redirectTo({
                    url: '../studentaddcourse/studentaddcourse'
                  })
                }
              })
            },
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  sbindAddCourseTap: function () {
    wx.navigateTo({
      url: '../studentaddcourse/studentaddcourse'
    })
  }
})
