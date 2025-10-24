"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Heart } from "lucide-react";
import { useState } from "react";

const lumeResponses = [
  "Olá! Estou aqui para te ouvir. Como você está se sentindo hoje?",
  "Você é mais forte do que imagina. Vamos conversar sobre o que está te incomodando?",
  "Respire fundo comigo: inspire... expire... Você consegue!",
  "Cada dia é uma nova oportunidade. O que te faz sorrir?",
  "Lembre-se: você não está sozinho nessa jornada. Estou aqui com você.",
  "Vamos focar no positivo. O que deu certo hoje?",
  "Treinar 5 minutos já conta! Que tal uma caminhada curta?",
  "Você merece se sentir bem. Vamos pensar em algo que te anime."
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Sou Lume, seu amigo terapêutico. Como posso ajudar você hoje?", sender: "lume" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // Simulate Lume response
    setTimeout(() => {
      const response = lumeResponses[Math.floor(Math.random() * lumeResponses.length)];
      const lumeMessage = { id: Date.now() + 1, text: response, sender: "lume" };
      setMessages(prev => [...prev, lumeMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-4">
          <Avatar className="w-16 h-16 mx-auto mb-2">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" alt="Lume" className="w-full h-full object-cover rounded-full" />
            <AvatarFallback className="bg-pink-100 text-pink-600">
              <Heart className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-semibold">Lume</h1>
          <p className="text-sm text-muted-foreground">Seu amigo terapêutico</p>
        </div>

        <Card className="h-96 overflow-y-auto mb-4">
          <CardContent className="p-4 space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}