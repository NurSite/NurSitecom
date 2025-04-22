// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Данные из твоего проекта Supabase
const SUPABASE_URL = 'https://iynvvfxtyuhvtcqkbsfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bnZ2Znh0eXVodnRjcWtic2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjA0NjAsImV4cCI6MjA2MDgzNjQ2MH0.-7B7-zKX1M44yyY7qncjKiLZ9Ort9jRjJq2-TW1FEj4';

// Создаем клиент Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);Supabase.js