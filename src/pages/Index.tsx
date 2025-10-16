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
}

const mockMatches: Match[] = [
  {
    id: 1,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Тайфун',
    homeScore: 3,
    awayScore: 2,
    date: '2024-10-21',
    time: '13:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  },
  {
    id: 2,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Белые Медведи',
    date: '2024-10-23',
    time: '20:00',
    venue: 'Арена "Сибирь"',
    status: 'upcoming'
  },
  {
    id: 3,
    homeTeam: 'Стальные Лисы',
    awayTeam: 'Сибирские Снайперы',
    date: '2024-10-27',
    time: '18:00',
    venue: 'Ледовый дворец',
    status: 'upcoming'
  },
  {
    id: 4,
    homeTeam: 'Сибирские Снайперы',
    awayTeam: 'Ирбис',
    homeScore: 4,
    awayScore: 1,
    date: '2024-10-15',
    time: '19:00',
    venue: 'Арена "Сибирь"',
    status: 'completed'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'tickets', label: 'Билеты', icon: 'Ticket' },
    { id: 'partners', label: 'Партнеры', icon: 'Handshake' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-700 to-secondary">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">СС</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Сибирские Снайперы</h1>
                <p className="text-xs text-muted-foreground">Молодёжная хоккейная лига</p>
              </div>
            </div>
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
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-800 to-secondary p-12 text-white">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-5xl font-bold mb-4">ХК Сибирские Снайперы</h2>
                <p className="text-xl mb-8 text-white/90">
                  Молодые таланты хоккея из сердца Сибири. Точность, скорость, победа!
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white"
                    onClick={() => setActiveSection('tickets')}
                  >
                    <Icon name="Ticket" size={20} className="mr-2" />
                    Купить билеты
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => setActiveSection('schedule')}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Расписание
                  </Button>
                </div>
              </div>
              <div className="absolute right-8 bottom-8 flex gap-6 text-white/60">
                <Icon name="Disc" size={64} />
                <Icon name="Target" size={64} />
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">Календарь матчей</h3>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => setActiveSection('schedule')}
                >
                  Все матчи
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {mockMatches.slice(0, 4).map((match) => (
                  <Card
                    key={match.id}
                    className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all animate-scale-in"
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

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{match.venue}</span>
                      </div>
                      {match.status === 'upcoming' && (
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Купить билет
                        </Button>
                      )}
                      {match.status === 'completed' && (
                        <span className="text-xs font-semibold text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                          Завершён
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-xl mb-2">12</h4>
                <p className="text-muted-foreground">Побед в сезоне</p>
              </Card>
              <Card className="p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="font-bold text-xl mb-2">23</h4>
                <p className="text-muted-foreground">Игрока в составе</p>
              </Card>
              <Card className="p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-xl mb-2">47</h4>
                <p className="text-muted-foreground">Заброшенных шайб</p>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Расписание матчей</h2>
            <div className="grid md:grid-cols-2 gap-6">
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

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={16} />
                      <span>{match.venue}</span>
                    </div>
                    {match.status === 'upcoming' && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Купить билет
                      </Button>
                    )}
                    {match.status === 'completed' && (
                      <span className="text-xs font-semibold text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                        Завершён
                      </span>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Новости клуба</h2>
            <div className="grid gap-6">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3">Уверенная победа над Ирбисом!</h3>
                <p className="text-muted-foreground mb-4">
                  Сибирские Снайперы одержали убедительную победу со счётом 4:1. Хет-трик оформил нападающий Алексей Морозов.
                </p>
                <span className="text-sm text-muted-foreground">15 октября 2024</span>
              </Card>
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3">Новый рекорд посещаемости</h3>
                <p className="text-muted-foreground mb-4">
                  На матче против Тайфуна арену посетило рекордное количество болельщиков - 5 200 человек!
                </p>
                <span className="text-sm text-muted-foreground">21 октября 2024</span>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Состав команды</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Алексей Морозов', number: 17, position: 'Нападающий' },
                { name: 'Дмитрий Волков', number: 1, position: 'Вратарь' },
                { name: 'Иван Соколов', number: 5, position: 'Защитник' }
              ].map((player) => (
                <Card
                  key={player.number}
                  className="p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{player.number}</span>
                  </div>
                  <h4 className="font-bold text-xl mb-1">{player.name}</h4>
                  <p className="text-muted-foreground">{player.position}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tickets' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Билеты</h2>
            <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Купить билет на матч</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Выберите матч</label>
                  <select className="w-full p-3 border rounded-lg">
                    {mockMatches
                      .filter((m) => m.status === 'upcoming')
                      .map((match) => (
                        <option key={match.id}>
                          {match.homeTeam} - {match.awayTeam} ({new Date(match.date).toLocaleDateString('ru-RU')})
                        </option>
                      ))}
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество билетов</label>
                    <input type="number" min="1" max="10" defaultValue="1" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сектор</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Трибуна A</option>
                      <option>Трибуна B</option>
                      <option>VIP</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить билеты
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'partners' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Наши партнёры</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-8 bg-white/95 backdrop-blur-sm flex items-center justify-center hover:shadow-xl transition-all">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="Building2" size={48} className="text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
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
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Телефон</h4>
                    <p className="text-muted-foreground">+7 (383) 123-45-67</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <p className="text-muted-foreground">info@snipers.hockey</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
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
          <p className="text-white/80">© 2024 ХК Сибирские Снайперы. Молодёжная хоккейная лига.</p>
        </div>
      </footer>
    </div>
  );
}
