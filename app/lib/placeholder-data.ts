// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
import type { Brand, Model, Generation, Part } from './types';

export const brands: Brand[] = [
  { id: '1', name: 'Toyota' },
  { id: '2', name: 'Honda' },
  { id: '3', name: 'Nissan' },
];

export const models: Model[] = [
  { id: '1', name: 'Corolla', brandId: '1' },
  { id: '2', name: 'Camry', brandId: '1' },
  { id: '3', name: 'Civic', brandId: '2' },
  { id: '4', name: 'Accord', brandId: '2' },
  { id: '5', name: 'Altima', brandId: '3' },
  { id: '6', name: 'Sentra', brandId: '3' },
];

export const generations: Generation[] = [
  { id: '1', name: 'E140', modelId: '1' },
  { id: '2', name: 'E150', modelId: '1' },
  { id: '3', name: 'XV50', modelId: '2' },
  { id: '4', name: 'XV70', modelId: '2' },
  { id: '5', name: '8th Gen', modelId: '3' },
  { id: '6', name: '9th Gen', modelId: '3' },
  { id: '7', name: '10th Gen', modelId: '4' },
  { id: '8', name: 'L33', modelId: '5' },
  { id: '9', name: 'B17', modelId: '6' },
];

export const parts: Part[] = [
  {
    id: '1',
    name: 'Тормозные колодки',
    price: 2500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '2',
    name: 'Масляный фильтр',
    price: 500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '3',
    name: 'Воздушный фильтр',
    price: 800,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '4',
    name: 'Свечи зажигания',
    price: 1200,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '5',
    name: 'Тормозные диски',
    price: 3500,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '6',
    name: 'Амортизаторы',
    price: 4500,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '7',
    name: 'Ремень ГРМ',
    price: 2800,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '8',
    name: 'Топливный фильтр',
    price: 600,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '9',
    name: 'Тормозная жидкость',
    price: 400,
    status: 'В наличии',
    generationId: '5',
  },
  {
    id: '10',
    name: 'Охлаждающая жидкость',
    price: 700,
    status: 'В наличии',
    generationId: '5',
  },
];
