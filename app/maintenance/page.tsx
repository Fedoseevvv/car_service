import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Техническое обслуживание</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Регламентное ТО</h2>
        <p className="mb-4">
          Регулярное техническое обслуживание - залог долгой и бесперебойной работы вашего автомобиля. 
          Мы предлагаем полный спектр услуг по ТО в соответствии с рекомендациями производителя.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Наши услуги по ТО включают:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Замена масла и фильтров</li>
          <li>Проверка и регулировка тормозной системы</li>
          <li>Диагностика подвески</li>
          <li>Проверка и замена ремней и цепей</li>
          <li>Проверка жидкостей и их замена</li>
          <li>Диагностика электронных систем</li>
        </ul>
      </section>
    </div>
  );
} 