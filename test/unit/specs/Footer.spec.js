import { mount } from '@vue/test-utils'
import Footer from '@/components/CasablancaEn/Footer.vue'

describe('Footer', () => {
  it('sets value img', () => {
    const image = 'static/footer-image.png'
    const wrapper = mount(Footer)
    console.log(wrapper.html())
    expect(wrapper.find('.footer__image').attributes('src')).toBe(image)
  })
})

describe('Footer', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toContain('<span class="footer__info_orange">Samir Timezguida</span>')
  })
})
