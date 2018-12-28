//app.js
App({
  globalData: {
    userInfo: null,
    checkCourses: []
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          //后台接口地址
          url: "https://api.weixin.qq.com/sns/jscode2session",
          data: {
            'appid': 'wx6bbdc7ff170f0aaf',
            'secret': '3f3fbaab77df79e3d4c955d3b161483a',
            'js_code': res.code,
            'grant_type': 'authorization_code'
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            wx.setStorage({
              key: 'openId',
              data: res.data.openid,
            })
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }

        //获取位置信息
        if (res.authSetting['scope.userLocation']) {
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              wx.setStorage({
                key: 'longitude',
                data: res.longitude,
              })
              wx.setStorage({
                key: 'latitude',
                data: res.latitude,
              })
            }
          })
        }
      }
    })
  }
})