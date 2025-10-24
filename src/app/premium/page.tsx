"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Music, Bell, Moon, TrendingUp, Smile, Meh, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function PremiumPage() {
  const [mood, setMood] = useState<string | null>(null);
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  useEffect(() => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = new Date().getDay();
    setDayOfWeek(days[today]);
  }, []);

  const getPlaylist = (mood: string, day: string) => {
    const playlists: { [key: string]: { [key: string]: string[] } } = {
      monday: {
        animado: ["Happy - Pharrell Williams", "Can't Stop the Feeling! - Justin Timberlake", "Uptown Funk - Mark Ronson ft. Bruno Mars"],
        tranquilo: ["Weightless - Marconi Union", "River Flows in You - Yiruma", "Clair de Lune - Debussy"],
        energia: ["Eye of the Tiger - Survivor", "We Will Rock You - Queen", "Thunderstruck - AC/DC"]
      },
      tuesday: {
        animado: ["Walking on Sunshine - Katrina and the Waves", "Don't Stop Believin' - Journey", "Shake It Off - Taylor Swift"],
        tranquilo: ["Moonlight Sonata - Beethoven", "Nocturne Op. 9 No. 2 - Chopin", "The Night We Met - Lord Huron"],
        energia: ["Livin' on a Prayer - Bon Jovi", "You Give Love a Bad Name - Bon Jovi", "Jump - Van Halen"]
      },
      wednesday: {
        animado: ["I Wanna Dance with Somebody - Whitney Houston", "Dancing Queen - ABBA", "Celebration - Kool & The Gang"],
        tranquilo: ["Comptine d'un autre été - Yann Tiersen", "Hallelujah - Leonard Cohen", "Skinny Love - Bon Iver"],
        energia: ["Welcome to the Jungle - Guns N' Roses", "Back in Black - AC/DC", "Highway to Hell - AC/DC"]
      },
      thursday: {
        animado: ["Happy Together - The Turtles", "Sugar - Maroon 5", "Shut Up and Dance - Walk the Moon"],
        tranquilo: ["Fields of Gold - Sting", "Wonderful Tonight - Eric Clapton", "At Last - Etta James"],
        energia: ["Breaking the Law - Judas Priest", "Run to the Hills - Iron Maiden", "The Final Countdown - Europe"]
      },
      friday: {
        animado: ["Friday - Rebecca Black", "Party in the U.S.A. - Miley Cyrus", "Blurred Lines - Robin Thicke"],
        tranquilo: ["Friday I'm in Love - The Cure", "Careless Whisper - Wham!", "Take On Me - a-ha"],
        energia: ["Kickstart My Heart - Mötley Crüe", "Smells Like Teen Spirit - Nirvana", "Welcome to the Black Parade - My Chemical Romance"]
      },
      saturday: {
        animado: ["Saturday - Twenty One Pilots", "Wake Me Up - Avicii", "Levels - Avicii"],
        tranquilo: ["Saturday in the Park - Chicago", "Dream On - Aerosmith", "More Than Words - Extreme"],
        energia: ["Saturday Night's Alright for Fighting - Elton John", "Livin' After Midnight - Judas Priest", "Rock You Like a Hurricane - Scorpions"]
      },
      sunday: {
        animado: ["Sunday Morning - Maroon 5", "Sunday Bloody Sunday - U2", "Waiting for Sunday - Ladytron"],
        tranquilo: ["Sunday - Bloc Party", "Sunday Morning Coming Down - Johnny Cash", "A Sunday Kind of Love - Etta James"],
        energia: ["Sunday - Sonic Youth", "Sunday Morning - The Velvet Underground", "Rest Day - Foo Fighters"]
      }
    };
    return playlists[day]?.[mood] || [];
  };

  const moodOptions = [
    { value: "animado", label: "Animado 😊", icon: Smile },
    { value: "tranquilo", label: "Tranquilo 😌", icon: Meh },
    { value: "energia", label: "Preciso de Energia 💪", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg px-4 py-2">
            <Star className="w-5 h-5 mr-2" />
            Premium
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Music className="w-6 h-6 mr-2 text-pink-500" />
              Sugestões de Música Personalizadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Como você está se sentindo hoje? Escolha seu ânimo e receba sugestões de músicas baseadas no dia da semana!
            </p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {moodOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={mood === option.value ? "default" : "outline"}
                  onClick={() => setMood(option.value)}
                  className="justify-start"
                >
                  <option.icon className="w-4 h-4 mr-2" />
                  {option.label}
                </Button>
              ))}
            </div>
            {mood && (
              <div>
                <h4 className="font-semibold mb-2">Playlist sugerida para hoje ({dayOfWeek}):</h4>
                <ul className="space-y-1">
                  {getPlaylist(mood, dayOfWeek).map((song, index) => (
                    <li key={index} className="text-sm bg-gray-100 p-2 rounded">
                      🎵 {song}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-blue-500" />
              Modo Conversa com Lume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" alt="Lume" className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Um chatbot empático que conversa com você quando estiver triste ou sem ânimo.
            </p>
            <Button className="w-full">
              Conversar com Lume
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Music className="w-6 h-6 mr-2 text-green-500" />
              Sons Ambiente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400" alt="Nature sounds" className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Sons para foco ou relaxamento.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">Floresta</Button>
              <Button variant="outline" size="sm">Chuva</Button>
              <Button variant="outline" size="sm">Ondas</Button>
              <Button variant="outline" size="sm">Foco</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-6 h-6 mr-2 text-orange-500" />
              Notificações Diárias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" alt="Motivation notifications" className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-sm text-muted-foreground">
              Mensagens positivas e sugestões de treino leve todos os dias.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Moon className="w-6 h-6 mr-2 text-indigo-500" />
              Modo Escuro Relaxante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400" alt="Dark mode" className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-sm text-muted-foreground">
              Interface especial para momentos de relaxamento.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-purple-500" />
              Registro de Humor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" alt="Mood tracking" className="w-full h-32 object-cover rounded-lg mb-4" />
            <p className="text-sm text-muted-foreground">
              Acompanhe seu progresso emocional diariamente.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}