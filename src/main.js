import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import { supabase } from '@/utils/api/supabase';

// Инициализация Supabase
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event);
});

const app = createApp(App);
app.use(router);
app.mount('#app');
