"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Target, Shield, Dove, Leaf, Briefcase, Star } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "motivacao", name: "Motivação Pessoal", icon: Brain, color: "bg-blue-500", phrases: ["Você é capaz de tudo!", "Cada dia é uma nova chance."] },
  { id: "autoestima", name: "Autoestima / Amor Próprio", icon: Heart, color: "bg-pink-500", phrases: ["Você é único e especial.", "Ame-se primeiro."] },
  { id: "sucesso", name: "Sucesso e Foco", icon: Target, color: "bg-green-500", phrases: ["Foco no objetivo.", "O sucesso é seu."] },
  { id: "supera", name: "Superação e Força", icon: Shield, color: "bg-purple-500", phrases: ["Você é mais forte.", "Supere os desafios."] },
  { id: "fe", name: "Espiritualidade / Fé", icon: Dove, color: "bg-indigo-500", phrases: ["Confie no universo.", "Sua fé move montanhas."] },
  { id: "paz", name: "Paz Interior / Gratidão", icon: Leaf, color: "bg-teal-500", phrases: ["Encontre paz dentro.", "Seja grato."] },
  { id: "trabalho", name: "Trabalho e Produtividade", icon: Briefcase, color: "bg-orange-500", phrases: ["Trabalhe com paixão.", "Produtividade é chave."] }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Categorias de Frases</h1>
          <p className="text-muted-foreground">Escolha uma categoria para se inspirar</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all hover:scale-105 ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sm text-center">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.phrases.slice(0, 2).map((phrase, index) => (
                      <p key={index} className="text-xs text-muted-foreground text-center">{phrase}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedCategory && (
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6 text-center">
              <Badge className="mb-4">Frase da Categoria</Badge>
              <p className="text-lg font-medium">
                {categories.find(c => c.id === selectedCategory)?.phrases[0]}
              </p>
              <Button className="mt-4" variant="outline">
                Ver mais frases
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}