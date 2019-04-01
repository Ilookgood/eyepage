import { config } from "../config.js";
class HTTP {
  request(params) {
    wx.showLoading({
      title: '数据请求中',
    })
    let token = wx.getStorageSync("token") || '';
    wx.request({
      url: config.api_base_url + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'weapp-id': 10001,
        'cookie': 'JSESSIONID=' + token,
        // referer

      },
      method: params.method || "GET",
      dataType: 'json',
      responseType: 'text',
      complete: () => {
        wx.hideLoading()
      },
      success: (res) => {
        // console.log(header.referer)
        let code = res.data.status
        switch (code) {
          case 200:
            params.success(res.data)
            break;
          case 30000:
            wx.switchTab({
              url: '/pages/login/login'
            })
            break;
          case 300:
            wx.showToast({
              title: res.data.description,
              icon: 'none',
              duration: 2000
            })
            break;
          case '100':
            break;
        }
        // let code = res.statusCode.toString();
        // if (code.startsWith('2')) {
        //   params.success(res.data)
        // } else {
        //   wx.showToast({
        //     title: '错误111' + code,
        //     icon: 'none',
        //     duration: 2000
        //   })
        // }
      },
      fail: (err) => {
        wx.showToast({
          title: "报错了",
          icon: 'none',
          duration: 2000
        })
      }
    })
  }

}
export { HTTP }