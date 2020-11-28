import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'


describe('AppHeader', () => {
    const wrapper = mount(AppHeader)
    test('if user is not logged in, do not show logout button', () => {
        // expect(true).toBe(true)
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('if a user is logged in, show logout button', async () => {
        // const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick() 
        
        expect(wrapper.find('button').isVisible()).toBe(true)
    })

})

