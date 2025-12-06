<template>
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#666356"
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
  <el-menu-item index="3"><router-link to='/Mi'>密探</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to='/my'>主线故事</router-link></el-menu-item>
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
</style>
