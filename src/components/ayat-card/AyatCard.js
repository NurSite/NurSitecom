/**
 * Компонент карточки аята
 * @param {Object} props - Пропсы
 * @param {string} props.arabicText - Арабский текст аята
 * @param {string} props.translation - Перевод
 * @param {number} props.ayatNumber - Номер аята
 * @param {string} props.surahName - Название суры
 */
export default function AyatCard({ 
  arabicText, 
  translation, 
  ayatNumber, 
  surahName 
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    // Здесь будет логика сохранения в Supabase
  };

  return (
    <div className="ayat-card">
      <div className="header">
        <span className="surah-name">{surahName}</span>
        <span className="ayat-number">Аят {ayatNumber}</span>
      </div>
      
      <div className="arabic-text" dir="rtl">
        {arabicText}
      </div>
      
      <div className="translation">
        {translation}
      </div>
      
      <button 
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
    }
