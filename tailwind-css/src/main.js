import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import './index.css'



const app = createApp(App)

const i18n = createI18n({
    locale : "id",
    messages : {
        en: {
          message: {
            the_world: 'the worldss',
            dio: 'DIO:',
            linked: '@:message.dio @:message.the_world !!!!'
          }
        },
        id: {
          message: {
            the_world: 'Dunia',
            dio: 'DIO:',
            linked: '@:message.dio @:message.the_world !!!!'
          }
        }
      }
})
  
app.use(i18n)


.mount('#app')
