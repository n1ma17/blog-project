import { createStore } from 'vuex'
import articles from '../store/modules/articles'
const store = createStore({
    modules: {
        articles
    },
})

export default store