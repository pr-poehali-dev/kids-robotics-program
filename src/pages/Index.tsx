import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Code" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">PROстранство</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-700 hover:text-orange-500 transition-colors">Программы</a>
              <a href="#goals" className="text-gray-700 hover:text-orange-500 transition-colors">Цели</a>
              <a href="#results" className="text-gray-700 hover:text-orange-500 transition-colors">Результаты</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  Обучение программированию для детей
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Создавай свои 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500"> игры</span> 
                  <br />на Scratch
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Индивидуальные авторские занятия по программированию на Scratch. 
                  Развиваем логическое мышление и творческие способности через создание игр и анимаций.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                  <Icon name="Users" className="mr-2" size={20} />
                  Для педагогов
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Довольных учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Созданных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Года опыта</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/07158cee-ce9e-4c86-8eaf-c264f7d024e4.jpg" 
                  alt="Робот-персонаж" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Программы обучения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Индивидуальный подход к каждому ученику с учетом возраста и уровня подготовки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" className="text-orange-500" size={24} />
                </div>
                <CardTitle>Начальный уровень</CardTitle>
                <CardDescription>6-8 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Основы Scratch</li>
                  <li>• Создание простых анимаций</li>
                  <li>• Интерактивные истории</li>
                  <li>• Развитие логики</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-blue-500" size={24} />
                </div>
                <CardTitle>Средний уровень</CardTitle>
                <CardDescription>9-12 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Создание игр</li>
                  <li>• Сложные алгоритмы</li>
                  <li>• Работа с переменными</li>
                  <li>• Создание персонажей</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-green-500" size={24} />
                </div>
                <CardTitle>Продвинутый уровень</CardTitle>
                <CardDescription>13+ лет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Сложные проекты</li>
                  <li>• Мультиплеер игры</li>
                  <li>• Подготовка к Python</li>
                  <li>• Портфолио проектов</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши цели</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Brain" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Развитие логического мышления</h3>
                    <p className="text-gray-600">Учим детей мыслить алгоритмически и решать задачи пошагово</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Креативность и воображение</h3>
                    <p className="text-gray-600">Поощряем творческий подход к созданию уникальных проектов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Достижение целей</h3>
                    <p className="text-gray-600">Учим ставить задачи и последовательно их выполнять</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Миссия PROстранства</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Мы создаем пространство, где каждый ребенок может открыть для себя мир программирования 
                через игру и творчество. Наша задача — не просто научить кодить, а показать, 
                как технологии могут стать инструментом для воплощения самых смелых идей.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Индивидуальный подход</div>
                  <div className="text-sm text-gray-600">К каждому ученику</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Результаты обучения</h2>
            <p className="text-xl text-gray-600">Что получит ваш ребенок после курса</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" className="text-orange-500" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Навыки программирования</h3>
              <p className="text-gray-600 text-sm">Понимание основ кода и алгоритмов</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Puzzle" className="text-blue-500" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Логическое мышление</h3>
              <p className="text-gray-600 text-sm">Умение решать сложные задачи</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" className="text-green-500" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Творческие проекты</h3>
              <p className="text-gray-600 text-sm">Портфолио собственных игр</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-purple-500" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Уверенность в себе</h3>
              <p className="text-gray-600 text-sm">Готовность к новым вызовам</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Стоимость обучения</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат занятий</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Индивидуальные</CardTitle>
                <CardDescription>Персональный подход</CardDescription>
                <div className="text-3xl font-bold text-orange-500 mt-4">2000₽</div>
                <div className="text-sm text-gray-600">за занятие</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Индивидуальная программа</li>
                  <li>✓ Гибкое расписание</li>
                  <li>✓ Максимум внимания</li>
                  <li>✓ Быстрый прогресс</li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Популярно</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Мини-группы</CardTitle>
                <CardDescription>2-3 ученика</CardDescription>
                <div className="text-3xl font-bold text-blue-500 mt-4">1500₽</div>
                <div className="text-sm text-gray-600">за занятие</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Общение с ровесниками</li>
                  <li>✓ Командная работа</li>
                  <li>✓ Соревновательный элемент</li>
                  <li>✓ Выгодная цена</li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Для педагогов</CardTitle>
                <CardDescription>Обучение методике</CardDescription>
                <div className="text-3xl font-bold text-green-500 mt-4">5000₽</div>
                <div className="text-sm text-gray-600">за курс</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Методические материалы</li>
                  <li>✓ Готовые уроки</li>
                  <li>✓ Поддержка коллег</li>
                  <li>✓ Сертификат</li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы родителей</h2>
            <p className="text-xl text-gray-600">Что говорят о нашем обучении</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold">М</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Петрова</CardTitle>
                    <CardDescription>Мама Артема, 8 лет</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Артем в восторге от занятий! Создал уже 5 игр и постоянно показывает новые проекты. 
                  Преподаватель находит подход к каждому ребенку."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-500 font-bold">А</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Смирнова</CardTitle>
                    <CardDescription>Мама Софии, 10 лет</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "София стала более усидчивой и внимательной. Программирование развивает логику 
                  лучше любых других занятий. Очень довольны результатом!"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-bold">Д</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Козлов</CardTitle>
                    <CardDescription>Папа Максима, 12 лет</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Максим мечтает стать программистом, и эти занятия - отличный старт. 
                  Индивидуальный подход и качественное объяснение материала."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 mb-8">
                Готовы начать обучение? Запишитесь на бесплатное пробное занятие!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@prostranstvo.edu</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-green-500" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telegram</div>
                    <div className="text-gray-600">@prostranstvo_edu</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle>Запишитесь на пробное занятие</CardTitle>
                <CardDescription>Это бесплатно и ни к чему не обязывает</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Имя ребенка</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Введите имя"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Возраст</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Сколько лет"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Телефон родителя</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Предпочтительное время</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Утром (9:00 - 12:00)</option>
                    <option>Днем (12:00 - 16:00)</option>
                    <option>Вечером (16:00 - 19:00)</option>
                  </select>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white">
                  <Icon name="Send" className="mr-2" size={16} />
                  Записаться на пробное занятие
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="Code" className="text-white" size={16} />
                </div>
                <h3 className="text-xl font-bold">PROстранство</h3>
              </div>
              <p className="text-gray-400">
                Образовательное пространство для развития навыков программирования у детей
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Начальный уровень</li>
                <li>Средний уровень</li>
                <li>Продвинутый уровень</li>
                <li>Для педагогов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@prostranstvo.edu</li>
                <li>@prostranstvo_edu</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PROстранство. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;