// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
import type { Brand, Model, Generation, Part } from './types';

export const brands: Brand[] = [
  { id: '1', name: 'Toyota' },
  { id: '2', name: 'Honda' },
  { id: '3', name: 'Nissan' },
  { id: '4', name: 'BMW' },
  { id: '5', name: 'Mercedes-Benz' },
  { id: '6', name: 'Audi' },
  { id: '7', name: 'Volkswagen' },
  { id: '8', name: 'Hyundai' },
  { id: '9', name: 'Kia' },
  { id: '10', name: 'Mazda' },
];

export const models: Model[] = [
  // Toyota
  { id: '1', name: 'Corolla', brandId: '1' },
  { id: '2', name: 'Camry', brandId: '1' },
  { id: '3', name: 'RAV4', brandId: '1' },
  { id: '4', name: 'Land Cruiser', brandId: '1' },
  // Honda
  { id: '5', name: 'Civic', brandId: '2' },
  { id: '6', name: 'Accord', brandId: '2' },
  { id: '7', name: 'CR-V', brandId: '2' },
  { id: '8', name: 'Pilot', brandId: '2' },
  // Nissan
  { id: '9', name: 'Altima', brandId: '3' },
  { id: '10', name: 'Sentra', brandId: '3' },
  { id: '11', name: 'X-Trail', brandId: '3' },
  { id: '12', name: 'Patrol', brandId: '3' },
  // BMW
  { id: '13', name: '3 Series', brandId: '4' },
  { id: '14', name: '5 Series', brandId: '4' },
  { id: '15', name: 'X5', brandId: '4' },
  { id: '16', name: '7 Series', brandId: '4' },
  // Mercedes-Benz
  { id: '17', name: 'C-Class', brandId: '5' },
  { id: '18', name: 'E-Class', brandId: '5' },
  { id: '19', name: 'GLC', brandId: '5' },
  { id: '20', name: 'S-Class', brandId: '5' },
  // Audi
  { id: '21', name: 'A4', brandId: '6' },
  { id: '22', name: 'A6', brandId: '6' },
  { id: '23', name: 'Q5', brandId: '6' },
  { id: '24', name: 'A8', brandId: '6' },
  // Volkswagen
  { id: '25', name: 'Golf', brandId: '7' },
  { id: '26', name: 'Passat', brandId: '7' },
  { id: '27', name: 'Tiguan', brandId: '7' },
  { id: '28', name: 'Touareg', brandId: '7' },
  // Hyundai
  { id: '29', name: 'Elantra', brandId: '8' },
  { id: '30', name: 'Sonata', brandId: '8' },
  { id: '31', name: 'Tucson', brandId: '8' },
  { id: '32', name: 'Santa Fe', brandId: '8' },
  // Kia
  { id: '33', name: 'Rio', brandId: '9' },
  { id: '34', name: 'Optima', brandId: '9' },
  { id: '35', name: 'Sportage', brandId: '9' },
  { id: '36', name: 'Sorento', brandId: '9' },
  // Mazda
  { id: '37', name: '3', brandId: '10' },
  { id: '38', name: '6', brandId: '10' },
  { id: '39', name: 'CX-5', brandId: '10' },
  { id: '40', name: 'CX-9', brandId: '10' },
];

export const generations: Generation[] = [
  // Toyota Corolla
  { id: '1', name: 'E140 (2006-2012)', modelId: '1' },
  { id: '2', name: 'E150 (2012-2018)', modelId: '1' },
  { id: '3', name: 'E210 (2018-2023)', modelId: '1' },
  // Toyota Camry
  { id: '4', name: 'XV50 (2011-2017)', modelId: '2' },
  { id: '5', name: 'XV70 (2017-2023)', modelId: '2' },
  // Toyota RAV4
  { id: '6', name: 'XA30 (2005-2012)', modelId: '3' },
  { id: '7', name: 'XA40 (2012-2018)', modelId: '3' },
  { id: '8', name: 'XA50 (2018-2023)', modelId: '3' },
  // Honda Civic
  { id: '9', name: '8th Gen (2005-2011)', modelId: '5' },
  { id: '10', name: '9th Gen (2011-2015)', modelId: '5' },
  { id: '11', name: '10th Gen (2015-2021)', modelId: '5' },
  { id: '12', name: '11th Gen (2021-2023)', modelId: '5' },
  // BMW 3 Series
  { id: '13', name: 'E90 (2005-2011)', modelId: '13' },
  { id: '14', name: 'F30 (2011-2019)', modelId: '13' },
  { id: '15', name: 'G20 (2018-2023)', modelId: '13' },
  // Mercedes-Benz C-Class
  { id: '16', name: 'W204 (2007-2014)', modelId: '17' },
  { id: '17', name: 'W205 (2014-2021)', modelId: '17' },
  { id: '18', name: 'W206 (2021-2023)', modelId: '17' },
  // Audi A4
  { id: '19', name: 'B8 (2008-2015)', modelId: '21' },
  { id: '20', name: 'B9 (2015-2023)', modelId: '21' },
  // Volkswagen Golf
  { id: '21', name: 'Mk6 (2008-2012)', modelId: '25' },
  { id: '22', name: 'Mk7 (2012-2020)', modelId: '25' },
  { id: '23', name: 'Mk8 (2019-2023)', modelId: '25' },
  // Hyundai Elantra
  { id: '24', name: 'MD (2010-2015)', modelId: '29' },
  { id: '25', name: 'AD (2015-2020)', modelId: '29' },
  { id: '26', name: 'CN7 (2020-2023)', modelId: '29' },
  // Mazda 3
  { id: '27', name: 'BL (2008-2013)', modelId: '37' },
  { id: '28', name: 'BM (2013-2019)', modelId: '37' },
  { id: '29', name: 'BP (2018-2023)', modelId: '37' },
];

