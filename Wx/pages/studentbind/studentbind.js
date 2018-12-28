// pages/studentbind/studentbind.js
const app = getApp();
var returnmsg='';

Page({
  /** 
   * 页面的初始数据
   */
  data: {
    motto: '',
    studentName: '',
    studentID: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }, 
  modalcnt: function () {
    returnmsg='';
    wx.showModal({
      title: '提示',
      content: returnmsg,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  } ,
  // 将微信号的openID与学生的姓名、学号绑定
  bindStudentInfo: function (e) {
    wx.getStorage({
      key: 'openId',
      success: function (res) {
        var openId = res.data
        wx.request({
          url: "http://localhost:5000/bindStudentInfo",
          data: {
            'studentName': e.detail.value.studentName,
            'studentID': e.detail.value.studentID,
            'openID': openId
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            //绑定成功，跳转至学生主页
            if (res.data == 'SUCCESS'){
              wx.setStorage({
                key: 'studentName',
                data: e.detail.value.studentName,
              })
              wx.setStorage({
                key: 'studentID',
                data: e.detail.value.studentID,
              })
              wx.redirectTo({
                url: '../studentcourse/studentcourse'
              })
            }
            //绑定失败，弹窗提醒
            else if (res.data == 'FAIL'){
              this.modalcnt()
            }
          }
        })
      },
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

    //获取该微信号绑定信息，如果已绑定则直接进入
    wx.getStorage({
      key: 'openId',
      success: function (res) {
        var openId = res.data
        wx.request({
          url: "http://localhost:5000/getStudentInfo",
          data: {
            'openID': openId
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            //已绑定
            if (res.data.response != null){
              wx.setStorage({
                key: 'studentName',
                data: res.data.response.student_name,
              })
              wx.setStorage({
                key: 'studentID',
                data: res.data.response.student_id,
              })
              wx.redirectTo({
                url: '../studentcourse/studentcourse'
              })  
            }
          }
        })
      },
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})