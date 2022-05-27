Component({
    data: {
        title: 'hhahahahhahaha',
        num: 1
    },
    properties: {
      isSum:{
        type: Boolean,
        value: true,
      }
    },
    methods:{
      addCount() {
        this.setData({
          num: this.data.num + 1,
        })
        this._showCount()
      },
      _showCount() {
        wx.showToast({
          title: `count值是${this.data.num}`,
          icon: 'none'
        })
      }
    }
})