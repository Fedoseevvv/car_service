'use client';

import { useState } from 'react';
import StorageTable from "./ui/index/table";
import StorageFilters from "./ui/index/filters";
import LogoutWrapper from "./ui/logout-wrapper";
import {
  fetchBrands,
  fetchGenerationsByModel,
  fetchModelsByBrand,
} from "./lib/data";
import { fetchParts } from "./lib/dopolnenie";
import { CartProvider } from './lib/cart-context';
import CartIcon from './ui/cart-icon';
import type { Brand, Model, Generation } from './lib/types';

export default function Page() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleBrandChange = async (brandId: string) => {
    setSelectedBrand(brandId);
    setSelectedModel('');
    setSelectedGeneration('');
    setModels([]);
    setGenerations([]);

    if (brandId) {
      const fetchedModels = await fetchModelsByBrand(brandId);
      setModels(fetchedModels);
    }
  };

  const handleModelChange = async (modelId: string) => {
    setSelectedModel(modelId);
    setSelectedGeneration('');
    setGenerations([]);

    if (modelId) {
      const fetchedGenerations = await fetchGenerationsByModel(modelId);
      setGenerations(fetchedGenerations);
    }
  };

  const handleGenerationChange = (generationId: string) => {
    setSelectedGeneration(generationId);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  return (
    <CartProvider>
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <LogoutWrapper />
            <CartIcon />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Марка
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              >
                <option value="">Выберите марку</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Модель
              </label>
              <select
                id="model"
                value={selectedModel}
                onChange={(e) => handleModelChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                disabled={!selectedBrand}
              >
                <option value="">Выберите модель</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="generation" className="block text-sm font-medium text-gray-700">
                Поколение
              </label>
              <select
                id="generation"
                value={selectedGeneration}
                onChange={(e) => handleGenerationChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                disabled={!selectedModel}
              >
                <option value="">Выберите поколение</option>
                {generations.map((generation) => (
                  <option key={generation.id} value={generation.id}>
                    {generation.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
                Сортировка
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              >
                <option value="">По умолчанию</option>
                <option value="asc">По возрастанию цены</option>
                <option value="desc">По убыванию цены</option>
              </select>
            </div>
          </div>

          <StorageTable
            carGeneration={selectedGeneration}
            sortOrder={sortOrder}
          />
        </div>
      </main>
    </CartProvider>
  );
}
