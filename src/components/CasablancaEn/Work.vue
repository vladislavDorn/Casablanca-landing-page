<template>
	<section class="work container">
		<div class="work__head">
			<h2 class="work__head_title section-title">Some of our work</h2>
		</div>
		<ul class="work__filter_nav">
			<li class="work__filter_nav__item" @click="selected = 1" :class="{'work__filter_nav__item_active':selected == 1}">All</li>
			<li class="work__filter_nav__item" @click="selected = 2" :class="{'work__filter_nav__item_active':selected == 2}">Branding</li>
			<li class="work__filter_nav__item" @click="selected = 3" :class="{'work__filter_nav__item_active':selected == 3}">Web design</li>
			<li class="work__filter_nav__item" @click="selected = 4" :class="{'work__filter_nav__item_active':selected == 4}">Mobile UI</li>
			<li class="work__filter_nav__item" @click="selected = 5" :class="{'work__filter_nav__item_active':selected == 5}">Illustrations</li>
		</ul>
		<div class="work__filter_list">
			<div class="work__filter_item" v-for="filterItem in filterItems">
				<div class="work__filter_item__image_block"><img :src="filterItem.image" alt="Filter Image" class="work__filter_item__image"></div>
				<div class="work__filter_item__overlay_block">
					<h3 class="work__filter_item__overlay_title">{{ filterItem.title }}</h3>
					<p class="work__filter_item__overlay_text">{{ filterItem.text }}</p>
				</div>
			</div>
			<button href="#" class="work__filter_list__button">Show me more</button>
		</div>
	</section>
</template>

<script>
	export default {	
		data() {
			return {
				selected: undefined,
				filterItems: [
					{
						image: 'static/filter-1.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					},
					{
						image: 'static/filter-2.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					},
					{
						image: 'static/filter-3.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					},
					{
						image: 'static/filter-4.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					},
					{
						image: 'static/filter-5.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					},
					{
						image: 'static/filter-6.png',
						title: 'Mobile UI',
						text: 'Google Mail'
					}
				]
			}
		}
	}
</script>