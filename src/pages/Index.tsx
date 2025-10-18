import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'completed';
  note?: string;
}

const mockMatches: Match[] = [
  {
    id: 1,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'АКМ',
    homeScore: 1,
    awayScore: 2,
    date: '2025-09-25',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 2,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Красная Звезда',
    homeScore: 3,
    awayScore: 5,
    date: '2025-09-26',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 3,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Алмаз',
    homeScore: 3,
    awayScore: 0,
    date: '2025-09-27',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 4,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'СКА',
    homeScore: 1,
    awayScore: 0,
    date: '2025-09-28',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 5,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Тюменский Легион',
    homeScore: 3,
    awayScore: 0,
    date: '2025-09-30',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 6,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Стальные Лисы',
    homeScore: 3,
    awayScore: 0,
    date: '2025-10-02',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed',
    note: 'Техническое поражение у соперника'
  },
  {
    id: 7,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Кузнецкие Медведи',
    homeScore: 3,
    awayScore: 0,
    date: '2025-10-04',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed',
    note: 'Техническое поражение у соперника'
  },
  {
    id: 8,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Чайка',
    homeScore: 3,
    awayScore: 0,
    date: '2025-10-07',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 9,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Динамо Шинник',
    homeScore: 1,
    awayScore: 2,
    date: '2025-10-10',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'completed',
    note: 'Проигрыш по буллитам'
  },
  {
    id: 10,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Омские Ястребы',
    homeScore: 3,
    awayScore: 0,
    date: '2025-10-15',
    time: '18:30',
    venue: 'Арена "Сибирь"',
    status: 'completed',
    note: 'Техническое поражение у соперников'
  },
  {
    id: 11,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Мамонты Югры',
    homeScore: 3,
    awayScore: 0,
    date: '2025-10-17',
    time: '14:00',
    venue: 'Арена "Сибирь"',
    status: 'completed',
    note: 'Техническое поражение у соперников'
  },
  {
    id: 12,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'МХК Спартак',
    date: '2025-10-21',
    time: '16:00',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  },
  {
    id: 13,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Белые Медведи',
    date: '2025-10-22',
    time: '16:30',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  },
  {
    id: 14,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Толпар',
    date: '2025-10-26',
    time: '18:30',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  },
  {
    id: 15,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Динамо СПБ',
    date: '2025-10-28',
    time: '17:30',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  },
  {
    id: 16,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Крылья Советов',
    date: '2025-10-30',
    time: '18:00',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'partners', label: 'Партнеры', icon: 'Handshake' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Сибирские снайперы забирают 4 очка с двух домашних игр',
      text: 'Команда показала отличную игру и одержала две важные победы на домашней арене!',
      date: '18 октября 2024'
    },
    {
      id: 2,
      title: 'Сибирские снайперы провели 3 товарищеских матча с СКА-1946 и выиграли 2 из них!',
      text: 'Отличная подготовка к новому сезону! Команда показала характер и волю к победе.',
      date: '17 октября 2024'
    },
    {
      id: 3,
      title: 'Сибирским снайперам исполняется 1 месяц!',
      text: 'Поздравляем команду с первым месяцем работы! За это время команда показала отличные результаты и заслужила признание болельщиков.',
      date: '15 октября 2024'
    },
    {
      id: 4,
      title: 'Сибирские снайперы вновь выиграли в сезоне, и одержали победу над "Локомотив"',
      text: 'Наша команда продолжает радовать болельщиков уверенными победами. Очередной успех в копилку сезона!',
      date: '12 октября 2024'
    },
    {
      id: 5,
      title: 'Игроки уезжают в аренду',
      text: 'Игроки #95 Galimov, #71 rundya, #90 Dangel уезжают в аренду. #71 и #90 в СКА-1946, #95 в Толпар! Желаем успехов!',
      date: '14 октября 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-700 to-secondary relative">
      <div 
        className="fixed inset-0 bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/87d667b9-fed4-46d2-96bd-81d188b5ad44.png)' }}
      />
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img src="https://cdn.poehali.dev/files/87d667b9-fed4-46d2-96bd-81d188b5ad44.png" alt="Логотип" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold text-primary">Сибирские Снайперы</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Virtual Farm Hockey League</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-primary" />
            </button>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-2 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-3 sm:px-4 space-y-8 sm:space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-blue-800 to-secondary p-6 sm:p-12 text-white">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">ХК Сибирские Снайперы</h2>
                <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
                  Молодые таланты хоккея из сердца Сибири. Точность, скорость, победа!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
                    onClick={() => window.open('https://www.donationalerts.com/r/sibsniper', '_blank')}
                  >
                    <Icon name="Ticket" size={18} className="mr-2" />
                    Купить билеты
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
                    onClick={() => setActiveSection('schedule')}
                  >
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Расписание
                  </Button>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 flex gap-3 sm:gap-6 text-white/60">
                <Icon name="Disc" size={40} className="sm:w-16 sm:h-16" />
                <Icon name="Target" size={40} className="sm:w-16 sm:h-16" />
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Календарь матчей</h3>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => setActiveSection('schedule')}
                >
                  Все матчи
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {mockMatches.filter(m => m.status === 'completed').slice(-2).concat(mockMatches.filter(m => m.status === 'upcoming').slice(0, 2)).map((match) => (
                  <Card
                    key={match.id}
                    className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all animate-scale-in"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(match.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{match.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 text-center">
                        <p className="font-semibold text-foreground mb-2">{match.homeTeam}</p>
                        {match.status === 'completed' && (
                          <span className="text-3xl font-bold text-primary">{match.homeScore}</span>
                        )}
                      </div>
                      <div className="px-4">
                        <span className="text-2xl font-bold text-muted-foreground">-</span>
                      </div>
                      <div className="flex-1 text-center">
                        <p className="font-semibold text-foreground mb-2">{match.awayTeam}</p>
                        {match.status === 'completed' && (
                          <span className="text-3xl font-bold text-primary">{match.awayScore}</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{match.venue}</span>
                      </div>
                      {match.note && (
                        <p className="text-xs italic" style={{ color: match.note.includes('Техническое поражение') ? '#ef4444' : undefined }}>
                          {match.note}
                        </p>
                      )}
                      <div className="flex items-center justify-end">
                        {match.status === 'upcoming' && (
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => window.open('https://www.donationalerts.com/r/sibsniper', '_blank')}
                          >
                            Купить билет
                          </Button>
                        )}
                        {match.status === 'completed' && (
                          <span className="text-xs font-semibold text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                            Завершён
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-xl mb-2">9</h4>
                <p className="text-muted-foreground">Побед в сезоне</p>
              </Card>
              <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="font-bold text-xl mb-2">10</h4>
                <p className="text-muted-foreground">Игроков в составе</p>
              </Card>
              <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-xl mb-2">31</h4>
                <p className="text-muted-foreground">Заброшенных шайб</p>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="container mx-auto px-3 sm:px-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Расписание матчей</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {mockMatches.map((match) => (
                <Card
                  key={match.id}
                  className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(match.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{match.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1 text-center">
                      <p className="font-semibold text-foreground mb-2">{match.homeTeam}</p>
                      {match.status === 'completed' && (
                        <span className="text-3xl font-bold text-primary">{match.homeScore}</span>
                      )}
                    </div>
                    <div className="px-4">
                      <span className="text-2xl font-bold text-muted-foreground">-</span>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="font-semibold text-foreground mb-2">{match.awayTeam}</p>
                      {match.status === 'completed' && (
                        <span className="text-3xl font-bold text-primary">{match.awayScore}</span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={16} />
                      <span>{match.venue}</span>
                    </div>
                    {match.note && (
                      <p className="text-xs italic" style={{ color: match.note.includes('Техническое поражение') ? '#ef4444' : undefined }}>
                        {match.note}
                      </p>
                    )}
                    <div className="flex items-center justify-end">
                      {match.status === 'upcoming' && (
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.open('https://www.donationalerts.com/r/sibsniper', '_blank')}
                        >
                          Купить билет
                        </Button>
                      )}
                      {match.status === 'completed' && (
                        <span className="text-xs font-semibold text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                          Завершён
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="container mx-auto px-3 sm:px-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Новости клуба</h2>
            <div className="grid gap-4 sm:gap-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{news.title}</h3>
                  <p className="text-muted-foreground mb-4">{news.text}</p>
                  <span className="text-sm text-muted-foreground">{news.date}</span>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="container mx-auto px-3 sm:px-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Состав команды</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: 'hellybuck', number: 12, position: 'Вратарь', role: 'C' },
                { name: 'Nykroy', number: 86, position: 'Нападающий', role: 'C' },
                { name: 'MarcussGogolev', number: 17, position: 'Защитник', role: 'A' },
                { name: 'Лысый', number: 20, position: 'Нападающий', role: 'A' },
                { name: 'Celibrini', number: 71, position: 'Нападающий' },
                { name: 'FishyXXL', number: 74, position: 'Защитник' },
                { name: 'SigmaKriper', number: 79, position: 'Нападающий' },
                { name: 'TKACHEV', number: 90, position: 'Защитник', loan: 'В аренде СКА-1946' },
                { name: 'Dangel', number: 91, position: 'Защитник', loan: 'В аренде СКА-1946' },
                { name: 'Galimov', number: 95, position: 'Нападающий', loan: 'В аренде Локо' }
              ].map((player) => (
                <Card
                  key={player.number}
                  className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 relative">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{player.number}</span>
                    {player.role && (
                      <span className="absolute -top-1 -right-1 text-red-600 font-bold text-sm bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                        {player.role}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-base sm:text-xl mb-1">{player.name}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-1">{player.position}</p>
                  {player.loan && (
                    <p className="text-xs text-orange-600 italic mt-2">{player.loan}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}



        {activeSection === 'partners' && (
          <div className="container mx-auto px-3 sm:px-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Наши партнёры</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <Card 
                className="p-6 sm:p-8 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer"
                onClick={() => window.open('https://web.telegram.org/k/#@vfhlfan', '_blank')}
              >
                <div className="text-6xl sm:text-7xl mb-3 sm:mb-4">🏒</div>
                <h3 className="text-lg sm:text-xl font-bold text-center">Фанатский VFHL</h3>
              </Card>
              <Card 
                className="p-6 sm:p-8 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer"
                onClick={() => window.open('https://t.me/+WmnWSLV55Ok2MTky', '_blank')}
              >
                <div className="text-6xl sm:text-7xl mb-3 sm:mb-4">💻</div>
                <h3 className="text-lg sm:text-xl font-bold text-center">VFHL</h3>
              </Card>
              <Card 
                className="p-6 sm:p-8 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer"
                onClick={() => window.open('https://t.me/VirtualPuckHockeyLeague', '_blank')}
              >
                <div className="text-6xl sm:text-7xl mb-3 sm:mb-4">🖥</div>
                <h3 className="text-lg sm:text-xl font-bold text-center">VPHL</h3>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-3 sm:px-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Контакты</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
              <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Адрес</h4>
                    <p className="text-muted-foreground">г. Новосибирск, ул. Хоккейная, 1<br />Арена "Сибирь"</p>
                  </div>
                </div>
              </Card>
              <Card 
                className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm cursor-pointer hover:shadow-xl transition-all"
                onClick={() => window.open('https://t.me/sibsniper', '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Telegram</h4>
                    <p className="text-muted-foreground">t.me/sibsniper</p>
                  </div>
                </div>
              </Card>
              <Card 
                className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm cursor-pointer hover:shadow-xl transition-all"
                onClick={() => window.open('https://t.me/ggrzk', '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Связь с нами</h4>
                    <p className="text-muted-foreground">t.me/ggrzk</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Share2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Соцсети</h4>
                    <p className="text-muted-foreground">VK, Telegram, Instagram</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary/95 backdrop-blur-sm text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2025 ХК Сибирские Снайперы. Virtual Farm Hockey League.</p>
        </div>
      </footer>
    </div>
  );
}