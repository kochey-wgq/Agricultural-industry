// pages/mymassage/mymassage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[]
  },

  /**
   * 个人中心
   */
  getUserInfo(){
    const that = this;
    wx.request({
      url: "https://7669-video-bj26u-1259614424.tcb.qcloud.la/tabbar-icon/dataTotal.json?sign=96629a0200a5621fd20478fd80755edc&t=1563795172",
      success(res) {
        console.log(res)
        if (res.data.changeOrigin === true) {
          that.setData({
            userList: res.data.mymsgData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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