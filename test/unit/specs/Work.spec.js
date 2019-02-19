import { mount, shallowMount } from '@vue/test-utils'
import Work from '@/components/CasablancaEn/Work.vue'

describe('Work', () => {
    it('renders item in props.items', () => {
      const items = ['', '', '', '', '']
      const wrapper = shallowMount(Work, {
        propsData: { items }
      })
      if (items.length === 5) {
        expect(wrapper.findAll('.work__filter_nav__item')).toHaveLength(items.length)
      } else {
        console.log('test failed')
      }
    })
  })
  
  describe('Work', () => {
    it('renders item in props.items', () => {
      const elements = ['', '', '', '', '', '']
      const wrapper = shallowMount(Work, {
        propsData: { elements }
      })
      if (elements.length === 6) {
        expect(wrapper.findAll('.work__filter_item')).toHaveLength(elements.length)
      } else {
        console.log('test failed')
      }
    })
  })

