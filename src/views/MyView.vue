<template>
	<el-main class="video-footer">
		<div class="footer-content-center">
			<h3 class="pv-title">代号鸢周年庆PV</h3>
			<video controls autoplay muted loop class="footer-video">
				<source src="../assets/intro_video.mp4" type="video/mp4">
				您的浏览器不支持 video 标签。
			</video>
			
			<div class="main-story-content">
				<h1 class="story-title">
					<img src="../assets/logo2.jpg" style="width:170px;">
					【绣衣校尉】主线剧情回顾
				</h1>
				<p class="story-subtitle">在乱世中，以鸢之名，探寻真相，守护所爱。</p>

				<div class="chapter-grid">
					<div v-for="chapter in chapterList" :key="chapter.id" class="chapter-card-wrapper">
						
						<!-- 卡片 -->
						<div
							class="chapter-card"
							@mouseenter="chapter.isHovered = true"
							@mouseleave="chapter.isHovered = false"
							:class="{ 'is-hovered': chapter.isHovered }">

							<!-- ============================ -->
							<!-- 第6卡片：简单卡片 ONLY 显示按钮 -->
							<!-- ============================ -->
							<div v-if="chapter.isSimpleCard" class="simple-detail-card">
								<a 
									class="simple-detail-btn" 
									href="https://ashesofthekingdom.qookkagames.com/#/pc" 
									target="_blank"
								>
									点击了解详情 >
								</a>
							</div>

							<!-- ============================ -->
							<!-- 第1-5卡片：原样保留 -->
							<!-- ============================ -->
							<div v-else>
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
										<a 
											class="view-details-btn"
											href="https://ashesofthekingdom.qookkagames.com/#/pc"
											target="_blank"
										>
											点击了解详情 >
										</a>
									</div>
								</transition>
							</div>
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
					title: '风气荷影',
					image: require('../assets/chapter/chapter1.jpg'),
					intro: '并州牧董卓以假玉玺逼迫刘辩封自己为司空。',
					detailPlot: '奉少帝刘辩旨意，绣衣校尉广陵王携女官阿蝉、副官傅融寻传国玉玺，未果。',
					isHovered: false
				},
				{
					id: 2,
					title: '烈火入喉',
					image: require('../assets/chapter/chapter2.jpg'),
					intro: '刘辩饮鸩退位，广陵王被逼进宫，被污弑君罪名，邃出逃。',
					detailPlot: '受郭嘉秘密指示，越骑校尉伍学刺董，未逐，刘辩命广陵王保下伍孚族人，成功。',
					isHovered: false
				},
				{
					id: 3,
					title: '鵩鸟承尘',
					image: require('../assets/chapter/chapter3.jpg'),
					intro: '广陵王出逃途中“偶遇”太仆袁基，与其同乘出宫。',
					detailPlot: '因郭嘉出卖，绣衣楼本营据点被焚毁，绣衣楼众部由雒阳撤回广陵，途中傅融坠崖。',
					isHovered: false
				},
				{
					id: 4,
					title: '东郡太守',
					image: require('../assets/chapter/chapter4.jpg'),
					intro: '回到广陵，师算左慈告知里八华家主已在绣衣楼。',
					detailPlot: '东郡太守曹操告知江东孙坚寻得传国玉玺，广陵王欲启程往江东，寻找玉玺。',
					isHovered: false
				},
				{
					id: 5,
					title: '南有乔木',
					image: require('../assets/chapter/chapter5.jpg'),
					intro: '启程回广陵前得知袁氏将被灭族，于是转途长安，救袁基。',
					detailPlot: '广陵王借大乔身份初见孙氏少主孙策，感受江东热情民风，但未寻得玉玺，逐跑路。',
					isHovered: false
				},

				/* ===================================================== */
				/* 第6章：特殊卡片（样式不同，仅显示“点击了解详情”） */
				/* ===================================================== */
				{
					id: 6,
					title: '更多剧情',
					image: '',
					intro: '',
					detailPlot: '',
					isHovered: false,
					isSimpleCard: true   // 标识这是特别卡片
				}
			],
		}
	},
}
</script>

<style scoped>
/* ========================================================= */
/* 视频区域基础样式 */
/* ========================================================= */
.video-footer {
	height: auto !important;
	min-height: 700px;
	padding: 0;
	margin: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fcf7f4;
	flex-direction: column;
}

.footer-content-center {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	max-width: 1100px;
}

.pv-title {
	margin-bottom: 25px;
	font-size: 1.8em;
	font-weight: bold;
	color: #703800;
	letter-spacing: 2px;
}

.footer-video {
	width: 100%;
	max-height: 600px;
	border-radius: 10px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	margin-bottom: 80px;
}

/* 去掉旧 footer */
.footer-layout, .footer-col, .info-col, .video-col {
	display: none !important;
}

/* ========================================================= */
/* 主线剧情区域样式 */
/* ========================================================= */
.main-story-content {
	width: 100%;
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

/* 网格布局 */
.chapter-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 40px;
	padding-bottom: 50px;
}

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
	height: 450px;
	cursor: pointer;
	transform-style: preserve-3d;
}

/* hover */
.chapter-card.is-hovered {
	transform: translateY(-15px) scale(1.03);
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* ============================ */
/* 普通卡片图片层 */
/* ============================ */
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

.image-blend-mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle at center, transparent 40%, #ffffff 80%);
	z-index: 1;
	opacity: 1;
	transition: opacity 0.5s;
}

.chapter-card.is-hovered .image-overlay-container {
	opacity: 0.2;
}

/* 文本介绍 */
.chapter-intro {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 30px 25px 25px;
	z-index: 2;
	background: linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent);
	text-align: left;
}

.chapter-intro h3 {
	margin: 0 0 5px;
	color: #666356;
	font-size: 1.2em;
}

.chapter-intro p {
	margin: 0;
	color: #8d8a7a;
	font-size: 0.9em;
}

/* ============================ */
/* 普通 hover 覆盖层 */
/* ============================ */
.detail-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 98%;
	height: 100%;
	padding: 0px;
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
	max-height: 70%;
	overflow-y: auto;
}

.view-details-btn {
	margin-top: 20px;
	color: #b58b5b;
	font-weight: bold;
	text-decoration: underline;
}

/* ============================ */
/* 第6卡片样式 */
/* ============================ */
.simple-detail-card {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255,255,255,0.95);
}

.simple-detail-btn {
	font-size: 1.4em;
	color: #b58b5b;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}
.simple-detail-btn,
.view-details-btn {
	color: #b58b5b;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}

.simple-detail-btn:hover,
.view-details-btn:hover {
	opacity: 0.8;
}
/* 动画 */
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
	opacity: 0;
}
</style>
