<template>
  <div class="liu-bian-container">
    <div class="video-section">
      <h3>刘辩相关视频</h3>
      <video 
        class="local-video-player"
        controls 
        autoplay 
        muted 
        loop
      >
        <source src="../assets/video/Liu.mp4" type="video/mp4">
        抱歉，您的浏览器不支持 HTML5 视频播放。
      </video>

      <p class="video-tip"></p>
    </div>

    <div class="introduction-section">
      <h2>📜 代号鸢 | 刘辩</h2>
      <p class="alias">
        —— "吾名刘辩，字不群。世人皆说吾是弱者，可他们忘了，吾名唤作——帝王之子。"
      </p>
      <h3>角色基本信息</h3>
      <ul>
        <li>身份：东汉少帝、主线重要角色</li>
        <li>代号/外号：少帝、不群</li>
      </ul>
      <h3>角色介绍与魅力</h3>
      <p>
        刘辩是代号鸢中一位命运多舛、层次丰富的角色。他承载着东汉少帝的身份，却在权臣董卓的阴影下生活，表面上是任人摆布的傀儡，实则内心蕴藏着不屈的帝王之气与深沉的谋略。
      </p>
      <p>
        他的故事线充满了政治斗争的紧张感和细腻的情感纠葛。玩家（密探）与刘辩的互动，不仅是君臣之间的相互利用和扶持，更是在乱世中诞生的、复杂而深刻的羁绊。角色的魅力在于其少年帝王的脆弱、隐忍与在绝境中寻求复辟的坚韧。
      </p>
      
      <blockquote>
        玩家评价：他是乱世中被推向风口浪尖的少年，值得最好的结局。他的每一个眼神都带着隐忍和渴望。
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HandsomeL'
  // 可以在这里添加 Vue 的 data, methods, computed 等逻辑
}
</script>

<style scoped>
.liu-bian-container {
    position: relative;
    width: 100vw; /* 使用视口宽度 */
    height: 100vh; /* 使用视口高度 */
    min-height: 100vh; /* 确保最小高度也是满屏 */
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.liu-bian-container::before {
    content: "";
    position: fixed; /* 改为 fixed 确保滚动时背景固定 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    /* 背景图片设置 */
    background-image: url('../assets/background/BG1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; /* 关键：cover会拉伸图片以填满容器 */
    background-attachment: fixed; /* 固定背景，滚动时不动 */
    
    /* 可选的滤镜效果 */
    /* filter: brightness(1.1) contrast(1.05); */
    
    opacity: 0.8;
    z-index: -1;
}

/* 容器样式：使用 Flexbox 实现左右布局 */
.liu-bian-container {
  display: flex; 
  padding: 30px 20px;
  gap: 30px; 
  max-width: 1200px; 
  margin: 0 auto; 
  font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.7;
}

/* 左右两栏平均分配宽度，并添加背景和阴影 */
.video-section,
.introduction-section {
  flex: 1; 
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); 
}

/* 左侧视频区域样式 */
.video-section {
  background-color: rgba(234, 221, 226, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h3 {
    color: #a0496d;
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

/* 右侧介绍区域样式 */
.introduction-section {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
	opacity: 0.9;
}

.introduction-section h2 {
  color: #a54a6f; /* 采用偏红紫的主题色，符合帝王感 */
  border-bottom: 3px solid #a54a6f;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.8em;
}

.introduction-section h3 {
  color: #885e7a;
  margin-top: 25px;
  border-left: 4px solid #a54a6f;
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
  list-style-type: '👑 '; /* 使用皇冠符号作为列表项目符号 */
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

ul li b {
    color: #444;
}

blockquote {
    margin: 20px 0;
    padding: 15px;
    border-left: 5px solid #a54a6f;
    background-color: #fff0f5; /* 浅粉色背景 */
    color: #555;
    font-size: 0.95em;
    border-radius: 4px;
}

/* 媒体查询：适应较小屏幕（手机）改为上下堆叠 */
@media (max-width: 768px) {
  .liu-bian-container {
    flex-direction: column; 
    padding: 15px;
    gap: 20px;
  }
}
</style>