import Vue from "vue"

new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
