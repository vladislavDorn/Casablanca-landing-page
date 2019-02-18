import Vue from 'vue'
import Header from '@/components/CasablancaEn/Header.vue'

describe('Header.vue', () => {
  it('проверка меню', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header__navbar'))
  })
})
