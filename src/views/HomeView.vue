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
/* 1. 整体布局与背景 (关键修改在这里) */
/* ========================================================= */
.home-container {
    position: relative;
    width: 100%;
    /* 【修改点】确保容器高度正好是视口高度 */
    min-height: 100vh;
    height: 100vh; 
    /* 【修改点】移除滚动条设置 */
    overflow: hidden; 
    /* 解决浏览器默认 margin 导致的滚动条 */
    margin: 0; 
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
    /* 【关键修改】使用 Flex 布局让 Header 和 Main 适应高度 */
    display: flex;
    flex-direction: column;
    height: 100%; 
}

/* Header 轮播图样式 */
.el-header {
    /* 【修改点】Header 高度是 400px，但 ElementUI 默认是 60px。
       所以这里需要设置为 400px，或者根据你的实际需求来 */
    height: 400px !important; 
    background-color: transparent !important;
    padding: 0;
    flex-shrink: 0; /* 不会被 Main 挤压 */
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.95;
    /* 这里的 line-height 可能是让图片居中的关键 */
    line-height: 400px; /* 匹配 header height */
    margin: 0;
 }

 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
 }

 .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
 }

/* ========================================================= */
/* 2. Main 内容区 (Logo + 简介左右布局) */
/* ========================================================= */
.el-main {
    /* 【关键修改】让 Main 占据剩余所有空间 */
    flex-grow: 1; 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    /* 【修改点】大幅减小 Padding！这是导致溢出的主要原因 */
    padding: 50px 0; /* 从 250px 减小到 50px，避免内容溢出 */
    
    /* 如果内容仍然超出，可以设置 Main 内部滚动 */
    overflow-y: auto; 
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
</style>