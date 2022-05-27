// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
    activeName: 'log',
    active: 1,
    tabData:[
      {
        name: '标签一',
        index: 1,
      },
      {
        name: '标签二',
        index: 2,
      },
      {
        name: '标签三',
        index: 3,
      },
      {
        name: '标签四',
        index: 4,
      },
    ],
    count:0,
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
  onChange(event: any) {
    console.log(12321, event)
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  count(e:any) {
    this.setData({
      count: this.data.count + e.target.dataset.num
    })
    console.log(this.data.count, e)
  },
  onReady() {
    const query = wx.createSelectorQuery() // 获取dom结点
    query.select('#circle')
      .fields({node: true, size: true})
      .exec((res: any) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')// 设置为2d的实例
        const dpr = wx.getSystemInfoSync().pixelRatio // 获取到自适应屏幕的单位
        canvas.width = 300 * dpr
        canvas.height = 150 * dpr
        ctx.scale(dpr, dpr)
        ctx.fillStyle = "rgb(200,0,0)"
        console.log(res)
        // ctx.fillRect(0, 0, 50, 50)
        // ctx.strokeRect(20, 20, 10, 10)
        // ctx.fillRect(100, 100, 200, 200)
        // ctx.strokeRect(200, 100, 30, 50)
        // ctx.beginPath()
        // ctx.moveTo(50, 50)
        // ctx.lineTo(200, 100)
        // ctx.closePath()
        // ctx.stroke()
        // ctx.beginPath()
        // ctx.moveTo(100, 100)
        // ctx.lineTo(100, 50)
        // ctx.lineTo(50,50)
        // ctx.closePath()
        // ctx.fill()
        ctx.beginPath()
        ctx.arc(100, 100, 25, 0, Math.PI * 2, false)
        ctx.stroke()
        ctx.fill()
        // ctx.beginPath()
        // ctx.moveTo(0, 0)
        // ctx.arcTo(100, 50, 100, 100, 50);
        // ctx.closePath()
        // ctx.stroke()
      })
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
