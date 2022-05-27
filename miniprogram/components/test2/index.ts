// components/test2/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 针对独立出来的元素进行监听的属性
     n1: 0,
     n2: 0,
     sum: 0,
     // 针对对象中的属性进行监听
     _rgb: {
       r: 0,
       g: 0,
       b: 0
     },
     fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(e: any) {
      let type = e.currentTarget.dataset.type
      console.log(type, e.currentTarget, typeof type)
      if (type === '1') {
        this.setData({
          n1: this.data.n1 + 1
        })
      } else {
        this.setData({
          n2: this.data.n2 + 1
        })
      }    
    },
    changeColor(e:any) {
      const {letter} = e.currentTarget.dataset
      if (letter === 'r') {
        this.setData({
          '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
        })
      } else if (letter === 'g') {
        this.setData({
          '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
        })
      } else if (letter === 'b') {
        this.setData({
          '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
        })
      }
    },
    _setRandom() {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
      })
    }
  },
  observers: {
    'n1,n2': function(new1: number, new2: number) {
        this.setData({
          sum: new1 + new2
        })
    },
    // 'rgb.r, rgb.g, rgb.b':function(r:number, g:number, b:number) {
    //     this.setData({
    //         fullColor: `${r},${g},${b}`
    //     })
    // }
    '_rgb.**': function(obj: any) {
      this.setData({
        fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  },
  pageLifetimes: {
    show() {
      this._setRandom()
    },
    hide() {

    },
    resize() {

    }
  }
})
