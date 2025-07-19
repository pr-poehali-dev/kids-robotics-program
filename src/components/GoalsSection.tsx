import React from 'react';
import Icon from '@/components/ui/icon';

const GoalsSection = () => {
  return (
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
  );
};

export default GoalsSection;