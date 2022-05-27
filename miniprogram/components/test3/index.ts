// components/test3/index.ts
Component({
  options:{
    multipleSlots:true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propNumber: {
        value: 0,
        type: Number,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      childNumber: 1,
      name:'asd'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addChildNumber() {
      this.setData({
        childNumber: this.data.childNumber + 1,
      })
      this.triggerEvent('postData', {
          value: this.properties.childNumber,
          name: this.properties.name
      })
    }
  }
})