export const parts: Part[] = [
  // Тормозная система
  {
    id: '1',
    name: 'Тормозные колодки передние',
    price: 2500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '2',
    name: 'Тормозные колодки задние',
    price: 2200,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '3',
    name: 'Тормозные диски передние',
    price: 3500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '4',
    name: 'Тормозные диски задние',
    price: 3200,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '5',
    name: 'Тормозная жидкость DOT-4',
    price: 400,
    status: 'В наличии',
    generationId: '1',
  },
  // Фильтры
  {
    id: '6',
    name: 'Масляный фильтр',
    price: 500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '7',
    name: 'Воздушный фильтр',
    price: 800,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '8',
    name: 'Топливный фильтр',
    price: 600,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '9',
    name: 'Салонный фильтр',
    price: 700,
    status: 'В наличии',
    generationId: '1',
  },
  // Подвеска
  {
    id: '10',
    name: 'Амортизатор передний',
    price: 4500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '11',
    name: 'Амортизатор задний',
    price: 4200,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '12',
    name: 'Пружина подвески',
    price: 2800,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '13',
    name: 'Шаровая опора',
    price: 1500,
    status: 'В наличии',
    generationId: '1',
  },
  // Двигатель
  {
    id: '14',
    name: 'Свечи зажигания',
    price: 1200,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '15',
    name: 'Ремень ГРМ',
    price: 2800,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '16',
    name: 'Ролик натяжителя ГРМ',
    price: 1500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '17',
    name: 'Масло моторное 5W-30',
    price: 800,
    status: 'В наличии',
    generationId: '1',
  },
  // Охлаждение
  {
    id: '18',
    name: 'Охлаждающая жидкость',
    price: 700,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '19',
    name: 'Термостат',
    price: 1800,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '20',
    name: 'Помпа водяная',
    price: 3500,
    status: 'В наличии',
    generationId: '1',
  },
  // Электрика
  {
    id: '21',
    name: 'Аккумулятор',
    price: 8500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '22',
    name: 'Генератор',
    price: 12000,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '23',
    name: 'Стартер',
    price: 9500,
    status: 'В наличии',
    generationId: '1',
  },
  // Кузовные детали
  {
    id: '24',
    name: 'Бампер передний',
    price: 15000,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '25',
    name: 'Бампер задний',
    price: 14000,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '26',
    name: 'Фара передняя левая',
    price: 8500,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '27',
    name: 'Фара передняя правая',
    price: 8500,
    status: 'В наличии',
    generationId: '1',
  },
  // Расходные материалы
  {
    id: '28',
    name: 'Щетки стеклоочистителя',
    price: 1200,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '29',
    name: 'Жидкость омывателя',
    price: 300,
    status: 'В наличии',
    generationId: '1',
  },
  {
    id: '30',
    name: 'Антифриз',
    price: 600,
    status: 'В наличии',
    generationId: '1',
  },

  // Toyota Corolla E150 (2012-2018)
  {
    id: '31',
    name: 'Тормозные колодки передние',
    price: 2800,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '32',
    name: 'Тормозные колодки задние',
    price: 2500,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '33',
    name: 'Тормозные диски передние',
    price: 3800,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '34',
    name: 'Тормозные диски задние',
    price: 3500,
    status: 'В наличии',
    generationId: '2',
  },
  {
    id: '35',
    name: 'Тормозная жидкость DOT-4',
    price: 450,
    status: 'В наличии',
    generationId: '2',
  },

  // Toyota Corolla E210 (2018-2023)
  {
    id: '36',
    name: 'Тормозные колодки передние',
    price: 3000,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '37',
    name: 'Тормозные колодки задние',
    price: 2700,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '38',
    name: 'Тормозные диски передние',
    price: 4000,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '39',
    name: 'Тормозные диски задние',
    price: 3700,
    status: 'В наличии',
    generationId: '3',
  },
  {
    id: '40',
    name: 'Тормозная жидкость DOT-4',
    price: 500,
    status: 'В наличии',
    generationId: '3',
  },

  // Toyota Camry XV50 (2011-2017)
  {
    id: '41',
    name: 'Тормозные колодки передние',
    price: 3200,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '42',
    name: 'Тормозные колодки задние',
    price: 2900,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '43',
    name: 'Тормозные диски передние',
    price: 4200,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '44',
    name: 'Тормозные диски задние',
    price: 3900,
    status: 'В наличии',
    generationId: '4',
  },
  {
    id: '45',
    name: 'Тормозная жидкость DOT-4',
    price: 550,
    status: 'В наличии',
    generationId: '4',
  },

  // Toyota Camry XV70 (2017-2023)
  {
    id: '46',
    name: 'Тормозные колодки передние',
    price: 3500,
    status: 'В наличии',
    generationId: '5',
  },
  {
    id: '47',
    name: 'Тормозные колодки задние',
    price: 3200,
    status: 'В наличии',
    generationId: '5',
  },
  {
    id: '48',
    name: 'Тормозные диски передние',
    price: 4500,
    status: 'В наличии',
    generationId: '5',
  },
  {
    id: '49',
    name: 'Тормозные диски задние',
    price: 4200,
    status: 'В наличии',
    generationId: '5',
  },
  {
    id: '50',
    name: 'Тормозная жидкость DOT-4',
    price: 600,
    status: 'В наличии',
    generationId: '5',
  },

  // Honda Civic 8th Gen (2005-2011)
  {
    id: '51',
    name: 'Тормозные колодки передние',
    price: 2700,
    status: 'В наличии',
    generationId: '9',
  },
  {
    id: '52',
    name: 'Тормозные колодки задние',
    price: 2400,
    status: 'В наличии',
    generationId: '9',
  },
  {
    id: '53',
    name: 'Тормозные диски передние',
    price: 3700,
    status: 'В наличии',
    generationId: '9',
  },
  {
    id: '54',
    name: 'Тормозные диски задние',
    price: 3400,
    status: 'В наличии',
    generationId: '9',
  },
  {
    id: '55',
    name: 'Тормозная жидкость DOT-4',
    price: 450,
    status: 'В наличии',
    generationId: '9',
  },

  // BMW 3 Series E90 (2005-2011)
  {
    id: '56',
    name: 'Тормозные колодки передние',
    price: 4500,
    status: 'В наличии',
    generationId: '13',
  },
  {
    id: '57',
    name: 'Тормозные колодки задние',
    price: 4200,
    status: 'В наличии',
    generationId: '13',
  },
  {
    id: '58',
    name: 'Тормозные диски передние',
    price: 5500,
    status: 'В наличии',
    generationId: '13',
  },
  {
    id: '59',
    name: 'Тормозные диски задние',
    price: 5200,
    status: 'В наличии',
    generationId: '13',
  },
  {
    id: '60',
    name: 'Тормозная жидкость DOT-4',
    price: 800,
    status: 'В наличии',
    generationId: '13',
  },

  // Mercedes-Benz C-Class W204 (2007-2014)
  {
    id: '61',
    name: 'Тормозные колодки передние',
    price: 4800,
    status: 'В наличии',
    generationId: '16',
  },
  {
    id: '62',
    name: 'Тормозные колодки задние',
    price: 4500,
    status: 'В наличии',
    generationId: '16',
  },
  {
    id: '63',
    name: 'Тормозные диски передние',
    price: 5800,
    status: 'В наличии',
    generationId: '16',
  },
  {
    id: '64',
    name: 'Тормозные диски задние',
    price: 5500,
    status: 'В наличии',
    generationId: '16',
  },
  {
    id: '65',
    name: 'Тормозная жидкость DOT-4',
    price: 850,
    status: 'В наличии',
    generationId: '16',
  },

  // Audi A4 B8 (2008-2015)
  {
    id: '66',
    name: 'Тормозные колодки передние',
    price: 4200,
    status: 'В наличии',
    generationId: '19',
  },
  {
    id: '67',
    name: 'Тормозные колодки задние',
    price: 3900,
    status: 'В наличии',
    generationId: '19',
  },
  {
    id: '68',
    name: 'Тормозные диски передние',
    price: 5200,
    status: 'В наличии',
    generationId: '19',
  },
  {
    id: '69',
    name: 'Тормозные диски задние',
    price: 4900,
    status: 'В наличии',
    generationId: '19',
  },
  {
    id: '70',
    name: 'Тормозная жидкость DOT-4',
    price: 750,
    status: 'В наличии',
    generationId: '19',
  },
];
