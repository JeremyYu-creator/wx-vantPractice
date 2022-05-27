// pages/exm/index.ts
import {requestUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      picList:[
        {
          name: '1',
          src: 'https://fop-fitcamp-resource.rjfittime.com/1d3b69d3-1844-48ac-8e23-ea405a2a7869.png',
        },
        {
          name: '2',
          src: 'https://fop-fitcamp-resource.rjfittime.com/0c233924-a13c-413f-8dc6-7dacc3f59256.png',
        }
      ],
      blockList:[
        {
          icon:'1',
          name: '一',
        },
        {
          icon:'2',
          name: '二',
        },
        {
          icon:'3',
          name: '三',
        },
        {
          icon:'4',
          name: '四',
        },

        {
          icon:'5',
          name: '五',
        },
        {
          icon:'6',
          name: '六',
        },
        {
          icon:'7',
          name: '七',
        },
        {
          icon:'8',
          name: '八',
        },
        {
          icon:'9',
          name: '九',
        },
      ],
      swiperList:[],
      mixList:[],
      name: 'Luka',
      gender:'F',
      count:0
  },
  getList() { // 获取轮播图list
    wx.request({
      url:`${requestUrl}/slides`,
      method:'GET',
      success:(res:any) => {
        console.log(res)
        this.setData({
          swiperList: res.data
        })
        console.log(this.data.swiperList)
      }
    })
  },
  getMixList() { // 获取到九宫格列表的id
    wx.request({
      url: `${requestUrl}/categories`,
      method:'GET',
      success:(res:any) => {
        this.setData({
          mixList: res.data
        })
        console.log(res, this.data.mixList)
      }
    })
  },
  goTo(e:any) {
    const {id, name} = e.currentTarget.dataset
    console.log(e.target.dataset, id, name, e)
    wx.navigateTo({
      url:`/pages/shopList/index?id=${id}&name=${name}`,
    })
  },
  countNumber() {
    this.setData({
      count: this.data.count+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
      this.getList()
      this.getMixList()
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
      this.setData({
        count: 0
      })
      wx.stopPullDownRefresh()
      console.log(12312312, this.data.count)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
      console.log(1231320)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})