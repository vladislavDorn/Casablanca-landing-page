import { shallowMount } from '@vue/test-utils'
import About from '@/components/CasablancaEn/About.vue'

describe('About', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '']
    const wrapper = shallowMount(About, {
      propsData: { items }
    })
    if (items.length === 3) {
      expect(wrapper.findAll('.about__item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
