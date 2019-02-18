import Vue from 'vue'
import Promo from '@/components/CasablancaEn/Promo.vue'

describe('Promo.vue', () => {
  it('Проверка Заголовка', () => {
    const Constructor = Vue.extend(Promo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.promo__info_title').textContent)
    .toEqual('We’ve got the talent')
  })
})

describe('Promo.vue', () => {
    it('Проверка текста', () => {
      const Constructor = Vue.extend(Promo)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.promo__info_text').textContent)
        .toEqual('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.')
    })
  })
