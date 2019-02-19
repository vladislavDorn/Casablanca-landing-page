import { mount, shallowMount } from '@vue/test-utils'
import Clients from '@/components/CasablancaEn/Clients.vue'

describe('Clients', () => {
  it('renders the correct title', () => {
    const wrapper = mount(Clients)
    expect(wrapper.find('.clients__title').text()).toBe('Our Clients')
  })
})

describe('Clients', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '', '', '']
    const wrapper = shallowMount(Clients, {
      propsData: { items }
    })
    if (items.length === 5) {
      expect(wrapper.findAll('.clients__item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
