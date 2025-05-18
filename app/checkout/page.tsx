'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../lib/cart-context';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart, updateQuantity } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    comment: '',
    deliveryMethod: 'courier', // 'courier' или 'pickup'
    paymentMethod: 'card', // 'card' или 'cash'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
    alert('Заказ оформлен! Мы свяжемся с вами для подтверждения.');
    clearCart();
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 0) return '';
    const cleanNumber = phoneNumber.startsWith('7') || phoneNumber.startsWith('8') 
      ? phoneNumber.slice(1) 
      : phoneNumber;
    if (cleanNumber.length <= 3) return `+7 (${cleanNumber}`;
    if (cleanNumber.length <= 6) return `+7 (${cleanNumber.slice(0, 3)}) ${cleanNumber.slice(3)}`;
    if (cleanNumber.length <= 8) return `+7 (${cleanNumber.slice(0, 3)}) ${cleanNumber.slice(3, 6)}-${cleanNumber.slice(6)}`;
    return `+7 (${cleanNumber.slice(0, 3)}) ${cleanNumber.slice(3, 6)}-${cleanNumber.slice(6, 8)}-${cleanNumber.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedValue
    }));
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Оформление заказа</h1>
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Ваша корзина пуста</p>
          <button
            onClick={() => router.push('/')}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Вернуться к выбору запчастей
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Оформление заказа</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ваш заказ</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Цена: {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">Итого:</span>
              <span className="text-xl font-bold text-gray-900">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            ФИО
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Номер телефона
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handlePhoneChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="+7 (___) ___-__-__"
            maxLength={18}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="deliveryMethod" className="block text-sm font-medium text-gray-700">
            Способ доставки
          </label>
          <select
            id="deliveryMethod"
            name="deliveryMethod"
            required
            value={formData.deliveryMethod}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="courier">Курьерская доставка</option>
            <option value="pickup">Самовывоз из магазина</option>
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {formData.deliveryMethod === 'courier' ? 'Адрес доставки' : 'Адрес магазина для самовывоза'}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder={formData.deliveryMethod === 'courier' ? 'Введите адрес доставки' : 'Выберите адрес магазина'}
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
            Способ оплаты
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            required
            value={formData.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="card">Онлайн оплата картой</option>
            <option value="cash">Наличными при получении</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Комментарий к заказу
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={formData.comment}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Дополнительная информация..."
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Вернуться в корзину
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Оформить заказ
          </button>
        </div>
      </form>
    </div>
  );
} 