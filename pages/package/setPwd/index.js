// pages/package/setPwd/index.js
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

  },
  setPwd(e){
    if (e.detail.value.oldPwd == "") {
      m.showTost('旧密码不能为空');
      return;
    } else if (e.detail.value.newPwd == "") {
      m.showTost('新密码不能为空');
      return;
    } else if (e.detail.value.truePwd == "") {
      m.showTost('确认密码不能为空');
      return;
    } else {
      m.showLoading('修改成功');
      setTimeout(() => {
        wx.reLaunch({
          url: '../../login/index',
        });
        wx.hideLoading();
      }, 2000);
    }
  }
})