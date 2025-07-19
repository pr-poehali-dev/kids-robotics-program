import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;