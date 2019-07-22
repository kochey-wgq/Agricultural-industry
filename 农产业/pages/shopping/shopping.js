// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '',
    slideWin:'',
    edit:'编辑',
    imgMoney:55,
    money:0,
    sum:1,
    listActive:''
  },
  
  /**
   * 数量
   */
  push(){
    var sumPs = this.data.sum + 1;
    var totalPs = this.data.imgMoney * sumPs;
    this.setData({
      sum: sumPs,
      money: totalPs
    })
  },

  pop(){
    var sumPo = this.data.sum - 1;
    var totalPo = this.data.money - this.data.imgMoney;
    if (sumPo < 1) return;
    this.setData({
      sum: sumPo,
      money: totalPo
    })  
  },

  /**
   * 点击全选
   */
  handleCheck(){
    var swi = this.data.active == '' ? 'on' : '';
    var swiMoney = this.data.active == '' ? 55 : 0;
    var sumLen = this.data.listActive == '' ? 1 : 1;
    this.setData({
      active: swi,
      money: swiMoney,
      sum: sumLen
    })
  },

  /**
   * 点击单选
   */
  handleCheckList() {
    var swi = this.data.listActive == '' ? 'on' : '';
    var listMoney = this.data.listActive == '' ? 55 : 0;
    var sumLen = this.data.listActive == '' ? 1 : 1;
    this.setData({
      listActive: swi,
      money: listMoney,
      sum: sumLen
    })
  },

  /**
   * 窗帘删除效果
   */

  handleEdit(){
    var sil = this.data.slideWin == '' ? 'height' : '';
    var editToggle = this.data.edit == '编辑' ? '完成': '编辑';
    this.setData({
      slideWin : sil,
      edit : editToggle
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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