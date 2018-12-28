//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    courseID: -1,
    courseName: '',
    allSignNumber: 0,
    noSignStudentIDs: [],
    startDate: 0,
    getNowSignTimer: null,
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
  switchChange: function (e) {
    this.setData({
      switchjudge:e.detail.value
    })
  },
  whonosign: function(e){
    wx.navigateTo({
      url: '../whonosign/whonosign?courseName=' + this.data.courseName + '&courseID=' + this.data.courseID + '&allSignNumber=' + this.data.allSignNumber
    })
  },
  stopsign: function(e){
    //结束轮询
    clearInterval(this.data.getNowSignTimer)
    wx.navigateTo({
      url: '../stopsign/stopsign?courseID=' + this.data.courseID + '&startDate=' + this.data.startDate
    })
  },
  onLoad: function (option) {
    var page = this
    this.setData({
      courseID: option.courseID,
      courseName: option.courseName,
      allSignNumber: option.allSignNumber,
      startDate: option.startDate,
      getNowSignTimer: setInterval(function () {
        wx.request({
          url: "http://111.230.34.63:80/getNowSignInResult",
          data: {
            'courseID': page.data.courseID
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            page.setData({
              noSignStudentIDs: res.data.response
            })
          }
        })
      }, 2000)
    })

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
