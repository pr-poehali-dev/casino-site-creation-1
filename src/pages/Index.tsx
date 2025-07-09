import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

  const games = [
    {
      id: 1,
      name: "Золотые Фрукты",
      type: "Слот",
      jackpot: "125,000₽",
      image: "/img/4d52dbab-9226-442a-ab4a-769b8be40b26.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Пиратские Сокровища",
      type: "Слот",
      jackpot: "89,500₽",
      image: "/img/c8400abe-2051-472c-b9b3-9da292977d95.jpg",
      popular: false,
    },
    {
      id: 3,
      name: "Алмазный Покер",
      type: "Карты",
      jackpot: "56,200₽",
      image: "/img/4d52dbab-9226-442a-ab4a-769b8be40b26.jpg",
      popular: true,
    },
    {
      id: 4,
      name: "Рулетка Премиум",
      type: "Рулетка",
      jackpot: "234,800₽",
      image: "/img/c8400abe-2051-472c-b9b3-9da292977d95.jpg",
      popular: false,
    },
    {
      id: 5,
      name: "Космический Слот",
      type: "Слот",
      jackpot: "167,300₽",
      image: "/img/4d52dbab-9226-442a-ab4a-769b8be40b26.jpg",
      popular: true,
    },
    {
      id: 6,
      name: "Блэкджек VIP",
      type: "Карты",
      jackpot: "78,900₽",
      image: "/img/c8400abe-2051-472c-b9b3-9da292977d95.jpg",
      popular: false,
    },
  ];

  const openDemo = (gameName: string) => {
    setSelectedGame(gameName);
    setIsDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" className="text-yellow-400" size={32} />
              <h1 className="text-2xl font-bold text-white">ROYAL CASINO</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#games"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Игры
              </a>
              <a
                href="#slots"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Слоты
              </a>
              <a
                href="#support"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-purple-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Авторизация
                    </DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                      <TabsTrigger value="login" className="text-white">
                        Вход
                      </TabsTrigger>
                      <TabsTrigger value="register" className="text-white">
                        Регистрация
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-slate-800 border-purple-500/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white">
                          Пароль
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          className="bg-slate-800 border-purple-500/20 text-white"
                        />
                      </div>
                      <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                        Войти
                      </Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="reg-email"
                          type="email"
                          className="bg-slate-800 border-purple-500/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password" className="text-white">
                          Пароль
                        </Label>
                        <Input
                          id="reg-password"
                          type="password"
                          className="bg-slate-800 border-purple-500/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-confirm" className="text-white">
                          Подтвердите пароль
                        </Label>
                        <Input
                          id="reg-confirm"
                          type="password"
                          className="bg-slate-800 border-purple-500/20 text-white"
                        />
                      </div>
                      <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                        Зарегистрироваться
                      </Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
                <Icon name="CreditCard" className="mr-2" size={16} />
                Пополнить
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ROYAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                CASINO
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Испытайте удачу в лучших играх казино с демо-режимом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold text-lg px-8"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Играть сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8"
              >
                <Icon name="Gamepad2" className="mr-2" size={20} />
                Демо-режим
              </Button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1.2M+</div>
                <div className="text-sm">Игроков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm">Игр</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Популярные игры
            </h3>
            <p className="text-gray-300 text-lg">
              Выберите любимую игру и начните играть в демо-режиме
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card
                key={game.id}
                className="bg-slate-800/50 border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {game.popular && (
                      <Badge className="absolute top-2 right-2 bg-yellow-400 text-black">
                        <Icon name="Star" size={12} className="mr-1" />
                        Популярное
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white mb-2">{game.name}</CardTitle>
                  <p className="text-gray-400 text-sm mb-3">{game.type}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-yellow-400 font-bold">
                      <Icon name="Trophy" size={16} className="inline mr-1" />
                      {game.jackpot}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500"
                      onClick={() => openDemo(game.name)}
                    >
                      <Icon name="Play" className="mr-2" size={16} />
                      Демо
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    >
                      <Icon name="CreditCard" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="bg-slate-900 border-purple-500/20 max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">
              <Icon name="Gamepad2" className="inline mr-2" size={20} />
              Демо-режим: {selectedGame}
            </DialogTitle>
          </DialogHeader>
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <div className="mb-6">
              <Icon
                name="Dices"
                className="text-yellow-400 mx-auto mb-4"
                size={64}
              />
              <h4 className="text-white text-2xl font-bold mb-2">
                Игра загружается...
              </h4>
              <p className="text-gray-400">
                Демо-режим позволяет играть без реальных денег
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 mb-6">
              <div className="text-4xl mb-4">🎰 🎯 🎲</div>
              <div className="text-yellow-400 text-lg font-bold mb-2">
                Демо-баланс: 10,000₽
              </div>
              <div className="text-gray-300 text-sm">
                Виртуальные деньги для демо-игры
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Icon name="Play" className="mr-2" size={16} />
                Начать демо
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <Icon name="Settings" className="mr-2" size={16} />
                Настройки
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gem" className="text-yellow-400" size={24} />
                <h5 className="text-white font-bold">ROYAL CASINO</h5>
              </div>
              <p className="text-gray-400 text-sm">
                Лучшее онлайн-казино с демо-режимом
              </p>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Игры</h6>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Слоты</li>
                <li>Покер</li>
                <li>Рулетка</li>
                <li>Блэкджек</li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Поддержка</h6>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Чат 24/7</li>
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Правила</li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Безопасность</h6>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Лицензия</li>
                <li>Ответственная игра</li>
                <li>Конфиденциальность</li>
                <li>SSL защита</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-6 text-center text-gray-400 text-sm">
            © 2024 Royal Casino. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
