"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Palette, Type, Plus, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("default");
  const [font, setFont] = useState("default");
  const [newPhrase, setNewPhrase] = useState("");
  const [newPhraseCategory, setNewPhraseCategory] = useState("");

  const handleAddPhrase = () => {
    if (newPhrase.trim()) {
      // Add to local storage or state
      alert("Frase adicionada com sucesso!");
      setNewPhrase("");
      setNewPhraseCategory("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Configurações</h1>
          <p className="text-muted-foreground">Personalize sua experiência</p>
        </div>

        {/* Theme Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Tema e Aparência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Modo Escuro</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div>
              <Label>Cor do Tema</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Padrão</SelectItem>
                  <SelectItem value="pink">Rosa</SelectItem>
                  <SelectItem value="blue">Azul</SelectItem>
                  <SelectItem value="gold">Dourado</SelectItem>
                  <SelectItem value="black">Preto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Font Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Type className="w-5 h-5 mr-2" />
              Fonte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Fonte Preferida</Label>
            <Select value={font} onValueChange={setFont}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Padrão</SelectItem>
                <SelectItem value="playfair">Playfair Display</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
                <SelectItem value="lobster">Lobster</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Add Custom Phrase */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Adicionar Frase Própria
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="phrase">Sua Frase</Label>
              <Textarea
                id="phrase"
                value={newPhrase}
                onChange={(e) => setNewPhrase(e.target.value)}
                placeholder="Digite sua frase motivacional..."
              />
            </div>
            <div>
              <Label>Categoria</Label>
              <Select value={newPhraseCategory} onValueChange={setNewPhraseCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="motivacao">Motivação Pessoal</SelectItem>
                  <SelectItem value="autoestima">Autoestima</SelectItem>
                  <SelectItem value="sucesso">Sucesso</SelectItem>
                  <SelectItem value="supera">Superação</SelectItem>
                  <SelectItem value="fe">Espiritualidade</SelectItem>
                  <SelectItem value="paz">Paz Interior</SelectItem>
                  <SelectItem value="trabalho">Trabalho</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAddPhrase} className="w-full">
              Adicionar Frase
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Notificações Diárias</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label>Categoria Favorita</Label>
              <Select defaultValue="motivacao">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="motivacao">Motivação</SelectItem>
                  <SelectItem value="autoestima">Autoestima</SelectItem>
                  <SelectItem value="sucesso">Sucesso</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}