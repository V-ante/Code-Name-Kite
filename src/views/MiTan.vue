<template>
    <div class="mi-tan-gallery-container">
        <h2><img src="../assets/logo1.jpg" style="width:50px;">️ 密探情报簿 | 乱世英豪</h2>

        <div class="mi-tan-row">
            <div v-for="miTan in miTanList" :key="miTan.name" class="mi-tan-card" :style="{ '--color': miTan.color }">
                <div class="header" :style="{ backgroundColor: miTan.color }">
                    {{ miTan.name }}
                </div>
                <div class="image-wrapper">
                    <img :src="miTan.imageSrc" :alt="miTan.name" class="mi-tan-image">
                </div>
                <p class="description">
                    {{ miTan.intro }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import zhangjiao from '../assets/mi-tan/zhangjiao.jpg';
import zhangmiao from '../assets/mi-tan/zhangmiao.jpg';
import zhouyu from '../assets/mi-tan/zhouyu.jpg';
import sunquan from '../assets/mi-tan/sunquan.jpg';
import zhenfu from '../assets/mi-tan/zhenfu.jpg';

export default {
    name: 'MiTanGallery',
    data() {
        return {
            // 2. 直接使用导入的变量作为图片源
            miTanList: [
                {
                    name: '张角',
                    color: '#b58b5b',
                    imageSrc: zhangjiao, // <-- 修改点
                    intro: '太平道首领，黄巾军之魂。以救世之名起兵，其法术和领导力令人敬畏。'
                },
                {
                    name: '张邈',
                    color: '#5e4359',
                    imageSrc: zhangmiao, // <-- 修改点
                    intro: '八俊之一，性格慷慨侠义。早期与曹操交好，后因故反目。'
                },
                {
                    name: '周瑜',
                    color: '#4f7c9e',
                    imageSrc: zhouyu, // <-- 修改点
                    intro: '江东大都督，风度翩翩，智勇双全。是孙策最信赖的知己与得力助手。'
                },
                {
                    name: '孙权',
                    color: '#659c65',
                    imageSrc: sunquan, // <-- 修改点
                    intro: '孙策之弟，年少即位，沉稳内敛。未来江东的统治者，心怀大局。'
                },
                {
                    name: '甄宓',
                    color: '#c292a1',
                    imageSrc: zhenfu, // <-- 修改点
                    intro: '绝世美女，才华横溢。其命运与袁氏、曹氏紧密相连，身陷乱世。'
                },
            ],
        };
    },
};
</script>

<style scoped>
/* 引入古风字体 */
@import url('https://fonts.net/css?family=Noto+Serif+SC:400,500,700&display=swap');
/* --- 整体容器和标题样式 --- */

.mi-tan-gallery-container {
    position: relative;
    width: 100vw;
    /* 移除 height: 100vh; 避免内容超出被裁剪，让内容自动撑开 */
    min-height: 100vh;
    margin: 0;
    padding: 50px 5%;
    box-sizing: border-box;
    overflow-x: hidden;
}

.mi-tan-gallery-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    /* 背景图片设置 */
    background-image: url('../assets/Back3.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    opacity: 0.75;
    z-index: -1;
}

h2 {
    font-family: 'Noto Serif SC', serif;
    text-align: center;
    color: #583e33;
    margin-bottom: 50px;
    font-size: 2.6em;
    border-bottom: 5px solid #583e33;
    padding-bottom: 12px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
}

/* --- FLEXBOX 布局实现单行五列 --- */
.mi-tan-row {
    display: flex;
    justify-content: center;
    gap: 50px; /* 卡片间隔变小 */
    flex-wrap: nowrap;
}

/* 密探卡片样式 (高级感优化) */
.mi-tan-card {
    width: 220px; /* 固定宽度 */
    flex-shrink: 0;

    /* 高级边框和阴影 */
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    /* 深度阴影 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s;
    background-color: #ffffff;
}

.mi-tan-card:hover {
    transform: translateY(-10px);
    /* 悬停时边框颜色高亮，阴影增强 */
    border: 1px solid var(--color);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35), 0 0 10px var(--color);
}

/* 头部 (密探名字) 样式 */
.header {
    padding: 10px 0;
    color: white;
    font-weight: 700;
    font-size: 1.3em;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    letter-spacing: 1px;
}

/* 图片区域：保持 9:16 比例 */
.image-wrapper {
    width: 100%;
    /* 关键：使用 padding-top 实现 9:16 比例 */
    padding-top: 177.77%;
    position: relative;
    overflow: hidden;
}

.mi-tan-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 介绍文字样式 */
.description {
    padding: 15px 15px;
    font-size: 0.9em;
    color: #555;
    line-height: 1.7;
    min-height: 110px; /* 增加最小高度 */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* --- 瀑布流/波浪效果的微调 --- */

/* 针对奇数位置的卡片（1, 3, 5）进行向下移动 */
.mi-tan-row .mi-tan-card:nth-child(2n + 1) {
    transform: translateY(10px);
}

/* 针对偶数位置的卡片（2, 4）进行向上移动 */
.mi-tan-row .mi-tan-card:nth-child(2n) {
    transform: translateY(-10px);
}

/* --- 媒体查询：适应较小屏幕 --- */
@media (max-width: 1200px) {
    .mi-tan-gallery-container {
        padding: 50px 20px; /* 减小侧边内边距 */
    }
    .mi-tan-row {
        flex-wrap: wrap; /* 允许换行 */
        justify-content: center; /* 居中显示 */
        gap: 100px; /* 换行后增加间距，避免太拥挤 */
    }
    .mi-tan-card {
        width: calc(33% - 20px); /* 1200px 以下切换为 3 列 */
        /* 换行后取消波浪效果 */
        transform: none !important;
    }
}

@media (max-width: 768px) {
    .mi-tan-card {
        width: calc(50% - 15px); /* 手机屏幕改为 2 列 */
    }
}

@media (max-width: 480px) {
    .mi-tan-card {
        width: 90%; /* 超小屏幕改为 1 列 */
    }
    .mi-tan-row {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
}
</style>