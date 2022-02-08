// pages/leftBlock/index.ts
const date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text: "文字",
      arr: [{
        key: 1,
        value: "1",
      },
      {
        key: 2,
        value: "2",
      },
      {
        key: 3,
        value: "4",
      },
      {
        key: 4,
        value: "4",
      },
      {
        key: 5,
        value: "5",
      }],
      name: "Bob",
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 500,
      duration: 500,
      inputText: '',
      inputValue: '',
      index: 1,
      exe: [
        {
          key: '1',
          value: '选项一',
          checked: 'true',
        },
        {
          key: '2',
          value: '选项二',
          checked: '',
        },
        {
          key: '3',
          value: '选项三',
          checked: '1',
        },
        {
          key: '4',
          value: '选项四',
          checked: 'false',
        },
        {
          key: '5',
          value: '选项五',
          checked: 'true',
        },
      ],
      date: "2021-11-16",
      time: "13:06:58",
      activeName: 'search',
  },
  bindKeyInput: function (e: any) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  catchInput: function(e: any) {
    this.setData({
      inputText: e.detail.value
    })
    console.log(e,)
  },
  pickerChange (e: any) {
      console.log(e.detail.value)
      this.setData({
        index: e.detail.value
      })
  },
  changeTime (e: any) {
    console.log(e)
  },
  changeDate (e: any) {
    console.log(e)
  },
  scroll(e: any) {
    console.log(e, 1)
  },
  upper(e: any) {
    console.log(e, 2)
  },

  lower(e: any) {
    // console.log(e)
    console.log('不能再下拉了', 3, e)
  },
  changeTabBar(e: any) {
    if (e.detail === 'friends') {
      wx.reLaunch({
        url: '../rightBlock/index',
      })
    } else if (e.detail === 'search') {
      wx.reLaunch({
        url: '../leftBlock/index',
      })
    } else if (e.detail === 'home') {
      wx.reLaunch({
        url: '../index/index',
      })
    } else if (e.detail === 'log') {
      wx.reLaunch({
        url: '../logs/logs',
      })
    }
    // wx.reLaunch({
    //   url: '../rightBlock/index'
    // })
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
      const query = wx.createSelectorQuery()
      query.select('#myCanvas')
        .fields({node: true, size: true})
        .exec((res: any) => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          const dpr = wx.getSystemInfoSync().pixelRatio
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr, dpr)
          ctx.fillRect(0,0,100,100)
        })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.login({
      success (res) {
      console.log(res)
      }
    })
      wx.getUserInfo({
        success(res: any){
          console.log(res)
        }
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
      console.log(this.data.arr.length)
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