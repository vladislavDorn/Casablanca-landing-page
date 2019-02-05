<template>
	<div class="video">
		<span class="video__show_modal" @click="showModal = true"></span>
		<modal v-if="showModal" @close="showModal = false">
  </modal>
	</div>
</template>

<script>
	import ModalBox from './ModalBox.vue'
	export default {
		data() {
			return {
				showModal: false
			}
		},
		components: {
			'modal': ModalBox
		}
	}

</script>