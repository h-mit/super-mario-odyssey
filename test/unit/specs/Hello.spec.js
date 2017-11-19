import { mount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld)

  it('should render correct contents', () => {
    const header = wrapper.find('h1')
    expect(header.text()).to.have.string('Welcome to Your Vue.js App')
  })
})
