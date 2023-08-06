![](../hadi.png)
# vue-i18n

###### [practice-vue-lab](../README.md) ＞ vue-i18n
---
## Setup

1. **Install Packages**
    ``` sh
    npm install vue-i18n@9 && mkdir src/locales
    ```
2. **Add localozation json file**\
    create ```locales/id.js``` and paste this code:
    ``` json
    {
        "Home":"Beranda"
    }
    ```
    create ```locales/en.js``` and paste this code:
    ``` json
    {
        "Home":"Home"
    }
    ```
3. **i18n init**\
    create ```src/i18n.js``` and paste this code:
    ``` javascript
    import { createI18n } from 'vue-i18n'
    import en from './locales/en.json'
    import id from './locales/id.json'

    function loadLocalMessages(){
        const locales = [{ en: en}, {id: id}]
        const messages = {}
        locales.forEach(lang => {
            const key = Object.keys(lang)
            messages[key] = lang[key]
        })
        return messages
    }

    export default createI18n({
        locale: "en",
        fallbackLocale: "en",
        messages: loadLocalMessages()
    });
    ```
4. **Update main.js**\
    update ```src/main.js``` add this code:
    ``` javascript
    import { createApp } from 'vue'
    import App from './App.vue'
    import i18n from './i18n'

    createApp(App).use(i18n).mount('#app')
    ```
4. **Add language select**\
    update ```src/App.vue``` add this code:
    ``` html
    <template>
    <h1>{{ $t("Home") }}</h1>
    <select v-model="$i18n.locale">
        <option v-for="l in $i18n.availableLocales" :key="`local-${l}`" :value=l>{{ l }}</option>
    </select>
    </template>
    ```
4. Run serve and open [http://127.0.0.1:8080](http://127.0.0.1:8080)
6. Screenshot\
![Screenshot](../assets/i18n.mp4)

