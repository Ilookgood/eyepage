//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        "img":'../../img/img_img.png',
        "bfimg":"https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "id":"111",
        "bfid":"4ijfd",
        "name":"Andy",
        "text":"我只想变得更好，却不会像你们想象中的没有界限不管是外表还是内在，我都会努力"
      },
      {
        "img": '../../img/img_img.png',
        "bfimg": "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "id": "111",
        "bfid": "4ijfd",
        "name": "Andy",
        "text": "我只想变得更好，却不会像你们想象中的没有界限不管是外表还是内在，我都会努力"
      },
      {
        "img": '../../img/img_img.png',
        "bfimg": "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "id": "111",
        "bfid": "4ijfd",
        "name": "Andy",
        "text": "我只想变得更好，却不会像你们想象中的没有界限不管是外表还是内在，我都会努力"
      }
      
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true
  },
  //事件处理函数
  todetails: function() {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  toaddimg:function(){
    wx.navigateTo({
      url: '../addimg/addimg'
    })
  },
  tointroduils:function(){
    wx.navigateTo({
      url: '../introducedetails/introducedetails'
    })
  },
  onLoad: function () {
   
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
