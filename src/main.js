import Vue from 'vue'
import App from './App.vue'
import Router from './router/index.js'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'
import store from './store'
import './api'

Vue.config.productionTip = false //禁止在Vue启动时的生产提示
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

// new Vue({
//     el:'#app',
//     components:{
//        App
//     },
//     template:'<App/>',
//     router:Router,//配置路由器
//     store,//配置vuex的store
// })

new Vue({
    // el:'#app',
    render:h=>h(App), //函数返回组件标签<App/>
    //render: createElement => createElement(App)
    router:Router,//配置路由器
    store:store,//配置vuex的store
}).$mount('#app')