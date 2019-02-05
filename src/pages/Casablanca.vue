<template>
	<div>
		<app-header></app-header>
		<promo></promo>  
		<app-footer></app-footer>
		<introduction></introduction>
		<creativity></creativity>
		<work></work>
		<help></help>
		<clients></clients>
	</div>
</template>

<script>
import Header from '../components/CasablancaEn/Header.vue'
import Promo from '../components/CasablancaEn/Promo.vue'
import Footer from '../components/CasablancaEn/Footer.vue'
import Introduction from '../components/CasablancaEn/Introduction.vue'
import Creativity from '../components/CasablancaEn/Creativity.vue'
import Work from '../components/CasablancaEn/Work.vue'
import Help from '../components/CasablancaEn/Help.vue'
import Clients from '../components/CasablancaEn/Clients.vue'

export default {
  components: {
    'app-header': Header,
    Promo,
    'app-footer': Footer,
    Introduction,
    Creativity,
    Work,
    Help,
    Clients
  }
}

</script>
