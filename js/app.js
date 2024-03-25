console.log('hello vue')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      myMessage: "Questa è la prima volta che uso Vue-js!",
      image: " https://images.corsidia.com/ckeditor/pictures/data/000/000/086/content/immagini-e-tabelle-html-00.jpg"
    }
  }
}).mount('#app')