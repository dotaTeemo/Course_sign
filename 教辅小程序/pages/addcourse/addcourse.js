//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img_src: '../../lib/plus.jpg'
  },
  //事件处理函数
  formSubmit(e) {
    wx.redirectTo({
      url: '../teacher/teacher'
    })
  },
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
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  teacherAddCourse: function (e) {
    wx.request({
      url: "http://111.230.34.63:80/teacherAddCourse",
      data: {
        'teacherID': 123,
        'courseName': e.detail.value.courseName,
        'studentNumber': e.detail.value.studentNumber
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //添加课程成功，跳转至教师签到页面
        if (res.data == 'SUCCESS') {
          wx.redirectTo({
            url: '../teacher/teacher'
          })
        }
        //绑定失败，弹窗提醒
        else if (res.data == 'FAIL') {
          console.log(res.data)
        }
      }
    })
  }
})
