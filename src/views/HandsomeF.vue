<template>
  <div class="fu-rong-container">
    <div class="video-section">
      <h3>傅融相关视频</h3>
      <video 
        class="local-video-player"
        controls 
        autoplay 
        muted 
        loop
      >
        <source src="../assets/video/FuRong.mp4" type="video/mp4">
        抱歉，您的浏览器不支持 HTML5 视频播放。
      </video>

      <p class="video-tip"></p>
    </div>

    <div class="introduction-section">
      <h2>💸 代号鸢 | 傅融</h2>
      <p class="alias">
        —— "少府傅融，职掌天下财赋。欠的债，总是要还的。"
      </p>
      <h3>角色基本信息</h3>
      <ul>
        <li>身份：绣衣楼副官、主线可攻略角色</li>
        <li>代号/外号：财迷、二牛</li>
      </ul>
      <h3>角色介绍与魅力</h3>
      <p>
        傅融是代号鸢中一位性格冷静、精于算计的少府。他以“天下财赋”为己任，性格略显寡言、务实，将利益和数字看得极重。在与密探的互动中，他展现出外冷内热的反差魅力，尤其是在处理钱财和情感问题时的纠结，深受玩家喜爱。
      </p>
      <p>
        他的故事线围绕着权钱交易、家族秘密以及在乱世中如何平衡职责与个人情感展开。傅融的魅力在于他强大的业务能力、独特的金钱观以及在冰冷外表下偶尔流露出的温柔和依赖。
      </p>
      
      <blockquote>
        玩家评价：不善言辞却默默付出，傅鸽子的每一次真情流露都直击人心！他值得我们用金钱砸出一条幸福大道！
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FuRong'
}
</script>

<style scoped>
/* 使用与刘辩不同的主题色和背景 */

/* 容器的满屏背景 (使用伪元素实现透明度) */
.fu-rong-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 100vh; 
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.fu-rong-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    /* 背景图片设置 (请替换为傅融专属背景) */
    background-image: url('../assets/background/BG2.jpg'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; 
    background-attachment: fixed; 
    
    opacity: 0.8; /* 透明度 20% */
    z-index: -1;
}

/* 容器样式：使用 Flexbox 实现左右布局 */
.fu-rong-container {
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

/* 左侧视频区域样式 - 主题色：金/蓝绿 */
.video-section {
  background-color: rgba(230, 245, 230, 0.9); /* 浅绿/白，高不透明度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h3 {
    color: #38761d;
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

/* 右侧介绍区域样式 - 主题色：金/蓝绿 */
.introduction-section {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #d9d9d9;
}

.introduction-section h2 {
  color: #38761d; /* 深绿/金主题色 */
  border-bottom: 3px solid #38761d;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.8em;
}

.introduction-section h3 {
  color: #6aa84f;
  margin-top: 25px;
  border-left: 4px solid #38761d;
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
  list-style-type: '💰 '; /* 使用金钱符号 */
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

blockquote {
    margin: 20px 0;
    padding: 15px;
    border-left: 5px solid #38761d;
    background-color: #f6fff2; /* 浅绿背景 */
    color: #555;
    font-size: 0.95em;
    border-radius: 4px;
}

/* 媒体查询：适应较小屏幕 */
@media (max-width: 768px) {
  .fu-rong-container {
    flex-direction: column; 
    padding: 15px;
    gap: 20px;
  }
}
</style>