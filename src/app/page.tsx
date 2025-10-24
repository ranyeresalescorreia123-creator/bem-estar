"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Sparkles, RefreshCw, Music, Play } from "lucide-react";
import { useEffect, useState } from "react";

const motivationalPhrases = {
  morning: [
    "Bom dia! Que seu dia seja cheio de energia e positividade.",
    "A manhã é uma nova oportunidade para brilhar.",
    "Comece o dia com gratidão e um sorriso."
  ],
  afternoon: [
    "Boa tarde! Continue forte, você está no caminho certo.",
    "O sol ainda brilha, assim como suas possibilidades.",
    "Pausa para respirar e recarregar as energias."
  ],
  evening: [
    "Boa noite! Descanse bem, amanhã é um novo dia.",
    "Relaxe e permita-se recarregar para amanhã.",
    "O dia termina, mas suas conquistas permanecem."
  ]
};

const quickTips = [
  "Respire profundamente por 1 minuto",
  "Beba um copo de água",
  "Faça uma caminhada curta",
  "Ouça uma música que te anima",
  "Anote 3 coisas pelas quais é grato"
];

const moodOptions = [
  { emoji: "😊", label: "Animado", value: "animado" },
  { emoji: "😌", label: "Tranquilo", value: "tranquilo" },
  { emoji: "⚡", label: "Preciso de energia", value: "energia" },
  { emoji: "😔", label: "Um pouco para baixo", value: "baixo" }
];

const playlists = {
  animado: {
    monday: ["Energia Matinal - Pop Hits", "Rock Clássico", "Dance Party"],
    tuesday: ["Motivação Diária", "Upbeat Vibes", "Happy Songs"],
    wednesday: ["Meio da Semana Boost", "Feel Good Music", "Positive Energy"],
    thursday: ["Quase Sexta!", "Groove Time", "Fun Tunes"],
    friday: ["Vibe da Sexta", "Weekend Starter", "Celebration Hits"],
    saturday: ["Sábado Animado", "Party Mix", "Adventure Songs"],
    sunday: ["Domingo Relax", "Chill Vibes", "Sunday Morning"]
  },
  tranquilo: {
    monday: ["Calma Matinal", "Soft Acoustic", "Peaceful Morning"],
    tuesday: ["Dia Tranquilo", "Ambient Sounds", "Gentle Melodies"],
    wednesday: ["Meio da Semana Zen", "Relaxing Piano", "Nature Sounds"],
    thursday: ["Quase Fim de Semana", "Chill Lounge", "Smooth Jazz"],
    friday: ["Vibe Suave", "Evening Relaxation", "Soft Pop"],
    saturday: ["Sábado Chill", "Weekend Calm", "Acoustic Covers"],
    sunday: ["Domingo Sereno", "Spiritual Music", "Meditation Sounds"]
  },
  energia: {
    monday: ["Wake Up Call", "High Energy", "Motivational Beats"],
    tuesday: ["Power Up", "Workout Music", "Adrenaline Rush"],
    wednesday: ["Midweek Motivation", "Pump Up", "Action Soundtrack"],
    thursday: ["Thursday Thrill", "Energy Boost", "Dynamic Beats"],
    friday: ["Friday Fire", "Weekend Energy", "Exciting Mix"],
    saturday: ["Saturday Surge", "Adventure Energy", "Active Vibes"],
    sunday: ["Sunday Recharge", "Morning Energy", "Fresh Start"]
  },
  baixo: {
    monday: ["Comeback Monday", "Uplifting Songs", "Hopeful Melodies"],
    tuesday: ["Tuesday Turnaround", "Inspirational", "Positive Vibes"],
    wednesday: ["Midweek Lift", "Encouraging Music", "Feel Better"],
    thursday: ["Thursday Triumph", "Overcoming Songs", "Strength Music"],
    friday: ["Friday Freedom", "Liberating Beats", "Joyful Recovery"],
    saturday: ["Saturday Soothe", "Comfort Songs", "Healing Music"],
    sunday: ["Sunday Serenity", "Peaceful Recovery", "Restorative Sounds"]
  }
};

export default function HomePage() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [suggestedPlaylist, setSuggestedPlaylist] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedPhrase = localStorage.getItem(`dailyPhrase_${today}`);
    
    if (storedPhrase) {
      setCurrentPhrase(storedPhrase);
    } else {
      const now = new Date();
      const hour = now.getHours();
      let timeOfDay: keyof typeof motivationalPhrases = "morning";
      if (hour >= 12 && hour < 18) timeOfDay = "afternoon";
      else if (hour >= 18) timeOfDay = "evening";

      const phrases = motivationalPhrases[timeOfDay];
      const newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(newPhrase);
      localStorage.setItem(`dailyPhrase_${today}`, newPhrase);
      setCurrentTime(timeOfDay);
    }
  }, []);

  const generateNewPhrase = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const allPhrases = Object.values(motivationalPhrases).flat();
      const newPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
      setCurrentPhrase(newPhrase);
      setIsAnimating(false);
    }, 500);
  };

  const handleNeedMotivation = () => {
    const phrases = [
      "Você é mais forte do que imagina!",
      "Vamos respirar juntos por 1 minuto?",
      "Cada pequeno passo conta. Continue!"
    ];
    setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    const dayOfWeek = new Date().toLocaleLowerCase('en', { weekday: 'long' });
    const playlist = playlists[mood as keyof typeof playlists][dayOfWeek as keyof typeof playlists.animado] || [];
    setSuggestedPlaylist(playlist);
  };

  return (
    <div 
      className="min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)' }}
    >
      <div className="min-h-screen bg-black/30 p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Premium Badge */}
          <div className="text-center">
            <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <Star className="w-4 h-4 mr-1" />
              Desbloqueie a experiência completa
            </Badge>
          </div>

          {/* Mood Question */}
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardContent className="p-6 text-center">
              <Music className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-light mb-4">Como você está se sentindo hoje? 😊</p>
              <div className="flex flex-wrap justify-center gap-2">
                {moodOptions.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => handleMoodSelect(option.value)}
                    variant={selectedMood === option.value ? "default" : "outline"}
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    {option.emoji} {option.label}
                  </Button>
                ))}
              </div>
              {selectedMood && suggestedPlaylist.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Sugestão de playlist para hoje:</p>
                  <div className="space-y-1">
                    {suggestedPlaylist.map((song, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Play className="w-4 h-4 text-green-500" />
                        {song}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Daily Phrase */}
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <p className={`text-lg font-light leading-relaxed transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {currentPhrase}
              </p>
              <Button 
                onClick={generateNewPhrase} 
                variant="outline" 
                size="sm" 
                className="mt-4"
                disabled={isAnimating}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isAnimating ? 'animate-spin' : ''}`} />
                Gerar nova frase
              </Button>
            </CardContent>
          </Card>

          {/* Need Motivation Button */}
          <Button
            onClick={handleNeedMotivation}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4"
            size="lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Preciso de ânimo agora
          </Button>

          {/* Quick Tips Carousel */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-white">Dicas rápidas para seu bem-estar</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {quickTips.map((tip, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white/90 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-sm">{tip}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Premium CTA */}
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-6 text-center">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" alt="Premium benefits" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">Versão Premium</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Você merece se sentir bem todos os dias. A versão premium é para cuidar de você por inteiro.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Apenas R$9,99 para sempre
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}