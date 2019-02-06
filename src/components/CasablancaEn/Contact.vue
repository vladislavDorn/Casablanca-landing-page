<template>
	<div class="contact">
		<div class="contact__list">
			<div class="contact__item_left">
					<h3 class="contact__item_left__title">Our Location</h3>
					<p class="contact__item_left__info">
174 Mimosa ST. NW
Casablanca, MA 20370
(212) 123 456 7
Samir Timezguida
					</p>
					<div class="contact__item_left__social">
						<a href="#" :class="socialSprite.spriteClass" v-for="(socialSprite, index) in socialSprites" :key="index"></a>
					</div>
			</div>
			<div class="contact__item_right">
				<form class="contact__item_right__form">
					<input class="contact__item_right__form__input_text" type="text" placeholder="Name">
					<input class="contact__item_right__form__input_text" type="email" placeholder="Email">
					<textarea class="contact__item_right__form__textarea" name="" placeholder="Message"></textarea>
					<input class="contact__item_right__form__submit" type="submit" value="Send">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				socialSprites: [
					{
						spriteClass: 'contact__item_left__sprite contact__item_left__sprite_twitter' 
					},
					{
						spriteClass: 'contact__item_left__sprite contact__item_left__sprite_facebook' 
					},
					{
						spriteClass: 'contact__item_left__sprite contact__item_left__sprite_linkedin' 
					},
					{
						spriteClass: 'contact__item_left__sprite contact__item_left__sprite_vine' 
					},
					{
						spriteClass: 'contact__item_left__sprite contact__item_left__sprite_be' 
					},
				]
			}
		}
	}
</script>