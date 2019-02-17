<template>
	<header class="header">
		<div class="header__navbar" @click="show = !show">
			<span :class="navbarItem.item" v-for="(navbarItem, index) in navbarItems" :key="index"></span>
		</div>
		<ul class="header__nav" v-if="show">
			<li class="header__nav_item"><a href="#" class="header__nav_link">Home</a></li>
			<li class="header__nav_item"><a href="#" class="header__nav_link">Work</a></li>
			<li class="header__nav_item"><a href="#" class="header__nav_link">About</a></li>
			<li class="header__nav_item"><a href="#" class="header__nav_link">Services</a></li>
			<li class="header__nav_item"><a href="#" class="header__nav_link">Clients</a></li>
			<li class="header__nav_item"><a href="#" class="header__nav_link">Contact</a></li>
		</ul>
	</header>	
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				navbarItems: [
					{
						item: 'header__navbar_item',
					},
					{
						item: 'header__navbar_item',
					},
					{
						item: 'header__navbar_item',
					},
				]
			}
		}
	}
</script>