console.log('hello vue')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      myMessage: "Questa è la prima volta che uso Vue-js!"
    }
  }
}).mount('#app')