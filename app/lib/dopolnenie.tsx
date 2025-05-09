export const CAR_SORT_SEARCH_PARAM = "sort";
import StorageTable from "../ui/index/table";
import StorageFilters from "../ui/index/filters";
import postgres from "postgres";
import {
  fetchBrands,
  fetchModelsByBrand,
  fetchGenerationsByModel,
} from "../lib/data";
import { carBrands } from './placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'require',
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10,
  debug: process.env.NODE_ENV === 'development'
});

type Part = {
  id: string;
  name: string;
  price: number;
};

export default async function Page(props: {
  searchParams?: Promise<{
    model?: string;
    brand?: string;
    generation?: string;
    sort?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const carBrand = searchParams?.brand || null;
  const carModel = searchParams?.model || null;
  const carGeneration = searchParams?.generation || null;
  const sortOrder = searchParams?.sort || null;

  const brands = await fetchBrands();
  const models = carBrand ? await fetchModelsByBrand(carBrand) : null;
  const generations = carModel ? await fetchGenerationsByModel(carModel) : null;

  return (
    <main className="flex flex-row p-6 gap-10">
      <StorageFilters
        brands={brands}
        models={models}
        generations={generations}
        carBrand={carBrand}
        carModel={carModel}
        carGeneration={carGeneration}
        sortOrder={sortOrder}
      />
      <StorageTable
        carModel={carModel}
        carGeneration={carGeneration}
        sortOrder={sortOrder}
      />
    </main>
  );
}

export async function fetchParts({
    modelId,
    generationId,
    sortOrder,
  }: {
    modelId?: string | null;
    generationId?: string | null;
    sortOrder?: string | null;
  }): Promise<Part[]> {
    try {
      // Получаем все запчасти из всех брендов
      const allParts = carBrands.flatMap(brand => brand.parts);
      
      // Фильтруем запчасти по поколению, если указано
      let filteredParts = allParts;
      if (generationId) {
        filteredParts = allParts.filter(part => 
          part.relations.includes(generationId)
        );
      }
      
      // Сортируем запчасти по цене, если указан порядок сортировки
      if (sortOrder === 'asc' || sortOrder === 'desc') {
        filteredParts.sort((a, b) => {
          return sortOrder === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        });
      }

      console.log('Filtered parts:', filteredParts);
      return filteredParts;
    } catch (error) {
      console.error('Error in fetchParts:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
      return [];
    }
  }
  
