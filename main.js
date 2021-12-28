import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LyTab from 'ly-tab';
import VueAwesomeSwiper from 'vue-awesome-swiper';
//import 'swiper/css/swiper.css'
import 'swiper/swiper-bundle.css';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast'
import Vant from 'vant';
import 'vant/lib/index.css';
import https from "./api/axios"; //引入封装的axios
import Router from 'vue-router';
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {undefined
return routerPush.call(this, location).catch(error=> error)
}


Vue.prototype.https = https;

Vue.config.productionTip = false;
Vue.use(LyTab);
Vue.use(VueAwesomeSwiper);
Vue.use(Toast);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
