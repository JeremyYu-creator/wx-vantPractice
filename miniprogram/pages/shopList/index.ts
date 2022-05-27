// pages/shopList/index.ts
import {requestUrl} from '../../utils/request'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title: '',
      id: 1,
      shopList: [] as any, // 动态渲染的列表数据
      page: 1, // 默认请求的页码，后续会改变
      pageSize: 10, // 默认为10条，不会改变
      total: 0,
      tag: false, // 节流
      isLoading: false, // 加载数据
  },
  getShoplist(cb?: any) {
    this.setData({
      tag: true,
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...'
    })
    wx.request({
      url: `${requestUrl}/categories/${this.data.id}/shops`,
      method: 'GET',
      data: {
        _page:this.data.page,
        _limit:this.data.pageSize
      },
      success:(res: any) =>{
        console.log(res)
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: Number(res.header["X-Total-Count"])
        })
      },
      complete:() => {
        cb && cb()
        wx.hideLoading()
        this.setData({
          tag: false,
          isLoading: false,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log(options)
    this.setData({
      title: options.name,
      id: options.id
    })
    this.getShoplist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { // 动态设置title需要在这里写
      wx.setNavigationBarTitle({
        title: this.data.title
      })
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
      this.setData({
        page:1,
        shopList: [],
        total: 0
      })
      this.getShoplist(() =>{
        wx.stopPullDownRefresh()
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.tag) return
    console.log(this.data.shopList.length, this.data.total)
    if (this.data.shopList.length === this.data.total) {
      return Toast('已经到底啦')
    }
      this.setData({
        page:this.data.page+1
      })
      this.getShoplist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})