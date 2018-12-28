//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    comments: [],
    courseID: 0,
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_src: '../../lib/plus.jpg',
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
      courseID: option.courseID
    })
    
    //获得该课程的所有反馈信息
    var page = this
    wx.request({
      url: "http://localhost:5000/getCourseAllComments",
      data: {
        'courseID': this.data.courseID
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        page.setData({
          comments: res.data.response
        })
      }
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
