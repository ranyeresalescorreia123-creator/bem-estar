"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Heart } from "lucide-react";
import { useState } from "react";

const allPhrases = [
  "Você é mais forte do que imagina!",
  "Cada dia é uma nova oportunidade.",
  "Ame-se primeiro.",
  "Foco no objetivo.",
  "Confie no universo.",
  "Encontre paz dentro.",
  "Trabalhe com paixão.",
  "Respire fundo e continue.",
  "Você merece ser feliz.",
  "O sucesso é seu."
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    if (!query.trim()) return;
    const filtered = allPhrases.filter(phrase => 
      phrase.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Buscar Frases</h1>
          <p className="text-muted-foreground">Encontre frases por palavras-chave</p>
        </div>

        <div className="flex space-x-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite uma palavra-chave..."
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button onClick={handleSearch}>
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Resultados ({results.length})</h2>
            {results.map((phrase, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <p className="text-sm mb-2">{phrase}</p>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Favoritar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center text-muted-foreground">
            Nenhuma frase encontrada para "{query}"
          </div>
        )}
      </div>
    </div>
  );
}