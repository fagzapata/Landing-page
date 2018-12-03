//Fabian Gallegos Zapata
//fgallegos_097@hotmail.com
//copyright®FabianGallegosZapata
import Vue from 'vue'
import App from './App'
import router from './router'
//usando vuetify desing
import vuetify from 'vuetify'
Vue.use(vuetify,{
  iconfont: 'mdi',
  themes:{
    primary: colors.red.darken1,
    secundary: colors.red.legthen4,
    accent: colors.indigo.base
  }
});
//boostrap import
import bootstrap from 'bootstrap-vue'
Vue.use(bootstrap)
//colors-vuetify
import colors from 'vuetify/es5/util/colors'
//google-material-design
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//estilos personalisados
import './css/style_fabian.css'
//carousel vue
import jquery from 'vue-jquery'
Vue.use(jquery)
//owl-carousel
import owl from 'vue-carousel'
Vue.use(owl)
//configuracion a produccion
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App} ,
  template: '<App/>'
})
