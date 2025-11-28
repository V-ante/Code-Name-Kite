<template>
  <div class="about-container">
    <el-container class="content-container">
      <el-header>Header</el-header>
      <el-main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {
  }
}
</script>

<style scoped>
/* 2. 最外层容器：设置相对定位，占满全屏 */
.about-container {
  position: relative;
  width: 100%;
  height: 100vh; /* 占满视口高度 */
  overflow: hidden; /* 防止背景溢出 */
}

/* 3. 使用伪元素创建背景图 */
.about-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* 设置背景图片 */
  background-image: url('../assets/group.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* 保证图片覆盖整个区域 */
  
  /* 4. 这里设置透明度 (0.8 = 80%) */
  opacity: 1;
  
  /* 确保背景在内容后面 */
  z-index: -1; 
}

.content-container {
  height: 100%; /* 让 Element 容器也占满高度 */
}

/* 可选：给 Header 和 Footer 加点颜色以便看清布局 */
.el-header, .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
}
</style>