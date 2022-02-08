// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
    activeName: 'log',
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
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
})
