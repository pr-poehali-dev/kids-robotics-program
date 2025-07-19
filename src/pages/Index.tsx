import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center transform rotate-12 animate-pulse">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">PROстранство</h1>
                <p className="text-xs text-gray-500">Цифровое творчество</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#technologies" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Технологии</a>
              <a href="#programs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Программы</a>
              <a href="#goals" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Цели</a>
              <a href="#results" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Результаты</a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg">
              <Icon name="Rocket" className="mr-2" size={16} />
              Запустить обучение
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 animate-pulse">
                    🚀 Инновационное обучение
                  </Badge>
                  <Badge className="bg-pink-100 text-pink-700 border-pink-200 animate-pulse delay-100">
                    🎨 Цифровое творчество
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 animate-pulse delay-200">
                    🎮 Игровые технологии
                  </Badge>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Создавай</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-pulse">
                    будущее
                  </span>
                  <br />
                  <span className="text-gray-900">сегодня</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Освой востребованные цифровые навыки: программирование на Python, 3D-моделирование в Blender, 
                  создание игр в Roblox, дизайн в Photoshop и многое другое!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 shadow-xl">
                  <Icon name="PlayCircle" className="mr-2" size={24} />
                  Начать путешествие
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 shadow-lg">
                  <Icon name="GraduationCap" className="mr-2" size={24} />
                  Для преподавателей
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-gray-600">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-gray-600">Технологий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/img/7388ef2a-ab00-42d8-828b-d0244c60be93.jpg" 
                  alt="Цифровой наставник" 
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full opacity-50 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Технологии будущего</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучаем самые востребованные инструменты современного цифрового мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Code" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Python</CardTitle>
                <CardDescription>Программирование</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Основы программирования, алгоритмы, создание приложений
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Box" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Blender 3D</CardTitle>
                <CardDescription>3D-моделирование</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Создание 3D-моделей, анимации, визуализация
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Gamepad2" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Roblox</CardTitle>
                <CardDescription>Разработка игр</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Создание игр, Lua-программирование, монетизация
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Photoshop</CardTitle>
                <CardDescription>Дизайн</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Графический дизайн, обработка изображений, арт
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Blocks" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">LEGO Robotics</CardTitle>
                <CardDescription>Робототехника</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Конструирование роботов, программирование движений
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Pickaxe" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Minecraft Education</CardTitle>
                <CardDescription>Обучающие игры</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Программирование в игре, логика, алгоритмы
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Puzzle" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Scratch</CardTitle>
                <CardDescription>Основы кода</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Визуальное программирование, первые алгоритмы
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Monitor" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Web-разработка</CardTitle>
                <CardDescription>Сайты и приложения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  HTML, CSS, JavaScript - создание веб-проектов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Образовательные программы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Персональные траектории развития для каждого возраста и уровня
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6">
                  <Icon name="Baby" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Первые шаги</CardTitle>
                <CardDescription className="text-lg">6-8 лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Scratch - основы логики</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">LEGO конструирование</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700">Minecraft Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-700">Цифровое рисование</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-blue-600">2000₽</div>
                  <div className="text-sm text-gray-500">за занятие</div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">⭐ Популярно</Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <CardHeader className="relative pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-6">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Творческий код</CardTitle>
                <CardDescription className="text-lg">9-12 лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Python основы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Roblox Studio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-700">Blender 3D основы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-700">Photoshop дизайн</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-purple-600">1800₽</div>
                  <div className="text-sm text-gray-500">за занятие (группа)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-orange-50 to-red-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mb-6">
                  <Icon name="Trophy" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Про-уровень</CardTitle>
                <CardDescription className="text-lg">13+ лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Python продвинутый</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Профессиональный Blender</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-700">Web-разработка</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-700">Портфолио проектов</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-orange-600">2500₽</div>
                  <div className="text-sm text-gray-500">за занятие</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Программа для педагогов</CardTitle>
                <CardDescription className="text-lg">Обучение современным методикам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Изучите передовые образовательные технологии и получите сертификацию 
                  для преподавания цифровых навыков детям
                </p>
                <div className="text-3xl font-bold text-emerald-600">7500₽</div>
                <div className="text-sm text-gray-500">полный курс + сертификат</div>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                  Подробнее о программе
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900">Наша миссия</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Brain" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Развитие креативного мышления</h3>
                    <p className="text-gray-600">Учим не просто кодить, а мыслить творчески и находить нестандартные решения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Lightbulb" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Практические навыки будущего</h3>
                    <p className="text-gray-600">Готовим к профессиям, которые будут востребованы в цифровой экономике</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Users" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Комьюнити единомышленников</h3>
                    <p className="text-gray-600">Создаем среду для обмена идеями и совместного творчества</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">Цели PROстранства</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">выпускников до 2025 года</div>
                </div>
                <hr className="border-purple-200" />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-green-500" size={20} />
                    <span className="text-gray-700">Подготовить к IT-профессиям</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-green-500" size={20} />
                    <span className="text-gray-700">Развить предпринимательское мышление</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-green-500" size={20} />
                    <span className="text-gray-700">Создать портфолио проектов</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Результаты наших студентов</h2>
            <p className="text-xl text-gray-600">Что достигают выпускники PROстранства</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name="Code" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Программирование</h3>
              <p className="text-gray-600">Создают собственные приложения и игры на Python, JavaScript</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name="Box" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3D-моделирование</h3>
              <p className="text-gray-600">Профессиональные 3D-модели и анимации в Blender</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name="Gamepad2" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Разработка игр</h3>
              <p className="text-gray-600">Публикуют игры в Roblox с тысячами игроков</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name="Palette" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Дизайн</h3>
              <p className="text-gray-600">Профессиональные работы в Photoshop и веб-дизайне</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">🏆 Достижения</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <p className="text-gray-600">выпускников поступают в IT-вузы</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">💰 Заработок</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <p className="text-gray-600">начинают зарабатывать на проектах</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">🚀 Проекты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <p className="text-gray-600">завершенных проектов в портфолио</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Отзывы учеников и родителей</h2>
            <p className="text-xl text-gray-600">Истории успеха наших студентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">А</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александра, 14 лет</CardTitle>
                    <CardDescription>Ученица Pro-уровня</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Создала свою первую игру в Roblox за 3 месяца! Теперь у неё уже 500 игроков. 
                  Планирую изучать геймдизайн в университете."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">М</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мама Михаила, 10 лет</CardTitle>
                    <CardDescription>Родитель ученика</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Миша полностью изменился! Теперь он не просто играет в игры, а создаёт их. 
                  Появилась цель в жизни и уверенность в будущем."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Д</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий, 16 лет</CardTitle>
                    <CardDescription>Выпускник</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Благодаря PROстранству поступил в МГУ на факультет ВМК. 
                  Портфолио проектов сыграло решающую роль при поступлении!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Payment Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900">Начните путешествие в мир технологий</h2>
              <p className="text-xl text-gray-600">
                Записывайтесь на бесплатную консультацию и узнайте, какая программа подходит именно вам!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Телефон</div>
                    <div className="text-gray-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Email</div>
                    <div className="text-gray-600">hello@prostranstvo.digital</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Telegram</div>
                    <div className="text-gray-600">@prostranstvo_digital</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-white shadow-2xl border-2 border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">🎯 Бесплатная консультация</CardTitle>
                  <CardDescription className="text-center text-purple-100">
                    Определим ваш уровень и подберём идеальную программу
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Имя ученика</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Введите имя"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Возраст</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
                        <option>6-8 лет</option>
                        <option>9-12 лет</option>
                        <option>13-16 лет</option>
                        <option>17+ лет</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон родителя</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Интересующие технологии</label>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Python</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Roblox</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Blender</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm text-gray-600">Photoshop</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg shadow-lg">
                    <Icon name="Rocket" className="mr-2" size={20} />
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">💳 Быстрая оплата</CardTitle>
                  <CardDescription className="text-center text-emerald-100">
                    Оплатите занятие или курс прямо сейчас
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/30">
                      <Icon name="CreditCard" className="mr-2" size={16} />
                      1 занятие
                    </Button>
                    <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/30">
                      <Icon name="Package" className="mr-2" size={16} />
                      Абонемент
                    </Button>
                  </div>
                  <Button className="w-full bg-white text-emerald-600 hover:bg-gray-50">
                    Перейти к оплате
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PROстранство</h3>
                  <p className="text-xs text-gray-400">Цифровое творчество</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Образовательная платформа для изучения современных цифровых технологий
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Технологии</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Python</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Blender 3D</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Roblox</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Photoshop</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">LEGO Robotics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Программы</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Первые шаги (6-8 лет)</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Творческий код (9-12 лет)</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Про-уровень (13+ лет)</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Для педагогов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>hello@prostranstvo.digital</li>
                <li>@prostranstvo_digital</li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PROстранство. Создаём будущее вместе с вами! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;