import app from "./app.js"

let vm = {}
vm.app = new Vue({
  'el': '#title',
  'data': {
    'name': app('world')
  }
})

Vue.component('vt-split', {
  template: '#vt-split-template',
  data: ()=>{
    return {
      pos: 0.1,
    }
  },
})

vm.content = new Vue({
  el: '#content'
})
