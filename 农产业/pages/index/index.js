//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList : [],
    navIndex : 0,
    swiperList:[],
    infoMouthList:[],
    expressNews:null,
    foodTopTitle:[],
    foodList:[],
    popularTitle:null,
    popularList:[],
    authorList:[]
  },

  /**
   * 改变导航下标样式
   */
  handleIndex(e){
    this.setData({  //事件委托(事件代理)来获取下标
      navIndex:e.target.dataset.index
    })
  },

  /** 
   * 获取导航信息 
   */
  getNavData() {
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        if(res.data.changeOrigin === true){
          that.setData({
            navList: res.data.dataNav
          })
        }
      }
    })
  },

  /**
   * 轮播
   */
  getSwiperData() {
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        if (res.data.changeOrigin === true) {
          that.setData({
            swiperList: res.data.dataImg
          })
        }
      }
    })
  },

  /**
   * 信息入口
   */
  getInfoMouth(){
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        if (res.data.changeOrigin === true) {
          that.setData({
            infoMouthList: res.data.infoMouth,
            expressNews: res.data.expressNews
          })
        }
      }
    })
  },

  /**
   * 菜式列表
   */

  getFood(){
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        if (res.data.changeOrigin === true) {
          that.setData({
            foodTopTitle: res.data.mainList,
            foodList: res.data.slideBlockRice
          })
        }
      }
    })
  },

  /**
   * 热门推荐
   */
  getPopular(){
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        console.log(res.data)
        if (res.data.changeOrigin === true) {
          that.setData({
            popularTitle: res.data.popularData.title,
            popularList: res.data.popularData.popularList
          })
        }
      }
    })
  },

  /**
   * 作者
   */
  getAuthor(){
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        console.log(res.data)
        if (res.data.changeOrigin === true) {
          that.setData({
            authorList: res.data.authorData,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData();
    this.getSwiperData();
    this.getInfoMouth();
    this.getFood();
    this.getPopular();
    this.getAuthor();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})