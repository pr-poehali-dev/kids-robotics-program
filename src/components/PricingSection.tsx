import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  return (
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
  );
};

export default PricingSection;