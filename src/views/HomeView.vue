<template>
  <div class="home-container">
    <el-container class="content-container">
      <el-header>
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="(item,index) in imgUrl" :key="index">
            <h3 class="medium"><img :src="item" width="760px" alt="logo"></h3>
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-main>
        <div class="main-content">
          <img src="../assets/logo.jpg" alt="代号鸢Logo" class="main-logo">

          <el-card class="intro-bubble">
            <h2>✨ 代号鸢 简介 (Code Name: Kite)</h2>
            <p>
              代号鸢是一款以三国时期为背景的女性向剧情卡牌手游。
              玩家将以绣衣校尉的身份，潜伏在东汉末年的乱世之中，体验爱恨情仇的跌宕剧情。
            </p>
            <p>
              角色立绘精美，剧情引人入胜，为你带来沉浸式的乱世体验。
            </p>
          </el-card>
        </div>
      </el-main>
      <el-footer class="video-footer">
        <div class="footer-content-center">
          <h3 class="pv-title">代号鸢周年庆PV</h3>
          
          <video controls autoplay muted loop class="footer-video">
            <source src="../assets/intro_video.mp4" type="video/mp4">
            您的浏览器不支持 video 标签。
          </video>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import avaterImg1 from '@/assets/image/fu.jpg'
import avaterImg2 from '@/assets/image/shun.jpg'
import avaterImg3 from '@/assets/image/liu.jpg'
import avaterImg4 from '@/assets/image/yuan.jpg'
import avaterImg5 from '@/assets/image/zuo.jpg'
  export default {
    data() {
      return {
        imgUrl:[
			avaterImg1,
			avaterImg2,
			avaterImg3,
			avaterImg4,
			avaterImg5,
		]
      }
    }
  }
</script>

<style scoped>
/* ========================================================= */
/* 1. 整体布局与背景 (保持不变) */
/* ========================================================= */
.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto; 
}

.home-container::before {
  content: "";
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background: url('../assets/Back3.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.9;
}

.content-container {
  min-height: 100vh;
}

/* Header 轮播图样式保持不变 */
.el-header {
  height: 200px !important;
  background-color: transparent !important;
  padding: 0;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.95;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
/* ========================================================= */
/* 2. Main 内容区 (Logo + 简介左右布局 - 保持不变) */
/* ========================================================= */
.el-main {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  padding: 250px 0;
}

.main-content {
  display: flex; 
  flex-direction: row; 
  align-items: flex-start; 
  width: 90%; 
  max-width: 1200px;
  gap: 40px;
}

.main-logo {
  width: 180px; 
  flex-shrink: 0; 
  margin: 0;
  margin-top: 15px; 
}

.intro-bubble {
  flex-grow: 1; 
  width: auto;
  background-color: rgba(255, 255, 255, 0.65); 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
  border-radius: 15px;
  padding: 30px;
  text-align: left;
}

/* ========================================================= */
/* 3. Footer 视频区 (白色背景 + 放大视频 + 渐变过渡) */
/* ========================================================= */
.video-footer {
  height: 600px !important; /* 增加高度以容纳放大后的视频 */
  padding: 0;
  
  
  /* Flexbox 居中布局 */
  display: flex;
  justify-content: center; 
  align-items: center;    
}

.footer-content-center {
  display: flex;
  flex-direction: column; /* 垂直堆叠 */
  align-items: center; 
  width: 90%; /* 放大内容区域宽度 */
  max-width: 1100px; /* 增大最大宽度 */
}

.pv-title {
  margin-bottom: 25px;
  font-size: 1.8em; 
  font-weight: bold;
  /* 字体颜色改为深色，适应白色背景 */
  color: #333; 
  letter-spacing: 2px;
}

.footer-video {
  width: 100%; /* 占满内容区域宽度 (已放大) */
  max-height: 600px; /* 限制最大高度 */
  border-radius: 10px;
  /* 阴影改为深色，适应浅色背景 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
}

/* 移除旧的 Footer 布局样式，确保它们不干扰新的中央布局 */
.footer-layout, .footer-col, .info-col, .video-col {
  /* 强制隐藏之前分栏布局的容器 */
  display: none !important; 
}

/* ... (轮播图内部样式保持不变) ... */
</style>