// pages/exq/index.ts
import {requestUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      columnList: [] as any,
      isLoading: false
  },
  getColorList() {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title:'数据加载中...'
    })
    wx.request({
      url:`${requestUrl}/api/color`,
      method:'GET',
      success:(res: any) => {
        this.setData({
          columnList: [...res.data.data, ...this.data.columnList]
        })
        console.log(res, this.data.columnList)
      },
      complete:() => {
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getColorList()
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
    if (this.data.isLoading) return
    this.getColorList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})