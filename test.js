// testing in node.js with jsdom

require('jsdom-global')()

const Vue = require('vue/dist/vue.common.js')
const VueEdge = require('./dist/vue-edge.js')
Vue.use(VueEdge)

const el = document.createElement('div')
const app = new Vue({
  el,
  template: `
    <ve-button />
  `
})

console.log(app.$el.outerHTML)
// this logs <div><button>Hello</button></div>
