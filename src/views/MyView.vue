<template>
	<el-main class="video-footer">
		<div class="footer-content-center">
			<h3 class="pv-title">代号鸢周年庆PV</h3>
			<video controls autoplay muted loop class="footer-video">
				<source src="../assets/intro_video.mp4" type="video/mp4">
				您的浏览器不支持 video 标签。
			</video>
			
			<div class="main-story-content">
				<h1 class="story-title"><img src="../assets/logo2.jpg" style="width:170px;">【绣衣校尉】主线剧情回顾</h1>
				<p class="story-subtitle">在乱世中，以鸢之名，探寻真相，守护所爱。</p>

				<div class="chapter-grid">
					<div v-for="chapter in chapterList" :key="chapter.id" class="chapter-card-wrapper">
						<div class="chapter-card" 
							@mouseenter="chapter.isHovered = true" 
							@mouseleave="chapter.isHovered = false"
							:class="{ 'is-hovered': chapter.isHovered }">
							
							<div class="image-overlay-container">
								<img :src="chapter.image" :alt="chapter.title" class="chapter-image">
								<div class="image-blend-mask"></div>
							</div>

							<div class="chapter-intro">
								<h3>第 {{ chapter.id }} 章：{{ chapter.title }}</h3>
								<p>{{ chapter.intro }}</p>
							</div>

							<transition name="fade">
								<div v-if="chapter.isHovered" class="detail-overlay">
									<h4>{{ chapter.title }}</h4>
									<p>{{ chapter.detailPlot }}</p>
									<span class="view-details-btn">点击了解详情 ></span>
								</div>
							</transition>
						</div>
					</div>
				</div>
			</div>
		</div>
	</el-main>
</template>

<script>
export default {
	name: 'VideoFooter',
	data() {
        return {
            chapterList: [
                {
                    id: 1,
                    title: '东汉末年：初遇与潜伏',
                    image: 'https://placehold.co/400x400/8d887a/ffffff?text=Chapter+1',
                    intro: '以绣衣校尉之身，潜入洛阳，开启乱世中的谍战生涯。',
                    detailPlot: '玩家初入游戏，被董卓势力挟持，幸得神秘人相助脱险。在京城建立情报网，与各方势力周旋，危机四伏。',
                    isHovered: false
                },
                {
                    id: 2,
                    title: '青州之围：命运的交织',
                    image: 'https://placehold.co/400x400/9e9285/ffffff?text=Chapter+2',
                    intro: '青州战火燃起，与刘、傅、袁等男主首次深度接触，各为其主，亦敌亦友。',
                    detailPlot: '在青州城外，玩家面临抉择，是忠于任务还是听从内心？与男主们的关系在此刻发生微妙变化，故事线开始分岔。',
                    isHovered: false
                },
                {
                    id: 3,
                    title: '长安血案：真相与背叛',
                    image: 'https://placehold.co/400x400/ae9d8f/ffffff?text=Chapter+3',
                    intro: '一桩突如其来的血案，揭示了潜伏在幕后的巨大阴谋。',
                    detailPlot: '玩家被卷入长安的权力斗争中心，发现了关于自己身世的秘密，被迫面对友人的背叛和难以承受的真相，每一步都如履薄冰。',
                    isHovered: false
                },
                {
                    id: 4,
                    title: '江东风云：抉择与牺牲',
                    image: 'https://placehold.co/400x400/bfa89a/ffffff?text=Chapter+4',
                    intro: '转战江东，孙策、周瑜的出现，为故事注入新的变数。',
                    detailPlot: '为了达成目的，玩家必须做出艰难的牺牲。江东的阳光下，隐藏着比中原更深沉的秘密和挑战。',
                    isHovered: false
                }
            ],
        }
    },
    methods: {
        // 确保 Vue 指令能找到这个方法，即使它目前是空的
        // handleSelect(key, keyPath) { console.log(key, keyPath) }, 
    },
}
</script>

