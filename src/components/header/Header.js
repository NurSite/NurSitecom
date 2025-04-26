import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function Header() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Проверка авторизации при загрузке
  useEffect(() => {
    const session = supabase.auth.session();
    if (session) setUser(session.user);
    
    // Подписка на изменения авторизации
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Проверка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    return () => authListener?.unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="app-header">
      <div className="logo">
        <img src="/assets/img/logo.svg" alt="NurSite Logo" />
        <h1>NurSite</h1>
      </div>
      
      <nav>
        <a href="/">Главная</a>
        <a href="/quran">Коран</a>
        <a href="/about">О проекте</a>
      </nav>
      
      <div className="user-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        {user ? (
          <a href="/profile" className="user-avatar">
            <img src={user.user_metadata?.avatar_url || '/assets/img/default-avatar.png'} alt="Profile" />
          </a>
        ) : (
          <a href="/login" className="login-btn">Войти</a>
        )}
      </div>
    </header>
  );
    }
