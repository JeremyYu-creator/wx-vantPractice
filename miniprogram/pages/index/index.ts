// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    placeLoading: false,
    activeName: 'home',
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    wx.login({
      success(res: any) {
        console.log(res, res.code)
      }
    })
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserRunData(e: any) {
    success: (res: any) => {
      console.log(e)
      console.log(res)
    }
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getUserLocationInfo() {
    console.log('1111111-------')
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(latitude, longitude, speed, accuracy)
      },
      fail (res) {
        console.log(res)
      }
    })
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
    console.log(e.detail)
  }
})
