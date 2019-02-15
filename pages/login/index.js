// pages/login/index.js
import {M} from '../../util/M.js';
let m=new M();
let app=getApp();
let that;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    that.setData({
      width:app.globalData.windowWidth,
      height:app.globalData.windowHeight
    });
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

  },
  login(e){
    if(e.detail.value.userName==""){
      m.showTost('学号有误');
      return;
    }else if(e.detail.value.userPwd==""){
      m.showTost('密码不能为空');
      return;
    }else{ 
      if(e.detail.value.userName=="admin"&& e.detail.value.userPwd=="admin"){
        m.showLoading('正在登陆');
        setTimeout(()=>{
          wx.reLaunch({
            url: '../package/index/index',
          });
          wx.hideLoading();
        },2000);
      }
    }
  }
})