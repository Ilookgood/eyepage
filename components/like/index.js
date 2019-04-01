// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    },
    likebin:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'img/aixinTia.png',
    noSrc:'img/aixin.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
     onlike:function(event){
       let like=this.properties.like
       let count = this.properties.count;
       count=like?count-1:count+1;
       this.setData({
         count: count,
         like:!like
       })
       let behavior=this.properties.like?"like":"cancel"
       this.triggerEvent('like',{
         behavior: behavior
       })
     }
  }
})
