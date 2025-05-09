export const CAR_SORT_SEARCH_PARAM = "sort";
import StorageTable from "../ui/index/table";
import StorageFilters from "../ui/index/filters";
import {
  fetchBrands,
  fetchModelsByBrand,
  fetchGenerationsByModel,
} from "../lib/data";
import { carBrands } from './placeholder-data';

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
        carGeneration={carGeneration}
        sortOrder={sortOrder}
      />
    </main>
  );
}

export async function fetchParts({
    generationId,
    sortOrder,
  }: {
    generationId?: string | null;
    sortOrder?: string | null;
  }): Promise<Part[]> {
    try {
      let filteredParts: Part[] = [];
      
      console.log('Fetching parts with params:', { generationId, sortOrder });
      
      // Если поколение не выбрано, показываем все запчасти
      if (!generationId) {
        filteredParts = carBrands.flatMap(brand => brand.parts);
        console.log('No generation selected, showing all parts:', filteredParts.length);
      } else {
        // Ищем запчасти во всех брендах
        filteredParts = carBrands.flatMap(brand => 
          brand.parts.filter(part => part.relations.includes(generationId))
        );
        console.log('Filtered parts by generation:', filteredParts.map(p => p.name));
      }
      
      // Сортируем по цене, если указан порядок сортировки
      if (sortOrder === 'asc' || sortOrder === 'desc') {
        console.log('Sorting parts by price:', sortOrder);
        filteredParts.sort((a, b) => {
          return sortOrder === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        });
        console.log('Sorted parts:', filteredParts.map(p => `${p.name} (${p.price})`));
      }

      console.log('Final parts list:', filteredParts);
      return filteredParts;
    } catch (error) {
      console.error('Error in fetchParts:', error);
      return [];
    }
  }
  
