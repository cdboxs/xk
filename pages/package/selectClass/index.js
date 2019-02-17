// pages/package/selectClass/index.js
import * as echarts from '../ec-canvas/echarts';
import {M} from "../../../util/M.js";
let app=getApp();
let m=new M();
let that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navId:Number,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    if (options.id){
      that.setData({
        navId:options.id
      });
    }else{
      that.setData({
        navId:1,
        classData: { onInit: that.initChart }
      });
    }
    
    m.query('.swicthNav', (e) => {
      that.setData({
        scrollHeight: app.globalData.windowHeight - (e[0].height + 3)
      });
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
  clickNav(e){
    that.setData({
      navId: e.currentTarget.dataset.navid,
      classData: { onInit: that.initChart }
    });
  },
  initChart(canvas, width=50, height=50) {
    const chart = echarts.init(canvas, null, {
      width: '100px',
      height: '100px'
    });
    canvas.setChart(chart);
    chart.setOption(option);
    return chart; 
  }
})


var labelBottom = {
  normal: {
    color: '#ccc',
    label: {
      show: true,
      position: 'center'
    },
    labelLine: {
      show: true
    }
  },
  emphasis: {
    color: 'green'
  }
};
var labelTop = {
  normal: {
    color: 'green',
    label: {
      show: true,
      position: 'center'
    },
    labelLine: {
      show: true
    }
  },
  emphasis: {
    color: 'green'
  }
};
var radius = [25, 30];

var option = {
  legend: {
    x: 'center',
    y: 'center',
    data: [

    ]
  },

  series: [
    {
      type: 'pie',
      center: ['30px', '30px'],
      radius: radius,
      silent:true,
      x: '30%', // for funnel
      label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          show: false,             // 是否显示标签[ default: false ]  
        }
      },
      data: [
        { name: 'other', value: 25, itemStyle: labelBottom },
        { name: '报名人数', value: 75, itemStyle: labelTop}
      ]
    }
  ]
};



 