'use client';

import { useState, useEffect } from 'react';
import { fetchParts } from "@/app/lib/dopolnenie";
import { formatCurrency } from "@/app/lib/utils";
import AddToCartButton from '../add-to-cart-button';
import type { Part } from '@/app/lib/types';

interface StorageTableProps {
  carGeneration: string | null;
  sortOrder: string | null;
}

export default function StorageTable({ carGeneration, sortOrder }: StorageTableProps) {
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadParts = async () => {
      try {
        setLoading(true);
        const fetchedParts = await fetchParts({ generationId: carGeneration, sortOrder });
        setParts(fetchedParts as Part[]);
      } catch {
        setParts([]);
      } finally {
        setLoading(false);
      }
    };

    loadParts();
  }, [carGeneration, sortOrder]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (parts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Запчасти не найдены</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Название
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Цена
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Статус
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Действия
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {parts.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{formatCurrency(item.price)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  item.status === 'В наличии' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <AddToCartButton
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 