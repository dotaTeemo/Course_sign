// pages/inputsign/inputsign.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_array: [],
    hx_index: 0,
    focus: false,
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
    studentName: '',
    studentID: '',
    courceID: '',
    openID: ''
  },
  my: function () {
    wx.redirectTo({
      url: '../studentinfo/studentinfo'
    })
  },
  course:function(){
    wx.redirectTo({
      url: '../studentcourse/studentcourse',
    })
  },
  onMyEvent1: function (e) {
    this.setData({
      i2_focus : true,
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
  studentSign: function () {
    wx.request({
      url: "http://localhost:5000/studentSign",
      data: {
        'signNumber': this.data.num1 + this.data.num2 + this.data.num3 + this.data.num4,
        'studentName': this.data.studentName,
        'studentID': this.data.studentID,
        'courceID': this.data.courceID,
        'longitude': this.data.longitude,
        'latitude': this.data.latitude,
        'openID': this.data.openID
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '../studentsignreturn/studentsignreturn?returnstate=' + res.data.response.returnstate + '&returnmsg=' + res.data.response.returnmsg
        })
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this
    wx.getStorage({
      key: 'longitude',
      success: function (res) {
        page.setData({
          longitude: res.data,
          pic_array: app.globalData.checkCourses,
          courceID: app.globalData.checkCourses[0].id
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
    wx.getStorage({
      key: 'studentName',
      success: function (res) {
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
    wx.getStorage({
      key: 'openID',
      success: function (res) {
        page.setData({
          openID: res.data
        })
      },
    })
  },
  bindPickerChange_hx: function (e) {
    this.setData({
      courceID: e.target.dataset.selectid,
      hx_index: e.detail.value,
    })
  }
})