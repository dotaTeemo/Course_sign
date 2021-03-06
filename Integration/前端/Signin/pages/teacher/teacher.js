//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    courses: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_src: '../../lib/plus.jpg'
  },
  toCourse: function(event){
    var course = event.currentTarget.dataset.course;
    wx.navigateTo({
      url: '../coursesign/coursesign?courseName=' + course.courseName + '&courseID=' + course.id + '&studentNumber=' + course.studentNumber
    })
  },
  toCheckCourse: function () {
    wx.redirectTo({
      url: '../checkcourse/checkcourse'
    })
  },
  toSign: function () {
    wx.redirectTo({
      url: '../teacher/teacher',
    })
  },
  bindAddCourseTap: function() {
    wx.navigateTo({
      url: '../addcourse/addcourse'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //获得该老师所有课程信息
    var page = this
    wx.request({
      url: "http://localhost:5000/getTeacherCourses",
      data: {
        'teacherID': 123
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        page.setData({
          courses: res.data.response
        })
      }
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
