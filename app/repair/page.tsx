import React from 'react';

export default function RepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Ремонт автомобиля</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Виды ремонта</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Текущий ремонт</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ремонт двигателя</li>
              <li>Ремонт подвески</li>
              <li>Ремонт тормозной системы</li>
              <li>Ремонт рулевого управления</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Капитальный ремонт</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Капитальный ремонт двигателя</li>
              <li>Капитальный ремонт КПП</li>
              <li>Капитальный ремонт ходовой части</li>
              <li>Кузовной ремонт</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Наши преимущества</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Опытные мастера с многолетним стажем</li>
          <li>Современное диагностическое оборудование</li>
          <li>Гарантия на все виды работ</li>
          <li>Использование качественных запчастей</li>
          <li>Прозрачная система ценообразования</li>
        </ul>
      </section>
    </div>
  );
} 