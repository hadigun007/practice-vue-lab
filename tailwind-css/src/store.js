import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            header:[
                {
                    title:"Home",
                    url:"home"
                },
                {
                    title:"Snap",
                    url:"snap"
                },
                {
                    title:"Button",
                    url:"button"
                },
            ]
        }
    }
})

export default store