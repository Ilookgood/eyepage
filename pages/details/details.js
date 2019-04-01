// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   figbesp:false,
    noicon:'../../img/details_x_icon.png',
    appId:"wxf06eee0ac71fea24",
    upload:"小程序",
    path:"/pages/index/index" 
    // okicon: '../../img/details_xok_icon.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  navgatorFn:function(){
    wx.navigateBackMiniProgram({
      appId:'wxf06eee0ac71fea24',
      path:'/pages/index/index',
      envVersion:'develop',
      success(res){
          console.log(res)
      }
    })
  },
  app(e){
    console.log(e)
  },
  pdd(e){console.log(e)},

  

 
  /**{
   * }
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  tobespokebox: function (){
    this.setData({
      figbesp: true,
      noicon:"../../img/details_xok_icon.png"
    })
  },
  del:function(){
    this.setData({
      figbesp: false
    })
  },
  towebview:function(){
    wx.navigateTo({
      url: '../webview/webview'
    })
    this.setData({
      figbesp: false
    })
  },
  toshareimg:function(){
    wx.navigateTo({
      url: '../shareimg/shareimg'
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
    return {
      title: "快来看",
      imageUrl: '../../image/fx_indeximg.png',//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
      path: '/pages/index/index',
      success: function (res) {
      },
    }
  }
})