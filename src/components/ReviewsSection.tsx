import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  return (
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
  );
};

export default ReviewsSection;