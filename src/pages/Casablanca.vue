<template>
	<div>
		<app-header></app-header>
		<promo></promo>  
		<introduction></introduction>
		<creativity></creativity>
		<work></work>
		<help></help>
		<clients></clients>
		<about></about>
		<video-block></video-block>
		<choose></choose>
		<quote></quote>
		<getintouch></getintouch>
		<contact></contact>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from '../components/CasablancaEn/Header.vue'
import Promo from '../components/CasablancaEn/Promo.vue'
import Introduction from '../components/CasablancaEn/Introduction.vue'
import Creativity from '../components/CasablancaEn/Creativity.vue'
import Work from '../components/CasablancaEn/Work.vue'
import Help from '../components/CasablancaEn/Help.vue'
import Clients from '../components/CasablancaEn/Clients.vue'
import About from '../components/CasablancaEn/About.vue'
import Video from '../components/CasablancaEn/Video.vue'
import Choose from '../components/CasablancaEn/Choose.vue'
import Quote from '../components/CasablancaEn/Quote.vue'
import GetInTouch from '../components/CasablancaEn/GetInTouch.vue'
import Contact from '../components/CasablancaEn/Contact.vue'
import Footer from '../components/CasablancaEn/Footer.vue'

export default {
  components: {
    'app-header': Header,
    Promo,
    Introduction,
    Creativity,
    Work,
    Help,
    Clients,
    About,
    'video-block': Video,
    Choose,
    Quote,
    'getintouch':GetInTouch,
    Contact,
    'app-footer': Footer
  }
}

</script>
