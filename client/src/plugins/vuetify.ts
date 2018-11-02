import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/src/locale/zh-Hans';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:
  {
    primary: '#2962FF',
    secondary: '#E8EAF6',
    accent: '#FF1744',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
  lang: {
    locales: { zhHans },
    current: 'zh-Hans',
  },
});
