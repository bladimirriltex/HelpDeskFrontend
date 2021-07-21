import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import moment from 'moment'
import vmodal from 'vue-js-modal'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
Vue.prototype.moment=moment

Vue.use(vmodal)


Vue.config.productionTip = false

new Vue({
  router,
 
  render: h => h(App)
}).$mount('#app')
