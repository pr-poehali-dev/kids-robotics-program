import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramsSection = () => {
  return (
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
  );
};

export default ProgramsSection;