<template>
  <div class="sun-ce-container">
    <div class="video-section">
      <h3>孙策相关视频</h3>
      <video 
        class="local-video-player"
        controls 
        autoplay 
        muted 
        loop
      >
        <source src="../assets/video/SunCe.mp4" type="video/mp4">
        抱歉，您的浏览器不支持 HTML5 视频播放。
      </video>

      <p class="video-tip"></p>
    </div>

    <div class="introduction-section">
      <h2>🔥 代号鸢 | 孙策</h2>
      <p class="alias">
        —— "我叫孙策，江东小霸王。我的江山，由我说了算！"
      </p>
      <h3>角色基本信息</h3>
      <ul>
        <li>身份：江东之主、主线可攻略角色</li>
        <li>代号/外号：小霸王、伯符</li>
      </ul>
      <h3>角色介绍与魅力</h3>
      <p>
        孙策是江东的实际统治者，性格热烈、豪迈直率、充满少年意气。他勇猛过人，富有感染力，行事果决，是一个天生的领袖。在与密探的互动中，他展现出强大的占有欲和直球式的爱意，让人难以招架。
      </p>
      <p>
        他的故事线围绕着开疆拓土、保卫江东以及少年英雄的成长与困境展开。孙策的魅力在于他坦荡的性格、炙热的感情，以及作为一方霸主，却仍保留着少年纯真的反差感。
      </p>
      
      <blockquote>
        玩家评价：不愧是小霸王，热烈得让人心跳加速！跟着他，江山和密探都是我的！
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SunCe'
}
</script>

<style scoped>
/* 容器的满屏背景 (使用伪元素实现透明度) */
.sun-ce-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 100vh; 
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.sun-ce-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    /* 背景图片设置 (请替换为孙策专属背景) */
    background-image: url('../assets/background/BG4.jpg'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; 
    background-attachment: fixed; 
    
    opacity: 0.8; /* 透明度 20% */
    z-index: -1;
}

/* 容器样式：使用 Flexbox 实现左右布局 */
.sun-ce-container {
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

/* 左侧视频区域样式 - 主题色：红/橙 */
.video-section {
  background-color: rgba(255, 245, 240, 0.9); /* 浅橙/白，高不透明度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h3 {
    color: #cc0000;
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

/* 右侧介绍区域样式 - 主题色：红/橙 */
.introduction-section {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #d9d9d9;
}

.introduction-section h2 {
  color: #cc0000; /* 红色主题色 */
  border-bottom: 3px solid #cc0000;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.8em;
}

.introduction-section h3 {
  color: #ff4500;
  margin-top: 25px;
  border-left: 4px solid #cc0000;
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
  list-style-type: '💥 '; /* 使用爆炸符号 */
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

blockquote {
    margin: 20px 0;
    padding: 15px;
    border-left: 5px solid #cc0000;
    background-color: #fff0f0; /* 浅红背景 */
    color: #555;
    font-size: 0.95em;
    border-radius: 4px;
}

/* 媒体查询：适应较小屏幕 */
@media (max-width: 768px) {
  .sun-ce-container {
    flex-direction: column; 
    padding: 15px;
    gap: 20px;
  }
}
</style>