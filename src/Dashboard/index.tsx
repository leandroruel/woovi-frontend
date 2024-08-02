import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center">
      <div className="bg-gray-900 text-white w-[360px] p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-2">
            <span>Day trade</span>
            <Switch id="day-trade" />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-400">Minha carteira</h2>
          <div className="text-3xl font-bold">R$ 235.513,78</div>
          <div className="text-green-500">+R$ 36.074,59 15,31%</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-gray-400">Hoje</h3>
            <div className="text-xl">R$ 3.168,04</div>
            <div className="text-green-500">2,14%</div>
          </div>
          <div>
            <h3 className="text-gray-400">IBOV</h3>
            <div className="text-xl">60.987,00 pts</div>
            <div className="text-green-500">1,23%</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <span>Saldo projetado</span>
            <span>R$ 115,38</span>
          </div>
          <div className="flex justify-between">
            <span>Limite disponível</span>
            <span>R$ 28.942,10</span>
          </div>
          <a href="#" className="text-blue-500">
            Ver mais detalhes
          </a>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Ações</h3>
          <div className="flex justify-between mb-2">
            <span>Volume</span>
            <span>R$ 136.598,00</span>
          </div>
          <div className="flex justify-between">
            <span>Distribuição</span>
            <span>58%</span>
          </div>
        </div>
      </div>
    </div>
  )
}