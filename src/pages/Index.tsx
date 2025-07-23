import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Movie {
  id: number;
  title: string;
  ageRating: string;
  poster: string;
  trailer?: string;
  showtimes: string[];
}

const Index = () => {
  const [showMainTrailer, setShowMainTrailer] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);
  
  const mainTrailer = "https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4";
  
  const movies: Movie[] = [
    {
      id: 1,
      title: "Супермен предсеанс. обсл. & Куда уходят папы?",
      ageRating: "12+",
      poster: "https://cdn.poehali.dev/files/adc2d1df-01a4-4ede-a771-6685e66cbb9b.png",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["12:50", "14:00", "15:30", "16:45", "17:50", "20:00", "20:55", "22:10", "22:45", "23:55"]
    },
    {
      id: 2,
      title: "Мир Юрского периода: Возрождение предсеанс. обсл. & Куда уходят папы?",
      ageRating: "12+",
      poster: "https://cdn.poehali.dev/files/d0ffe680-038b-4b94-91dc-f4c026d8594f.png",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000372/trailer-mir-yurskogo-perioda-vozrozhdenie-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["14:00", "16:25", "19:15", "21:40", "23:30"]
    },
    {
      id: 3,
      title: "Как приручить дракона предсеанс. обсл. & Куда уходят папы?",
      ageRating: "6+",
      poster: "https://cdn.poehali.dev/files/c5c4f663-ace7-4daa-8f31-6eca6220a91f.png",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000363/trailer-kak-priruchit-drakona-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["13:55", "16:20", "18:10", "19:55", "21:55"]
    },
    {
      id: 4,
      title: "Лило и Стич предсеанс. обсл. & Куда уходят папы?",
      ageRating: "6+",
      poster: "https://cdn.poehali.dev/files/8dcb1d32-6109-4c87-8000-8ede200ccbb1.png",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["12:50", "15:15", "19:40", "21:50"]
    },
    {
      id: 5,
      title: "Формула 1 предсеанс. обсл. & Куда уходят папы?",
      ageRating: "16+",
      poster: "https://cdn.poehali.dev/files/91b4d69f-dcc3-45c3-8503-39058a2384e8.png",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000369/trailer-formula-1-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["11:10", "16:10", "23:10"]
    },
    {
      id: 6,
      title: "Смурфики в кино предсеанс. обсл. & Куда уходят папы?",
      ageRating: "6+",
      poster: "/img/de4cac55-8988-4c39-9b49-5118c1e81432.jpg",
      showtimes: ["10:05", "12:15", "17:20"]
    },
    {
      id: 7,
      title: "Материалистка",
      ageRating: "18+",
      poster: "/img/a8aeb44d-b352-4918-a00e-510d6b16013c.jpg",
      trailer: "https://media.cinemabox.team/r/movies/12271/trailer-materialistka.mp4",
      showtimes: ["14:30", "19:25"]
    },
    {
      id: 8,
      title: "Дюна 2 предсеанс. обсл. & Куда уходят папы?",
      ageRating: "12+",
      poster: "/img/ab4d371c-adad-4036-b151-ea05df18c251.jpg",
      showtimes: ["19:45"]
    },
    {
      id: 9,
      title: "28 лет спустя предсеанс. обсл. & Куда уходят папы?",
      ageRating: "18+",
      poster: "/img/84e1ff13-a4ff-48f4-a53d-5c678e9aeaa3.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000368/trailer-28-let-spustya-predseans-obsl-kuda-ukhodyat-papy.mp4",
      showtimes: ["23:05"]
    },
    {
      id: 10,
      title: "Плагиатор",
      ageRating: "16+",
      poster: "/img/d7e5416e-926d-4875-9ff7-cb5b043f06d8.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/12894/trailer-plagiator.mp4",
      showtimes: ["20:10"]
    },
    {
      id: 11,
      title: "Пила Х",
      ageRating: "18+",
      poster: "/img/43da16e1-fd2e-4d12-80da-c7973adebafb.jpg",
      trailer: "https://media.cinemabox.team/r/movies/10780/trailer-pila-x.mp4",
      showtimes: ["20:35"]
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
              <h1 className="text-2xl font-bold text-white">Kinoimax</h1>
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
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/files/adc2d1df-01a4-4ede-a771-6685e66cbb9b.png" 
            alt="Супермен"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 mb-20 ml-8 text-white">
          <div className="mb-4">
            <Badge className="bg-red-600 text-white text-lg px-3 py-1 font-bold">
              12+
            </Badge>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Супермен в кино!
          </h1>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-semibold"
            onClick={() => setShowMainTrailer(true)}
          >
            <Icon name="Play" size={24} className="mr-3" />
            Смотреть трейлер
          </Button>
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
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="relative">
                          <Badge className={`absolute -top-2 -left-2 ${
                            movie.ageRating === "18+" ? "bg-red-600" : 
                            movie.ageRating === "16+" ? "bg-orange-600" : 
                            movie.ageRating === "12+" ? "bg-yellow-600" : "bg-green-600"
                          } text-white font-bold`}>
                            {movie.ageRating}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pt-4">{movie.title}</h3>
                        </div>
                        {movie.trailer && (
                          <Button 
                            variant="outline" 
                            className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white mt-4 lg:mt-0"
                            onClick={() => setSelectedTrailer(movie.trailer!)}
                          >
                            <Icon name="Play" size={16} className="mr-2" />
                            Трейлер
                          </Button>
                        )}
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
                      movie.ageRating === "18+" ? "bg-red-600" : 
                      movie.ageRating === "16+" ? "bg-orange-600" : 
                      movie.ageRating === "12+" ? "bg-yellow-600" : "bg-green-600"
                    }`}>
                      {movie.ageRating}
                    </Badge>
                    {movie.trailer && (
                      <Button 
                        size="sm" 
                        className="absolute bottom-4 left-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                        onClick={() => setSelectedTrailer(movie.trailer!)}
                      >
                        <Icon name="Play" size={16} className="mr-1" />
                        Трейлер
                      </Button>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {movie.showtimes.slice(0, 6).map((time, index) => (
                        <span 
                          key={index}
                          className="bg-gray-700 text-white px-2 py-1 rounded text-sm text-center hover:bg-[#FF6B35] transition-colors cursor-pointer"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
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
                <h3 className="text-xl font-bold">Kinoimax</h3>
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
            <p>&copy; 2024 Kinoimax. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Main Trailer Modal */}
      {showMainTrailer && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowMainTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <video 
              src={mainTrailer} 
              controls 
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Movie Trailer Modal */}
      {selectedTrailer && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedTrailer(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <video 
              src={selectedTrailer} 
              controls 
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;