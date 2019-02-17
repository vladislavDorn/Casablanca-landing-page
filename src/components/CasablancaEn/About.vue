<template>
	<section class="about container" >
		<div class="about__head">
			<h2 class="about__title section-title">About Us</h2>
			<p class="about__head_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
		</div>
		<div class="about__list">
			<div class="about__item" v-for="(aboutItem, index) in aboutItems" :key="index">
				<img :src="aboutItem.image" alt="Employees">
				<div class="about__item_overlay">
					<div class="about__item_overlay__link"><span class="about__item_overlay__key_icon"></span></div>
					<div class="about__item_overlay__decription">
						<h3 class="about__item_overlay__title">{{ aboutItem.title }}</h3>
						<p class="about__item_overlay__info">{{ aboutItem.description }}</p>
					</div>
				</div>
			</div>
			<div class="about__item_hiring">
				<h3 class="about__item_hiring__title">We are hiring</h3>
				<a href="#" class="about__item_hiring__link">Apply</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				aboutItems: [
					{
						image: 'static/about-1.jpg',
						title: 'John',
						description: 'CEO/Founder'
					},
					{
						image: 'static/about-2.jpg',
						title: 'Ella',
						description: 'Service Director'
					},
					{
						image: 'static/about-3.jpg',
						title: 'Nora',
						description: 'Web-Design'
					}
				]
			}
		}
	}
</script>