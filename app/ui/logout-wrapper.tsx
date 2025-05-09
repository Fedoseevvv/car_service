'use client';

import LogoutButton from './logout-button';

export default function LogoutWrapper() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Склад</h1>
      <LogoutButton />
    </div>
  );
} 