<template>
	<section class="choose container">
		<div class="choose__head">
			<h2 class="choose__title section-title">Why choose us</h2>
			<p class="choose__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
		</div>
		<carousel class="choose__list" :perPageCustom="[[1170, 3],[860,2],[560, 1]]" :loop="true">
			<slide class="choose__slide" v-for="slide in slides">
				<div class="choose__slide_img_wrapper">
					<span :class="slide.sprite" ></span>
				</div>
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
						sprite: 'choose__slide_sprite choose__slide_sprite_iphone',
						title: 'App Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						sprite: 'choose__slide_sprite choose__slide_sprite_ipad',
						title: 'Responsive Layout',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						sprite: 'choose__slide_sprite choose__slide_sprite_macbook',
						title: 'Pixel Perfect Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						sprite: 'choose__slide_sprite choose__slide_sprite_iphone',
						title: 'App Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						sprite: 'choose__slide_sprite choose__slide_sprite_ipad',
						title: 'Responsive Layout', 
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					},
					{
						sprite: 'choose__slide_sprite choose__slide_sprite_macbook',
						title: 'Pixel Perfect Design',
						info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ilabore et dolore.'
					}
				]
			}
		}
	}
</script>