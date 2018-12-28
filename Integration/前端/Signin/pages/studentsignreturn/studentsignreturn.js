// pages/signed/signed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    returnstate : false,
    returnmsg : ''
  },
  studentsign: function () {
    wx.redirectTo({
      url: '../studentsign/studentsign'
    })
  },
  onLoad: function (options) {
    this.setData({
      returnstate: options.returnstate == 'true',
      returnmsg: options.returnmsg
    })
  }
})