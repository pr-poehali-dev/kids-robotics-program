import React from 'react';
import Icon from '@/components/ui/icon';

const ResultsSection = () => {
  return (
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
  );
};

export default ResultsSection;