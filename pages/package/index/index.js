// pages/packageA/index/index.js
import { M } from '../../../util/M.js';
let m = new M();
let app = getApp();
let that;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  linkSetPwd() {
    wx.navigateTo({
      url: '../setPwd/index',
    })
  },
  loginout(){
    wx.clearStorageSync('userInfo');
    wx.reLaunch({
      url: '../../login/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
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
    let userInfo=wx.getStorageSync('userInfo');
    if (userInfo){
      that.setData({
        u:userInfo
      });
    }
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

  },
  linkResults(){
    wx.navigateTo({
      url: '/pages/package/results/index',
    })
  },
  linkSclass() {
    wx.navigateTo({
      url: '/pages/package/selectClass/index',
    })
  },
  linkMyClass() {
    wx.navigateTo({
      url: '/pages/package/selectClass/index?id=3',
    })
  }
})