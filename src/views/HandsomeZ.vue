<template>
  <div class="zuo-ci-container">
    <div class="video-section">
      <h3>左慈相关视频</h3>
      <video 
        class="local-video-player"
        controls 
        autoplay 
        muted 
        loop
      >
        <source src="../assets/video/ZuoCi.mp4" type="video/mp4">
        抱歉，您的浏览器不支持 HTML5 视频播放。
      </video>

      <p class="video-tip"></p>
    </div>

    <div class="introduction-section">
      <h2>🔮 代号鸢 | 左慈</h2>
      <p class="alias">
        —— "既是仙人，自然不该沾染凡尘，但你...是凡尘中最特别的一味药引。"
      </p>
      <h3>角色基本信息</h3>
      <ul>
        <li>身份：仙人、主线可攻略角色</li>
        <li>代号/外号：仙人、老头（自称）、慈儿</li>
      </ul>
      <h3>角色介绍与魅力</h3>
      <p>
        左慈是代号鸢中最神秘莫测的角色，自称仙人，行踪不定，言语间充满了禅机和戏谑。他拥有超凡的力量，却总以一种旁观者的姿态参与凡尘之事。他与密探的羁绊充满宿命感，是引导者也是局中人。
      </p>
      <p>
        他的故事线围绕着仙凡之隔、天命与抗争、以及跨越时间与规则的爱恋展开。左慈的魅力在于他的超然物外，却又在密探面前展现出极其人性化的一面，反差的温柔和对宿命的挑战引人入胜。
      </p>
      
      <blockquote>
        玩家评价：仙人也有七情六欲，这种禁忌又宿命的感觉太让人上头了！慈门永存！
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZuoCi'
}
</script>

<style scoped>
/* 容器的满屏背景 (使用伪元素实现透明度) */
.zuo-ci-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 100vh; 
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.zuo-ci-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    /* 背景图片设置 (请替换为左慈专属背景) */
    background-image: url('../assets/background/BG5.jpg'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; 
    background-attachment: fixed; 
    
    opacity: 0.8; /* 透明度 20% */
    z-index: -1;
}

/* 容器样式：使用 Flexbox 实现左右布局 */
.zuo-ci-container {
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

/* 左侧视频区域样式 - 主题色：蓝色 */
.video-section {
  /* 使用浅蓝色作为背景，保持 90% 不透明度 */
  background-color: rgba(240, 245, 255, 0.9); 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h3 {
    /* 深蓝色 */
    color: #004d99;
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

/* 右侧介绍区域样式 - 主题色：蓝色 */
.introduction-section {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #d9d9d9;
}

.introduction-section h2 {
  /* 深蓝色 */
  color: #004d99; 
  border-bottom: 3px solid #004d99;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.8em;
}

.introduction-section h3 {
  /* 中度蓝色 */
  color: #3366cc;
  margin-top: 25px;
  border-left: 4px solid #004d99;
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
  list-style-type: '✨ '; /* 使用闪光符号 */
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

blockquote {
    margin: 20px 0;
    padding: 15px;
    border-left: 5px solid #004d99;
    /* 极浅蓝色背景 */
    background-color: #f0f8ff; 
    color: #555;
    font-size: 0.95em;
    border-radius: 4px;
}

/* 媒体查询：适应较小屏幕 */
@media (max-width: 768px) {
  .zuo-ci-container {
    flex-direction: column; 
    padding: 15px;
    gap: 20px;
  }
}
</style>