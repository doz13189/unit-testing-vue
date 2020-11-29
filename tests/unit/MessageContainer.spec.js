import MessageContainer from '@/components/MessageContainer'
import { mount, shallowMount } from '@vue/test-utils'

describe('MessageContainer', () => {
    it('Wraps MessageDisplay component', () => {
    //   const wrapper = mount(MessageContainer, {
    //     stubs: {
    //       MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
    //     }
    //   })
      const wrapper = shallowMount(MessageContainer)
      const message = wrapper.find('[data-testid="aaa"]').element.textContent
      expect(message).toEqual('aaa')
    })
  })