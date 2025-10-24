import { Brain, Heart, Target, Shield, Sun, Leaf, Briefcase, Star } from "lucide-react";

const categories = [
  { id: "autoestima", name: "Autoestima", icon: Heart, color: "bg-red-500", phrases: ["Você é incrível!", "Acredite em si mesmo."] },
  { id: "sucesso", name: "Sucesso", icon: Target, color: "bg-green-500", phrases: ["O sucesso está chegando.", "Você merece o melhor."] },
  { id: "paz", name: "Paz Interior", icon: Shield, color: "bg-blue-500", phrases: ["Encontre sua paz.", "Respire fundo."] },
  { id: "fe", name: "Espiritualidade / Fé", icon: Sun, color: "bg-indigo-500", phrases: ["Confie no universo.", "Sua fé move montanhas."] },
  { id: "bemestar", name: "Bem-estar", icon: Leaf, color: "bg-teal-500", phrases: ["Cuide de si mesmo.", "Saúde é prioridade."] },
  { id: "carreira", name: "Carreira", icon: Briefcase, color: "bg-purple-500", phrases: ["Seu trabalho importa.", "Persista nos seus sonhos."] },
  { id: "relacionamentos", name: "Relacionamentos", icon: Star, color: "bg-pink-500", phrases: ["O amor está ao seu redor.", "Conecte-se com os outros."] },
  { id: "mente", name: "Saúde Mental", icon: Brain, color: "bg-orange-500", phrases: ["Sua mente é poderosa.", "Cuide dos seus pensamentos."] },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Categorias de Bem-Estar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-4`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.phrases[0]}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Explorar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}