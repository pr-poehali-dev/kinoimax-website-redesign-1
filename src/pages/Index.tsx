import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const movies = [
    {
      id: 1,
      title: "Звездный Путь: Возрождение",
      genre: "Фантастика",
      duration: "142 мин",
      rating: "16+",
      poster: "/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg",
      showtimes: ["10:00", "13:30", "17:00", "20:30"],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Сердца в Огне",
      genre: "Романтика",
      duration: "118 мин", 
      rating: "12+",
      poster: "/img/aed345da-3f5c-45be-bed7-1c61ebd2596f.jpg",
      showtimes: ["11:15", "14:45", "18:15", "21:45"],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Городские Легенды",
      genre: "Триллер",
      duration: "127 мин",
      rating: "18+", 
      poster: "/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg",
      showtimes: ["12:00", "15:30", "19:00", "22:30"],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      {/* Header */}
      <header className="bg-[#1C1C1E]/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Film" size={28} className="text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-white">CINEMA</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#movies" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Фильмы</a>
              <a href="#schedule" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Расписание</a>
              <a href="#about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">О нас</a>
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                Купить билет
              </Button>
            </nav>
            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg" 
            alt="Hero movie poster"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <Badge className="bg-[#FF6B35] text-white mb-6 text-lg px-4 py-2">
            Премьера недели
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Звездный Путь:<br />Возрождение
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Эпическое космическое приключение, которое изменит представление о будущем человечества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлер
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1C1C1E] px-8 py-4 text-lg">
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билет
            </Button>
          </div>
        </div>
      </section>

      {/* Movies Schedule */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-[#1C1C1E] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание сеансов</h2>
            <p className="text-xl text-gray-400">Выберите удобное время для просмотра</p>
          </div>
          
          <div className="grid gap-8 md:gap-12">
            {movies.map((movie) => (
              <Card key={movie.id} className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/4">
                      <img 
                        src={movie.poster} 
                        alt={movie.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-3/4 p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{movie.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <span className="flex items-center">
                              <Icon name="Tag" size={16} className="mr-1" />
                              {movie.genre}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Clock" size={16} className="mr-1" />
                              {movie.duration}
                            </span>
                            <Badge variant={movie.rating === "18+" ? "destructive" : movie.rating === "16+" ? "default" : "secondary"}>
                              {movie.rating}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white mt-4 lg:mt-0">
                          <Icon name="Play" size={16} className="mr-2" />
                          Трейлер
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {movie.showtimes.map((time, index) => (
                          <Button 
                            key={index}
                            variant="outline" 
                            className="border-gray-600 text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-all duration-200"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Posters Gallery */}
      <section id="movies" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Сейчас в кино</h2>
            <p className="text-xl text-gray-400">Лучшие фильмы этого сезона</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <Card key={movie.id} className="bg-gray-800/30 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 hover:bg-gray-800/50">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className={`absolute top-4 right-4 ${
                      movie.rating === "18+" ? "bg-red-600" : 
                      movie.rating === "16+" ? "bg-orange-600" : "bg-green-600"
                    }`}>
                      {movie.rating}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="absolute bottom-4 left-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <Icon name="Play" size={16} className="mr-1" />
                      Трейлер
                    </Button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                    <p className="text-gray-400 mb-4">{movie.genre} • {movie.duration}</p>
                    <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                      Купить билет
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1E] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Film" size={24} className="text-[#FF6B35]" />
                <h3 className="text-xl font-bold">CINEMA</h3>
              </div>
              <p className="text-gray-400">Современный кинотеатр с лучшими фильмами и передовыми технологиями</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  ул. Кино, 1
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <p>Бронирование билетов</p>
                <p>VIP-залы</p>
                <p>Детские сеансы</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Icon name="Twitter" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CINEMA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;