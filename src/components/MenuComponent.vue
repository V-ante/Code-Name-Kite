
<template>
  <div class="line"></div>
    <el-menu 
	:default-active="activeIndex2"
      class="el-menu-demo gradient-menu"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><router-link to="/">主页</router-link></el-menu-item>

      <el-sub-menu index="2">
        <template #title><router-link to="/about">男主简介</router-link></template>
        <el-menu-item index="2-1"><router-link to="/Liu">刘辩</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/Fu">傅融</router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/Yuan">袁基</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/Sun">孙策</router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/Zuo">左慈</router-link></el-menu-item>
      </el-sub-menu>

      <el-menu-item index="3"><router-link to="/Mi">密探</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/my">主线故事</router-link></el-menu-item>
      <el-menu-item index="5"><img src="../assets/icon.png" class="menu-icon" alt="看板郎"></el-menu-item>
    </el-menu>
<router-view></router-view>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>

<style>
.line{
	margin:-7px;
	width:100%;
}
/* 让 router-link 被访问后变色 */
.el-menu-item a:visited,
.el-sub-menu__title a:visited {
	color: #c7a2ff !important;   /* 你想要的“访问后颜色” */
}

/* 避免 active 状态被覆盖 */
.el-menu-item.is-active a,
.el-sub-menu__title.is-active a {
	color: #ffd04b !important;   /* 保留 Element-UI 菜单激活色 */
}
.gradient-menu {
  background: linear-gradient(90deg, #755b84, #4a3e56);
  border-bottom: none; /* 可选：去掉菜单下方的下划线 */
}
.menu-icon {
  width: 55px;
  height: 40px;
}

</style>
