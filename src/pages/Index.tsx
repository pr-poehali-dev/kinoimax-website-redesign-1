import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const movies = [
    {
      id: 1,
      title: "Супермен предсеанс. обсл. & Куда уходят папы?",
      genre: "Фантастика",
      duration: "142 мин",
      rating: "16+",
      poster: "/img/edd2a9b8-10b4-4cde-b86a-61bfa9b32100.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 2,
      title: "Мир Юрского периода: Возрождение",
      genre: "Приключения",
      duration: "118 мин", 
      rating: "12+",
      poster: "/img/c1849e88-f7dd-4090-853b-c04c1d9c4820.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000372/trailer-mir-yurskogo-perioda-vozrozhdenie-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 3,
      title: "Как приручить дракона",
      genre: "Анимация",
      duration: "127 мин",
      rating: "6+", 
      poster: "/img/42113cc3-3db5-42c5-8b77-e078187097be.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000363/trailer-kak-priruchit-drakona-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 4,
      title: "Лило и Стич",
      genre: "Анимация",
      duration: "85 мин",
      rating: "0+",
      poster: "/img/42113cc3-3db5-42c5-8b77-e078187097be.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 5,
      title: "Формула 1",
      genre: "Спорт",
      duration: "104 мин",
      rating: "12+",
      poster: "/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000369/trailer-formula-1-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 6,
      title: "Материалистка",
      genre: "Комедия",
      duration: "98 мин",
      rating: "16+",
      poster: "/img/aed345da-3f5c-45be-bed7-1c61ebd2596f.jpg",
      trailer: "https://media.cinemabox.team/r/movies/12271/trailer-materialistka.mp4"
    },
    {
      id: 7,
      title: "28 лет спустя",
      genre: "Ужасы",
      duration: "115 мин",
      rating: "18+",
      poster: "/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/1000000000368/trailer-28-let-spustya-predseans-obsl-kuda-ukhodyat-papy.mp4"
    },
    {
      id: 8,
      title: "Плагиатор",
      genre: "Триллер",
      duration: "102 мин",
      rating: "16+",
      poster: "/img/aed345da-3f5c-45be-bed7-1c61ebd2596f.jpg",
      trailer: "https://media.cinemabox.team/net/c5/movies/12894/trailer-plagiator.mp4"
    },
    {
      id: 9,
      title: "Пила X",
      genre: "Ужасы",
      duration: "118 мин",
      rating: "18+",
      poster: "/img/cd585e81-d0db-426b-963d-959ca6f14b41.jpg",
      trailer: "https://media.cinemabox.team/r/movies/10780/trailer-pila-x.mp4"
    }
  ];

  const handleTrailerClick = (trailerUrl: string) => {
    setSelectedTrailer(trailerUrl);
    setIsTrailerOpen(true);
  };

  const handleDialogClose = () => {
    setIsTrailerOpen(false);
    setSelectedTrailer(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (isTrailerOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isTrailerOpen]);

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
              <a href="#about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">О нас</a>
            </nav>
            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Auto-playing Trailer */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10"></div>
        <div className="relative z-20 flex items-end h-full">
          <div className="container mx-auto px-6 pb-20">
            <div className="max-w-3xl">
              <Badge className="bg-[#FF6B35] text-white mb-4 text-sm px-3 py-1">
                🎬 Премьера недели
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                Супермен предсеанс. обсл. & Куда уходят папы?
              </h1>
              <div className="flex items-center space-x-4 mb-6 text-gray-300">
                <span className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1" />
                  142 мин
                </span>
                <Badge variant="destructive">16+</Badge>
                <span>Фантастика</span>
              </div>
            </div>
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
                  <div className="relative cursor-pointer" onClick={() => handleTrailerClick(movie.trailer)}>
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className={`absolute top-4 right-4 ${
                      movie.rating === "18+" ? "bg-red-600" : 
                      movie.rating === "16+" ? "bg-orange-600" : 
                      movie.rating === "12+" ? "bg-yellow-600" : "bg-green-600"
                    }`}>
                      {movie.rating}
                    </Badge>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-[#FF6B35] rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Icon name="Play" size={32} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                    <p className="text-gray-400 mb-4">{movie.genre} • {movie.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      <Dialog open={isTrailerOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-4xl w-full bg-[#1C1C1E] border-gray-700 p-0">
          <div className="relative aspect-video">
            {selectedTrailer && (
              <video 
                ref={videoRef}
                controls 
                className="w-full h-full"
                onEnded={handleDialogClose}
              >
                <source src={selectedTrailer} type="video/mp4" />
              </video>
            )}
            <button 
              onClick={handleDialogClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <Icon name="X" size={20} className="text-white" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

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