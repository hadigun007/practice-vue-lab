![](../assets/hadi.png)
# TailwindCss

###### [practice-vue-lab](../README.md) ＞ TailwindCss
---

## Setup
1. **Install Package and generate init**
    ``` sh
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    ```
2. **Tailwind config**\
    Add this line on tailwind.config.js

    ``` javascript
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
    ```
3. **Css config**

    create ```src\index.css``` and add this line

    ``` css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```


4. **Update main.js**\
    import index.css inside main.js
    ``` javascript
    import './index.css'
    ```
4. Run serve and open [http://127.0.0.1:8080](http://127.0.0.1:8080)
