<template>
    <div id="fullpage">
      <div class="section" id="section0">
        <div class="title1">EDUT IC 大创中心简介 </div>
        <div class="title2">Innovation Center for School of Education Science and Technology</div>
        <div class="title3">
          南京邮电大学教育科学与技术学院大学生创新创业中心（Innovation Center for School of Education Science and Technology),简称EDUT IC，中文简称南邮教科院大创中心，成立于2018年。我们致力于承办并参加科技竞赛，为学生提供一个自由开放的学习环境，且社团面向任何零基础的同学，欢迎任何感兴趣的同学参加。
        </div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section1">
        <div class="title1 fadeInLeft">赛事部 </div>
        <!-- <div class="title2 fadeInLeft">   </div> -->
        <div class="title3 fadeInLeft">赛事部负责组织和管理大学生课内外竞赛，我们旨在完善竞赛体系，更好的为参与学科竞赛、STITP等创新类活动的同学们服务。当然，加入赛事部，你将有机会更好的了解大赛的内容，亲临赛场观摩，从而积累一定的竞赛经验，锻炼自己的能力……无论你是否是赛事小白，只要你有一颗热爱赛事的心，在这里你一定能收获颇丰，获得一段仅属于你的大学经历。</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section2">
        <div class="title1">创业中心</div>
        <!-- <div class="title2">电子电路 嵌入式 通信系统 电子设计竞赛</div> -->
        <div class="title3">创业中心负责承办大学生创业相关的赛事及创业后续工作。近年来，大学生创业成为一股热潮，我们创业中心旨在为学生提供此类平台，积极承办大学生创业的相关赛事，鼓励大学生创新创业。大学生创业听上去是一件很酷的事，如果你对创业感兴趣，想让他成为你大学生活的一部分，那么加入创业中心将是你最正确的选择。</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section3">
        <div class="title1">办公室 </div>
        <!-- <div class="title2">平面设计 视频 音频 3D 摄影</div> -->
        <div class="title3">办公室是大创中心的中枢职能部门，主要负责联系协调赛事相关的各种活动及相关人员的通知，它保证了整个大创中心的正常运转。其主要工作为：人员的组织与调配，活动策划与总结，公众号的运营与维护等。在这里，你能很好的锻炼到自己与他人交往的能力以及随机应变的能力，这些都是你在书本中无法获得的。如果你是个热心负责，勇于挑战的人，办公室欢迎你的加入。</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section5">
        <div class="title1">学创部 </div>
        <div class="title2">平面设计 数字教育资源 人工智能 软件开发 视频制作</div> 
        <div class="title3">学创部是大创中心的四个部门之一，也是大创中心的核心组成部门。学创部的分类包括：数字化教育资源、平面设计、视频制作、人工智能、软件开发。每个小组都有专业的老师和优秀的学长学姐进行授课，强化基础提高能力。这是一个完全自由开放的学习平台，如果你有兴趣并且热爱学习，学创部是你最好的选择</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section4">
        <div class="title1">联系我们</div>
        <div class="title2">Innovation Center for School of Education Science and Technology</div>
        <div class="title3">
          <p>地址:南京市栖霞区文苑路9号南京邮电大学文科楼424</p><br>
          <p>邮箱:602958117@qq.com</p>
          <p>Copyright @南邮教科院大创中心</p>
          <!-- <a href="https://github.com/Njupt-Sast-Network" target="_blank">https://github.com/Njupt-Sast-Network</a> -->
        </div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
	    </div>
</div>
</template>

<script>
import $ from 'jquery'
import '../assets/js/jquery.fullPage.min.js'
import bus from '../assets/enventBus.js'

export default {
  data () {
    return {
      author: 'Alex Chen',
      welcomeFormVisible:false
    }
  },
  methods: {
    openNew: function() {
      this.welcomeFormVisible = true;
      bus.$emit('opNew',this.welcomeFormVisible);
    }
  },
  mounted:function () {
    $('#fullpage').fullpage({
      navigation: true,
      continuousVertical:true,
      afterLoad: function(anchorLink, index){
        if(index == "1"){
          document.getElementById("section0").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "2"){
          document.getElementById("section1").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "3"){
          document.getElementById("section2").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "4"){
          document.getElementById("section3").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "5"){
          document.getElementById("section5").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "6"){
          document.getElementById("section4").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
      },
    });
  },
  destroyed:function () {
    $('#fullpage').fullpage.destroy('all');
  }
}
</script>

<style>
@import "../assets/css/jquery.fullPage.min.css";
* { margin: 0; padding: 0;}
ul { list-style-type: none;}
.section { text-align: center; background-repeat: no-repeat; background-position: 50% 50%; background-size: cover; overflow: hidden;}
#section0 { background-image: url(../assets/img/bg.jpg);}
#section1 { background-image: url(../assets/img/2bg.jpg);}
#section2 { background-image: url(../assets/img/4bg.jpg);}
#section5 { background-image: url(../assets/img/1bg.jpg);}
#section4 { background-image: url(../assets/img/3bg.jpg);}
#section3 { background-image: url(../assets/img/5bg.jpg);}
.title1 { opacity: 0.8; font-size: 60px; line-height: 93px; background: url(../assets/img/titleline1.png) no-repeat center bottom;text-shadow: 2px 2px 10px #666;}
.title2 { opacity: 0.8; font-size: 40px; line-height: 75px;}
.title3 { font-size: 24px; font-family: 'PingFang-SC-UltraLight', '微软雅黑', '宋体'; line-height: 48px; margin: 20px auto 0 auto; opacity: 0.7; width: 70%;}
#section1 .title1, #section1 .title2, #section2 .title1, #section2 .title2，#section5 .title2 { color: #fff; opacity: 1;}
#section1 .title3, #section2 .title3{ color: #fff;}
#section3 .title3 { color: #000;}
#section0 .title3 {font-size: 18px;opacity: 1}


#section1 .title1 { background: url(../assets/img/titleline2.png) no-repeat center bottom;}
#section2 .title1 { background: url(../assets/img/titleline3.png) no-repeat center bottom;}
#section3 .title1 { background: url(../assets/img/titleline4.png) no-repeat center bottom;}
#section4 .title1 { background: url(../assets/img/titleline4.png) no-repeat center bottom;}
#section5 .title1 { background: url(../assets/img/titleline4.png) no-repeat center bottom;}
.joinBtn { cursor: pointer; margin: 85px auto 0; width: 220px; height: 50px; position: relative; background: #5396FF; color: #fff; line-height: 50px; font-size: 24px; border-radius: 25px;}
.joinBtn a { display: inline-block; width: 100%; height: 100%; color: #fff; font-family: 'PingFang-SC-UltraLight', '微软雅黑', '宋体'; text-decoration: none;}

.fp-tableCell {
  opacity: 0;
  transform: translateX(-100px);
}

.fp-tableCell::before{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,0.5);
	content: '';
	-webkit-transition: -webkit-transform 0.6s;
	transition: transform 0.6s;
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
}

.joinBtn:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section1:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section2:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section3:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section4:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section5:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
.gauss {
    -webkit-filter: blur(10px); 
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);    
    filter: blur(10px);
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
</style>
