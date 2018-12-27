// pages/studentsign/studentsign.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentName: '',
    studentID: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  sign: function () {
    wx.redirectTo({
      url: '../studentinputsign/studentinputsign'
    })
  },
  course:function(){
    wx.redirectTo({
      url: '../studentcourse/studentcourse',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

    var page = this

    wx.getStorage({
      key: 'studentName',
      success: function(res) {
        page.setData({
          studentName: res.data
        })
      },
    })
    wx.getStorage({
      key: 'studentID',
      success: function (res) {
        page.setData({
          studentID: res.data
        })
      },
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})