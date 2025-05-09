'use client';

import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Удаляем cookie с информацией об авторизации
    deleteCookie('isAuthenticated');
    // Перенаправляем на страницу логина
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Выйти
    </button>
  );
} 