<style scoped>
/* ========================================================= */
/* 视频区域基础样式 (已存在部分) */
/* ========================================================= */
.video-footer {
	/* 保持原样，但增加高度适应主线内容 */
	height: auto !important; 
	min-height: 700px;
	padding: 0;
	margin: 50px;
	/* Flexbox 居中布局 */
	display: flex;
	justify-content: center;
	align-items: center;
	/* 建议添加背景色，如果背景默认为白色，可省略 */
	background-color: #fcf7f4; /* 使用更柔和的背景色，与章节卡片配合 */
	flex-direction: column; /* 确保内容是垂直堆叠的 */
}

.footer-content-center {
	display: flex;
	flex-direction: column; /* 垂直堆叠 */
	align-items: center;
	width: 90%; /* 放大内容区域宽度 */
	max-width: 1100px; /* 增大最大宽度 */
}

.pv-title {
	margin-bottom: 25px;
	font-size: 1.8em;
	font-weight: bold;
	/* 字体颜色改为深色，适应白色背景 */
	color: #703800;
	letter-spacing: 2px;
}

.footer-video {
	width: 100%; /* 占满内容区域宽度 (已放大) */
	max-height: 600px; /* 限制最大高度 */
	border-radius: 10px;
	/* 阴影改为深色，适应浅色背景 */
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 80px; /* 视频下方增加间距 */
}

/* 移除旧的 Footer 布局样式，确保它们不干扰新的中央布局 */
.footer-layout, .footer-col, .info-col, .video-col {
	display: none !important;
}

/* ========================================================= */
/* 主线剧情区域样式 (新增部分) */
/* ========================================================= */
.main-story-content {
    width: 100%; /* 占满 footer-content-center 的宽度 */
    padding: 20px 0;
    text-align: center;
}

.story-title {
    font-size: 2.5em;
    color: #4b4840;
    margin-bottom: 10px;
    border-bottom: 3px solid #666356;
    display: inline-block;
    padding-bottom: 5px;
}

.story-subtitle {
    color: #8d8a7a;
    font-size: 1.2em;
    margin-bottom: 50px;
}

/* 章节网格布局 */
.chapter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    padding-bottom: 50px; /* 底部留白 */
}

/* 章节卡片容器 */
.chapter-card-wrapper {
    perspective: 1000px;
}

.chapter-card {
    position: relative;
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s;
    height: 450px; /* 固定高度 */
    cursor: pointer;
    transform-style: preserve-3d;
}

/* 悬停效果：卡片抬升和轻微 3D 旋转 */
.chapter-card.is-hovered {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* 图片和渐变融合容器 */
.image-overlay-container {
    position: relative;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s;
}

.chapter-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 渐变融合/擦拭起雾的玻璃效果 */
.image-blend-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 径向渐变：中心透明，边缘渐变成卡片背景色 */
    background: radial-gradient(circle at center, transparent 40%, #ffffff 80%); 
    z-index: 1;
    opacity: 1;
    transition: opacity 0.5s;
}

/* 悬停时，图片容器透明度降低，让详情更突出 */
.chapter-card.is-hovered .image-overlay-container {
    opacity: 0.2;
}

.chapter-intro {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 2;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent);
    text-align: left;
}

.chapter-intro h3 {
    margin: 0 0 5px 0;
    color: #666356;
    font-size: 1.2em;
}

.chapter-intro p {
    margin: 0;
    color: #8d8a7a;
    font-size: 0.9em;
}

/* 详细剧情解释覆盖层 */
.detail-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 95%;
    height: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.detail-overlay h4 {
    color: #4b4840;
    font-size: 1.4em;
    margin-bottom: 20px;
}

.detail-overlay p {
    color: #333;
    line-height: 1.8;
    font-size: 1em;
    /* 限制文字区域，防止溢出 */
    max-height: 70%; 
    overflow-y: auto;
}

.view-details-btn {
    margin-top: 20px;
    color: #b58b5b;
    font-weight: bold;
    text-decoration: underline;
}

/* 悬停过渡效果 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>