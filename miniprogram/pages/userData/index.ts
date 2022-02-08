// pages/userData/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    systemList:{
      mode: '',
    },
    test:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.startLocationUpdateBackground({
      type: 'gjc02',
      success(res: any) {
        console.log(res)
      }
    })
  },
  clickLocation: function() {
    const that = this
    wx.getLocation({
      type: 'gcj02',
      success(res: any) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        wx.openLocation({
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          scale: 18
        })
      }
    })
  },
  clickSelectLocation() {
      const that = this
      wx.chooseLocation({
        latitude: that.data.latitude,
        longitude: that.data.longitude,
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log(res)
        }
      }),
      wx.setStorage({
        key: 'left',
        data: this.data.latitude,
        encrypt: true,
        success() {
          wx.getStorage({
            key: 'left',
            encrypt: true,
            success(res) {
              console.log(res.data)
            }
          })
        },
      })
  },
  clickGetPhoneInfo() {
      let _this = this
      wx.getSystemInfoAsync({
        success(res) {
          console.log(11111, res)
          // _this.setData({
          //   systemList: res
          // })
          let count = 3
          _this.setData({
            test: count++
          })
          console.log(2324234)
        },
        fail(res) {
          console.log(res)
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  
   /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})