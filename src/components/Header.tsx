import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;