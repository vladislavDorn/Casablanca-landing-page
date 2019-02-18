import Vue from 'vue'
import Introduction from '@/components/CasablancaEn/Introduction.vue'

describe('Introduction.vue', () => {
    it('Проверка Заголовка', () => {
      const Constructor = Vue.extend(Introduction)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.introduction__title').textContent)
      .toEqual('Introduction')
    })
  })

  describe('Introduction.vue', () => {
    it('Проверка текста', () => {
      const Constructor = Vue.extend(Introduction)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.introduction__info_text').textContent)
      .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.')
    })
  })