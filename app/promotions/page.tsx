import React from 'react';

export default function PromotionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Акции и специальные предложения</h1>
      
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Сезонное ТО</h2>
            <p className="mb-4">
              Скидка 15% на комплексное техническое обслуживание при записи через сайт.
              Действует до конца месяца.
            </p>
            <div className="text-sm text-orange-600">
              * Подробности уточняйте у менеджеров
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Комплексная диагностика</h2>
            <p className="mb-4">
              При заказе ремонта - компьютерная диагностика в подарок!
              Акция действует на все виды ремонтных работ.
            </p>
            <div className="text-sm text-orange-600">
              * При ремонте от 5000 рублей
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Мойка + ТО</h2>
            <p className="mb-4">
              При заказе технического обслуживания - скидка 20% на комплексную мойку.
              Предложение действительно в день проведения ТО.
            </p>
            <div className="text-sm text-orange-600">
              * Не суммируется с другими акциями
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Семейная скидка</h2>
            <p className="mb-4">
              При обслуживании двух и более автомобилей одной семьи - 
              скидка 10% на все услуги.
            </p>
            <div className="text-sm text-orange-600">
              * Требуется подтверждение родства
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Как получить скидку?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Запишитесь на услугу через сайт или по телефону</li>
          <li>Сообщите менеджеру о желании участвовать в акции</li>
          <li>Предъявите необходимые документы (если требуется)</li>
          <li>Получите скидку при оплате услуг</li>
        </ul>
      </section>
    </div>
  );
} 