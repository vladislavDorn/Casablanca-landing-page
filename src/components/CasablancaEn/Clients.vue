<template>
	<section class="clients">
		<div class="container">
			<div class="clients__head">
				<h2 class="clients__title section-title">Our Clients</h2>
			</div>
			<div class="clients__list">
				<div class="clients__item" v-for="clientsItem in clientsItems">
					<img :src="clientsItem.image" class="clients__item_image" alt="Clients">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				clientsItems: [
					{
						image: 'static/clients-1.png'
					},
					{
						image: 'static/clients-2.png'
					},
					{
						image: 'static/clients-3.png'
					},
					{
						image: 'static/clients-4.png'
					},
					{
						image: 'static/clients-5.png'
					}
				]
			}
		}
	}
</script>