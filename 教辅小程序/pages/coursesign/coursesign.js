//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    courseID: -1,
    courseName: '',
    studentNumber: 0,
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_src: '../../lib/course.jpg',
    switchjudge: true,
    i1_focus: true,
    i2_focus: false,
    i3_focus: false,
    i4_focus: false,
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    longitude: 0,
    latitude: 0,
  },
  onMyEvent1: function (e) {
    this.setData({
      i2_focus: true,
      i1_focus: false,
      num1: e.detail.value
    })
  },
  onMyEvent2: function (e) {
    this.setData({
      i3_focus: true,
      i2_focus: false,
      num2: e.detail.value
    })
  },
  onMyEvent3: function (e) {
    this.setData({
      i4_focus: true,
      i3_focus: false,
      num3: e.detail.value
    })
  },
  onMyEvent4: function (e) {
    this.setData({
      num4: e.detail.value
    })
  },
  switchChange: function (e) {
    this.setData({
      switchjudge:e.detail.value
    })
    console.log(this.data.switchjudge)
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
  startsign: function(e){
    var page = this
    wx.request({
      url: "http://111.230.34.63:80/teacherStartSign",
      data: {
        'courseID': this.data.courseID,
        'signNumber': this.data.num1 + this.data.num2 + this.data.num3 + this.data.num4,
        'longitude': this.data.longitude,
        'latitude': this.data.latitude,
        'endDate': '201912310000'
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data != '0') {
          wx.navigateTo({
            url: '../startsign/startsign?courseName=' + page.data.courseName + '&courseID=' + page.data.courseID + '&allSignNumber=' + res.data.response.allSignNumber + '&startDate=' + res.data.response.startDate
          })
        }else{
          console.log(res.data)
        }
      }
    })
  },
  onLoad: function (option) {
    this.setData({
      courseID: option.courseID,
      courseName: option.courseName,
      studentNumber: option.studentNumber
    })

    var page = this
    wx.getStorage({
      key: 'longitude',
      success: function (res) {
        page.setData({
          longitude: res.data
        })
      }
    })
    wx.getStorage({
      key: 'latitude',
      success: function (res) {
        page.setData({
          latitude: res.data
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
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
