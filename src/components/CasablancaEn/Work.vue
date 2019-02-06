<template>
	<section class="work container">
		<div class="work__head">
			<h2 class="work__head_title section-title">Some of our work</h2>
		</div>
		<ul class="work__filter_nav">
			<li class="work__filter_nav__item" @click="selected = 1, filter('all')" :class="{'work__filter_nav__item_active':selected == 1}">All</li>
			<li class="work__filter_nav__item" @click="selected = 2, filter('branding')" :class="{'work__filter_nav__item_active':selected == 2}">Branding</li>
			<li class="work__filter_nav__item" @click="selected = 3, filter('web-design')" :class="{'work__filter_nav__item_active':selected == 3}">Web design</li>
			<li class="work__filter_nav__item" @click="selected = 4, filter('mobile')" :class="{'work__filter_nav__item_active':selected == 4}">Mobile UI</li>
			<li class="work__filter_nav__item" @click="selected = 5, filter('Illustrations')" :class="{'work__filter_nav__item_active':selected == 5}">Illustrations</li>
		</ul>
		<div class="work__filter_list">
			<div class="work__filter_item" v-for="item in filteredItems" :key="item.id">
				<div class="work__filter_item__image_block"><img :src="item.image" alt="Filter Image" class="work__filter_item__image"></div>
				<div class="work__filter_item__overlay_block">
					<h3 class="work__filter_item__overlay_title">{{ item.title }}</h3>
					<p class="work__filter_item__overlay_text">{{ item.text }}</p>
				</div>
			</div>
		</div>
		<button class="work__filter_list__button">Show me more</button>
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
						text: 'Google Mail',
						tag: ['all', 'branding', 'web-design', 'Illustrations'],
						id: 1
					},
					{
						image: 'static/filter-2.png',
						title: 'Mobile UI',
						text: 'Google Mail',
						tag: ['all', 'Illustrations'],
						id: 2
					},
					{
						image: 'static/filter-3.png',
						title: 'Mobile UI',
						text: 'Google Mail',
						tag: ['all', 'mobile', 'branding'],
						id: 3
					},
					{
						image: 'static/filter-4.png',
						title: 'Mobile UI',
						text: 'Google Mail',
						tag: ['all', 'web-design', 'Illustrations'],
						id: 4
					},
					{
						image: 'static/filter-5.png',
						title: 'Mobile UI',
						text: 'Google Mail',
						tag: ['all', 'mobile', 'web-design'],
						id: 5
					},
					{
						image: 'static/filter-6.png',
						title: 'Mobile UI',
						text: 'Google Mail',
						tag: ['all', 'mobile', 'branding', 'Illustrations'],
						id: 6
					}
					],
					currentTag: 'all'
				}
			},
			computed: {
				filteredItems: function() {
					var filter = this.currentTag;
					return this.filterItems.filter(function(item) {
						return item.tag.indexOf(filter) !== -1;
					});
				}
			},
			methods: {
				shuffle: function () {
					this.filterItems = _.shuffle(this.filterItems)
				},
				filter: function(tag) {
					this.currentTag = tag;
				}
			}
		}
	</script>