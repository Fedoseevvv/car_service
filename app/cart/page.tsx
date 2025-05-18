'use client';

import { useCart } from '../lib/cart-context';
import { useRouter } from 'next/navigation';
import { CartProvider } from '../lib/cart-context';

function CartContent() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Корзина</h1>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Корзина</h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Очистить корзину
        </button>
      </div>

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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900">
          Итого: {totalPrice.toLocaleString('ru-RU')} ₽
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Продолжить покупки
          </button>
          <button
            onClick={() => router.push('/repair')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Записаться на ремонт
          </button>
          <button
            onClick={() => router.replace('/checkout')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Купить запчасти
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
} 