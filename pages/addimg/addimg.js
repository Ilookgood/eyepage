// pages/addimg/addimg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tempFilePaths: "",
    imgfig:false,
    adimg:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  chooseImage: function (e) {
    let that = this
    let arrlist = []
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        console.log(res.tempFilePaths)
        let tempFilePaths = res.tempFilePaths
        // for (var i = 0; i < tempFilePaths.length; i++) {
        //   wx.uploadFile({
        //     url: 'http://daschowcloud.daschow.com/daschowcloud/api/file/upload',
        //     filePath: tempFilePaths[i],
        //     name: 'file',
        //     formData: {
        //       type: 11
        //     },
        //     success: function (res) {
        //       var data = JSON.parse(res.data)
        //       let arrimg = that.data.uploadFilelist.concat(data.data)
        //       that.setData({
        //         uploadFilelist: arrimg
        //       })
        //     }

        //   });
        // }
        // const images = this.data.images.concat(res.tempFilePaths)
        // // 限制最多只能留下9张照片
        // this.data.images = images.length <= 9 ? images : images.slice(0, 9);
        // if (images.length > 9) {

        // }
        // // wx.setStorageSync("imgs", this.data.images)
        that.setData({
          tempFilePaths: tempFilePaths[0],
          imgfig:true,
          adimg:false,
        });
        // $digest(this)
      }, fail: function () {
        wx.showToast({
          title: '上传失败，请重新上传',
          icon: 'success',
          duration: 2000
        });
      }
    })

  },
  tempFilePaths_del:function(){
    this.setData({
      tempFilePaths: "",
      imgfig: false,
      adimg: true,
    });
  },
  /**
     * 表单提交
     */
  saveData: function (e) {

    let _this = this,
      values = e.detail.value

    // 表单验证
    if (!_this.validation(values)) {
      // App.showError(_this.data.error);

      wx.showToast({
        title: _this.data.error,
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    http.request({
      url: 'address/save',
      method: 'post',
      data: {
        name: values.name,
        phone: values.phone,
        address: arrc,
        addressDetail: values.detail,
        type: 0
      },
      success: (res) => {

        // 按钮禁用
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
        if (res.status == 200) {

          wx.navigateBack({
            delta: 1
          })
        }

      }
    })
  },
  /**
  * 表单验证
  */
  validation: function (values) {
    if (values.name === '') {
      this.data.error = '昵称不能为空';
      return false;
    }
    if (values.phone.length < 1) {
      this.data.error = '手机号不能为空';
      return false;
    }
    if (values.phone.length !== 11) {
      this.data.error = '手机号长度有误';
      return false;
    }
    let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!reg.test(values.phone)) {
      this.data.error = '手机号不符合要求';
      return false;
    }
    if (values.occupation === '') {
      this.data.error = '职业不能为空';
      return false;
    }
    if (values.declarationv === '') {
      this.data.error = '变美宣言不能为空';
      return false;
    }
    return true;
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

  }
})