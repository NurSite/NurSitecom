<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  const supabase = createClient(
    'https://your-project.supabase.co', // замени на своё
    'public-anon-key' // замени на своё
  );

  const STREAK_KEY = "daily_streak";
  const LAST_VISIT_KEY = "last_visit";

  async function initStreak() {
    const user = (await supabase.auth.getUser()).data.user;
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    let streak = parseInt(localStorage.getItem(STREAK_KEY)) || 0;

    if (lastVisit !== today) {
      if (wasYesterday(lastVisit)) {
        streak += 1;
      } else {
        streak = 1;
      }

      localStorage.setItem(STREAK_KEY, streak);
      localStorage.setItem(LAST_VISIT_KEY, today);

      // Обновим в Supabase, если есть user
      if (user) {
        await supabase
          .from("users")
          .update({ streak })
          .eq("id", user.id);
      }
    }

    document.getElementById("streak-display").textContent =
      `Вы получаете знания ${streak} дней подряд`;
  }

  function wasYesterday(dateString) {
    if (!dateString) return false;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return new Date(dateString).toDateString() === yesterday.toDateString();
  }

  initStreak();
</script>