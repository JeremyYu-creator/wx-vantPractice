// pages/exp/index.ts
import { requestUrl } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tag:'1',
      defaultNumber:2,
      userName: 'qwe',
      propNumber: 100,
      setNUmber: 0,
      judge: false,
      arr:[
        {
          name: 'Tony',
          age: 20,
        },
        {
          name: 'Katy',
          age: 22,
        },
        {
          name: 'Jack',
          age: 21,
        },
      ]
  },
  test() {
    console.log(1312, `${requestUrl}/api/get`)
    wx.request({
      url:`${requestUrl}/api/get`,
      method: "GET",
      data:{
          tag: this.data.tag
      },
      success:(res:any) => {
        console.log(res)
      }
    })
  },
  postData(e: any) { // 父子组件传参的函数
    console.log(e.detail)
      this.setData({
        setNUmber: e.detail.value
      })
  },
  getChild() {
    const child = this.selectComponent('.test3')
    child.setData({
      setNUmber: child.properties.setNumber + 1
    })
    child.addChildNumber()
    console.log(child)
  },
  getData() {
    wx.request({
      url: `${requestUrl}/api/post`,
      method:'POST',
      data: {
        number: this.data.defaultNumber
      },
      success:(res:any) => {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options: any) {
    console.log(options);
    this.getData()
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