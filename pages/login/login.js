// pages/login/login.js
import { HTTP } from '../../utils/http.js';

let http = new HTTP;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let userId = wx.getStorageSync("userId") || '';
    console.log(userId)
    if (userId) {
      this.loadLogin()
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar({
      animation: true //是否需要过渡动画
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  loadLogin: function () {
    let _that = this
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          // 发起网络请求

          _that.data.code = res.code
          _that.login()
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // login().then(res => {
    //   let code = res.code;
    //   console.log(res)
    //   this.setData({
    //     code: code
    //   })
    // })

  },
  bindGetUserInfo: function (e) {
    let _that = this
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("未过期，并且在本生命周期一直有效")
        _that.loadLogin()
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.info("已经失效，需要重新执行登录流程")
        _that.loadLogin()
      }
    })
    wx.setStorageSync("userInfo", JSON.stringify(e.detail))
    this.login()

  },
  login: function () {
    let userInfo = wx.getStorageSync("userInfo") || '';
    let _that = this
    http.request({
      url: 'user/login',
      method: "post",
      data: {
        code: _that.data.code,
        userInfo: userInfo
      },
      success: (res) => {
        wx.setStorageSync("userId", res.data.userId)
        wx.setStorageSync("token", res.data.token)
        wx.switchTab({
          url: '/pages/index/index'
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  backgo: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})