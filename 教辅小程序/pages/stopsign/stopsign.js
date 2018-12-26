//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    courseID: 0,
    allSignNumber: 0,
    signNumber: 0,
    startDate: '',
    endDate: '',
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
      startDate: option.startDate,
      // startDate: option.startDate.substring(0, 4) + "年" + option.startDate.substring(4, 6) + "月" + option.startDate.substring(6, 8) + "日  " + option.startDate.substring(8, 10) + ":" + option.startDate.substring(10, 12),
      // endDate: option.endDate.substring(0, 4) + "年" + option.endDate.substring(4, 6) + "月" + option.endDate.substring(6, 8) + "日  " + option.endDate.substring(8, 10) + ":" + option.endDate.substring(10, 12)
    })

    var page = this
    wx.request({
      url: "http://localhost:5000/teacherStopSign",
      data: {
        'courseID': this.data.courseID,
        'startDate': this.data.startDate
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var info = res.data.response.info
        page.setData({
          allSignNumber: info.shouldAttendCount,
          signNumber: info.attendcount,
          startDate: info.start_date.substring(0, 4) + "年" + info.start_date.substring(4, 6) + "月" + info.start_date.substring(6, 8) + "日  " + info.start_date.substring(8, 10) + ":" + info.start_date.substring(10, 12),
          endDate: info.end_date.substring(0, 4) + "年" + info.end_date.substring(4, 6) + "月" + info.end_date.substring(6, 8) + "日  " + info.end_date.substring(8, 10) + ":" + info.end_date.substring(10, 12),
          noSignStudents: res.data.response.noSignStudents
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
