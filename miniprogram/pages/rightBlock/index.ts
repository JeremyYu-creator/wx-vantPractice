// pages/rightBlock/index.ts
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      activeName: 'friends',
      firstLoading: true,
      isShow: false,
      touchTag: false,
      searchValue: '',
      show: false,
      actions: [
        {
          name: '选项',
        },
        {
          name: '选项',
        },
        {
          name: '选项',
          subname: '描述信息',
          openType: 'share',
        },
      ],
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat', openType: 'share' },
        { name: '微博', icon: 'weibo', description: '描述信息', },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      value: 24,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24',
      },
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
          inactiveIcon: 'location-o',
          activeIcon: 'success',
        },
        {
          text: '步骤二',
          desc: '描述信息',
          inactiveIcon: 'like-o',
          activeIcon: 'plus',
        },
        {
          text: '步骤三',
          desc: '描述信息',
          inactiveIcon: 'star-o',
          activeIcon: 'cross',
        },
        {
          text: '步骤四',
          desc: '描述信息',
          inactiveIcon: 'phone-o',
          activeIcon: 'fail',
        },
      ],
      active: 1,
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setTimeout(() => {
      this.setData({firstLoading: false})
    }, 500)  
  },
  showData:function () {
    console.log(1111)
    // this.data.isShow = !this.data.isShow
    this.setData({
      isShow: !this.data.isShow
    })
  },
  onClose: function() {
    console.log('22222222------')
    this.setData({
      isShow:!this.data.isShow
    })
  },
  onChange: function(e: any) {
    this.setData({
      searchValue: e.detail
    })
    console.log(e, this.data.searchValue)
  },
  onSearch: function() {
    console.log(123123123123, '点击回车可以自动触发search事件')
  },
  onCancel: function() {
    Toast('取消了')
  },
  showChange: function(e: any) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${e.detail}`,
    });
  },
  showSheet: function() {
    this.setData({
      show: true,
    })
  },
  closeIt: function() {
    this.setData({ show: false });
  },
  selectIt: function(event: any) {
    console.log(event.detail);
    Dialog.confirm({
      title:'请看这里',
      message: '😄哈哈哈'
    }).then(() => {
      console.log('确定')
    }).catch(() => {
      console.log('退出')
    })
  },
  showShareBtn: function() {
    this.setData({
      showShare:true
    })
  },
  selectShare: function(e: any) {
    console.log(e.detail)
  },
  closeShare: function() {
    this.setData({
      showShare: false
    })
  },
  addClick: function() {
    if (this.data.value > 98) {
        Toast('已经达到100，不可再添加！')
        return 
    }
    this.setData({
      value: this.data.value+2
    })
  },
  decreaseClick: function() {
    if (this.data.value < 2) {
      Toast('已经达到0，不可再删减！')
      return 
    }
    this.setData({
      value: this.data.value-2
    })
  },
  start() {
    const countDown = this.selectComponent('.control-count-down');// 获取到小程序vant封装组件的名称
    countDown.start();
  },

  pause() {
    const countDown = this.selectComponent('.control-count-down');
    countDown.pause();
  },

  reset() {
    const countDown = this.selectComponent('.control-count-down');
    countDown.reset();
  },

  finished() {
    Toast('倒计时结束');
  },
  changeTabBar(e: any) {
    this.setData({ activeName: e.detail });
    if (e.detail === 'friends') {
      console.log(2222)
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
    //   url: '../leftBlock/index',
    // })
    console.log(this.data.activeName, 11111)
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
  // "tabBar": {
  //   "color": "#222730",
  //   "borderStyle": "black",
  //   "backgroundColor": "#f0f8ff",
  //   "list": [
  //     {
  //       "pagePath": "pages/leftBlock/index",
  //       "text": "左侧内容"
  //     },
  //     {
  //       "pagePath": "pages/index/index",
  //       "text": "首页"
  //     },
  //     {
  //       "pagePath": "pages/rightBlock/index",
  //       "text": "右侧内容"
  //     }
  //   ]
  // },
