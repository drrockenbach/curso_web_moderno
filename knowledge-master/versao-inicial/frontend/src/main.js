// Template de inspiração
// https://www.primefaces.org/ecuador/dashboard.xhtml

import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

import './config/msgs'
import './config/axios'
import './config/mq'

Vue.config.productionTip = false

// Temporário
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRpb21hciBSb2RyaWdvIFJvY2tlbmJhY2giLCJlbWFpbCI6ImRycm9ja2VuYmFjaEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUxMDk3NTQzLCJleHAiOjE1NTEzNTY3NDN9.msoLVVUWCqdvSLEgDBgR54Qcwus1a0nQYhnKfK4n-Ko'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

