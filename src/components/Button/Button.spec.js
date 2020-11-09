const VeButton = require('./Button.vue').default
const { mount } = require('@vue/test-utils')

console.log(VeButton)
test('button', () => {
  const wrapper = mount(VeButton)
  expect(wrapper.html()).toContain('Hello')
})
