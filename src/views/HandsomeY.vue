<template>
  <div class="yuan-ji-container">
    <div class="video-section">
      <h3>袁基相关视频</h3>
      <video 
        class="local-video-player"
        controls 
        autoplay 
        muted 
        loop
      >
        <source src="../assets/video/YuanJi.mp4" type="video/mp4">
        抱歉，您的浏览器不支持 HTML5 视频播放。
      </video>

      <p class="video-tip"></p>
    </div>

    <div class="introduction-section">
      <h2>📿 代号鸢 | 袁基</h2>
      <p class="alias">
        —— "所谓名士风流，不外如是。可惜，公子是看不到了。"
      </p>
      <h3>角色基本信息</h3>
      <ul>
        <li>身份：袁氏嫡子、主线可攻略角色</li>
        <li>代号/外号：长公子</li>
      </ul>
      <h3>角色介绍与魅力</h3>
      <p>
        袁基作为四世三公袁氏的嫡子，集优雅、腹黑和深沉于一身。他表面温润如玉，实则城府极深，擅长政治权谋和人心操控。与密探的每一次对话都充满了试探与暧昧，是一位极具挑战性的角色。
      </p>
      <p>
        他的故事线围绕着家族的兴衰、背后的阴谋以及对天下大势的掌控欲。袁基的魅力在于他运筹帷幄的智谋、对美的极致追求，以及在冷酷面具之下，对密探产生的复杂情感。
      </p>
      
      <blockquote>
        玩家评价：温和的笑容下藏着刀，袁基的温柔是最致命的陷阱！但我们心甘情愿跳进去。
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuanJi'
}
</script>

<style scoped>
/* 容器的满屏背景 (使用伪元素实现透明度) */
.yuan-ji-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 100vh; 
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.yuan-ji-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    /* 背景图片设置 (请替换为袁基专属背景) */
    background-image: url('../assets/background/BG3.jpg'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; 
    background-attachment: fixed; 
    
    opacity: 0.8; /* 透明度 20% */
    z-index: -1;
}

/* 容器样式：使用 Flexbox 实现左右布局 */
.yuan-ji-container {
  display: flex; 
  padding: 30px 20px;
  gap: 30px; 
  max-width: 1200px; 
  margin: 0 auto; 
  font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.7;
}

/* 左右两栏基础样式 */
.video-section,
.introduction-section {
  flex: 1; 
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); 
}

/* 左侧视频区域样式 - 主题色：紫/棕 */
.video-section {
  background-color: rgba(245, 240, 255, 0.9); /* 浅紫/白，高不透明度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h3 {
    color: #551a8b;
    margin-bottom: 15px;
}

/* 本地视频播放器样式 */
.local-video-player {
    width: 100%; 
    height: auto;
    max-height: 600px;
    display: block;
    border-radius: 8px;
    background-color: #000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.video-tip {
    font-size: 0.85em;
    color: #777;
    margin-top: 10px;
}

/* 右侧介绍区域样式 - 主题色：紫/棕 */
.introduction-section {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #d9d9d9;
}

.introduction-section h2 {
  color: #551a8b; /* 深紫主题色 */
  border-bottom: 3px solid #551a8b;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.8em;
}

.introduction-section h3 {
  color: #8a2be2;
  margin-top: 25px;
  border-left: 4px solid #551a8b;
  padding-left: 10px;
}

.alias {
    font-style: italic;
    color: #666;
    margin-top: -5px;
    margin-bottom: 25px;
    padding-left: 10px;
    border-left: 3px solid #ccc;
    font-size: 0.95em;
}

ul {
  list-style-type: '💜 '; /* 使用紫色心形符号 */
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

blockquote {
    margin: 20px 0;
    padding: 15px;
    border-left: 5px solid #551a8b;
    background-color: #f7f0ff; /* 浅紫背景 */
    color: #555;
    font-size: 0.95em;
    border-radius: 4px;
}

/* 媒体查询：适应较小屏幕 */
@media (max-width: 768px) {
  .yuan-ji-container {
    flex-direction: column; 
    padding: 15px;
    gap: 20px;
  }
}
</style>