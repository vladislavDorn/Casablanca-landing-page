import { shallowMount } from '@vue/test-utils'
import Choose from '@/components/CasablancaEn/Choose.vue'

describe('Choose', () => {
    it('renders item in props.items', () => {
      const slides = ['', '', '', '', '', '']
      const wrapper = shallowMount(Choose, {
        propsData: { slides }
      })
      if (slides.length === 6) {
        expect(wrapper.findAll('.choose__slide')).toHaveLength(slides.length)
      } else {
        console.log('test failed')
      }
    })
  })