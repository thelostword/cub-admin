import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import router from './router';
import 'virtual:uno.css';
// import 'virtual:iconfont.css';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
