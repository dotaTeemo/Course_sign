// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_src: '../../lib/plus.jpg',
    checkCourses: [],
    hiddenmodalput: true,
    title: '反馈',
    texta: '请输入内容...',
    courseID: 0
  },
  onShow: function () {
    //获得所有课程信息
    var page = this
    wx.getStorage({
      key: 'studentID',
      success: function(res) {
        wx.request({
          url: "http://111.230.34.63:80/getStudentCourses",
          data: {
            'studentID': res.data
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            page.setData({
              checkCourses: res.data.response
            }),
              getApp().globalData.checkCourses = res.data.response
          }
        })
      },
    })
  },
  toCourse: function (event) {
    var course = event.currentTarget.dataset.course;
    this.setData({
      title: course.courseName + "反馈",
      hiddenmodalput: false,
      courseID: course.id
    });
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    var page = this
    wx.getStorage({
      key: 'studentID',
      success: function (res) {
        wx.request({
          url: "http://111.230.34.63:80/studentAddComment",
          data: {
            'studentID': res.data,
            'courseID': page.data.courseID,
            'content': page.data.texta
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      },
    })
  },
  deleteCourse: function (event) {
    var course = event.currentTarget.dataset.course;
    wx.showModal({
      title: '提示',
      content: "是要删除" + course.courseName + "吗？",
      success: function (res) {
        if (res.confirm) {
          wx.getStorage({
            key: 'studentID',
            success: function (res) {
              wx.request({
                url: "http://111.230.34.63:80/studentDeleteCourse",
                data: {
                  'studentID': res.data,
                  'courseID': course.id
                },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  wx.navigateTo({
                    url: '../studentcourse/studentcourse'
                  })
                }
              })
            },
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  sbindAddCourseTap: function () {
    wx.navigateTo({
      url: '../studentaddcourse/studentaddcourse'
    })
  },
  sign: function () {
    wx.redirectTo({
      url: '../studentinputsign/studentinputsign',
    })
  },
  my: function () {
    wx.redirectTo({
      url: '../studentinfo/studentinfo',
    })
  },
  inputToTextarea: function(e) {
    this.setData({
      texta: e.detail.value
    })
  }
})
