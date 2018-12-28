//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    courseID: -1,
    courseName: '',
    allSignNumber: 0,
    noSignStudents: [],
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_src: '../../lib/course.jpg',
    img_time: '../../lib/time.jpg',
    switchjudge: true
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
  onLoad: function (option) {
    this.setData({
      courseID: option.courseID,
      courseName: option.courseName,
      allSignNumber: option.allSignNumber
    })

    var page = this
    //定时刷新签到信息
    setInterval(function () {
      wx.request({
        url: "http://localhost:5000/getNowSignInResult",
        data: {
          'courseID': page.data.courseID
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          page.setData({
            noSignStudents: res.data.response
          })
          console.log(page.data)
        }
      })
    }, 2000)

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


  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
