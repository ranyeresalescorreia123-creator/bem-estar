"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Share2, Volume2 } from "lucide-react";
import { useState } from "react";

const favoritePhrases = [
  "Você é mais forte do que imagina!",
  "Cada dia é uma nova oportunidade.",
  "Ame-se primeiro.",
  "Foco no objetivo."
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(favoritePhrases);

  const removeFavorite = (phrase: string) => {
    setFavorites(favorites.filter(f => f !== phrase));
  };

  const speakPhrase = (phrase: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = 'pt-BR'; // Portuguese
      speechSynthesis.speak(utterance);
    }
  };

  const sharePhrase = (phrase: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Frase Motivacional',
        text: phrase,
      });
    } else {
      navigator.clipboard.writeText(phrase);
      alert('Frase copiada para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Minhas Frases</h1>
          <p className="text-muted-foreground">Suas frases favoritas</p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center text-muted-foreground">
            Você ainda não favoritou nenhuma frase.
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map((phrase, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <p className="text-sm mb-4">{phrase}</p>
                  <div className="flex justify-between">
                    <Button variant="ghost" size="sm" onClick={() => speakPhrase(phrase)}>
                      <Volume2 className="w-4 h-4 mr-2" />
                      Ouvir
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => sharePhrase(phrase)}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => removeFavorite(phrase)}>
                      <Heart className="w-4 h-4 mr-2 fill-current" />
                      Remover
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}