import React from 'react';

export default function CarWashPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Робомойка</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Автоматическая мойка</h2>
        <p className="mb-4">
          Наша робомойка обеспечивает качественную и бережную мойку вашего автомобиля. 
          Современное оборудование и качественные моющие средства гарантируют безупречный результат.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Услуги мойки</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Комплексная мойка</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Мойка кузова</li>
              <li>Мойка колес</li>
              <li>Сушка</li>
              <li>Обработка шин</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Дополнительные услуги</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Химчистка салона</li>
              <li>Полировка кузова</li>
              <li>Чернение шин</li>
              <li>Обработка пластика</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Преимущества нашей мойки</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Современное оборудование</li>
          <li>Бережная мойка</li>
          <li>Качественные моющие средства</li>
          <li>Быстрое обслуживание</li>
          <li>Доступные цены</li>
        </ul>
      </section>
    </div>
  );
} 