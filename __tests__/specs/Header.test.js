import { mount } from '@vue/test-utils'
import Header from './src/components/CasablancaEn/Header.vue'

describe('Header', () => {
  test('является экземпляром Vue', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})