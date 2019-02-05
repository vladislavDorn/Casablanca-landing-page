<template>
	<transition name="modal">
    <div class="modal-mask">
    	<iframe class="modal__video" src="https://www.youtube.com/embed/bQ-sL6MQvV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="modal-off" @click="$emit('close')">
      	<span class="modal-off__item"></span>
      	<span class="modal-off__item"></span>
      </div>
    </div>
  </transition>
</template>