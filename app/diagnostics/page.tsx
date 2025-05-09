import React from 'react';

export default function DiagnosticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Диагностика автомобиля</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Компьютерная диагностика</h2>
        <p className="mb-4">
          Современная компьютерная диагностика позволяет быстро и точно определить причины неисправностей 
          в работе вашего автомобиля. Мы используем профессиональное оборудование для диагностики всех 
          систем автомобиля.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Виды диагностики</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Диагностика двигателя</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Проверка системы впрыска</li>
              <li>Диагностика системы зажигания</li>
              <li>Проверка датчиков</li>
              <li>Анализ работы систем управления</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Диагностика ходовой части</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Проверка подвески</li>
              <li>Диагностика рулевого управления</li>
              <li>Проверка тормозной системы</li>
              <li>Диагностика трансмиссии</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Преимущества нашей диагностики</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Современное диагностическое оборудование</li>
          <li>Опытные специалисты</li>
          <li>Быстрая и точная диагностика</li>
          <li>Подробный отчет о состоянии автомобиля</li>
          <li>Рекомендации по ремонту</li>
        </ul>
      </section>
    </div>
  );
} 