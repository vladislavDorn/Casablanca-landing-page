<template>
	<section class="choose container">
		<div class="choose__head">
			<h2 class="choose__title section-title">Why choose us</h2>
			<p class="choose__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
		</div>
		<carousel class="choose__list" :perPageCustom="[[1170, 3],[860,2],[560, 1]]" :loop="true">
			<slide class="choose__slide" v-for="slide in slides">
				<img src="@/assets/choose-image-slider-1.png" alt="" class="choose__slide_img">
				<div class="choose__slide_description">
					<h3 class="choose__slide_title">{{ slide.title }}</h3>
					<p class="choose__slide_info">{{ slide.info }}</p>
				</div>
			</slide>
		</carousel>	
	</section>
</template>

<script>
	export default {
		data() {
			return {
				slides: [
					{
						image: '@/assets/choose-image-slider-1.png',
						title: 'App Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						image: '@/assets/choose-image-slider-2.png',
						title: 'Responsive Layout',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						image: '@/assets/choose-image-slider-3.png',
						title: 'Pixel Perfect Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						image: '@/assets/choose-image-slider-1.png',
						title: 'App Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						image: '@/assets/choose-image-slider-2.png',
						title: 'Responsive Layout', 
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						image: '@/assets/choose-image-slider-3.png',
						title: 'Pixel Perfect Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
				]
			}
		}
	}
</script>