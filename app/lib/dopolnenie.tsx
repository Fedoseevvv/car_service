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
      // Получаем все запчасти из всех брендов
      const allParts = carBrands.flatMap(brand => brand.parts);
      
      // Фильтруем запчасти по поколению
      let filteredParts = allParts;
      if (generationId) {
        // Находим бренд и модель, к которым относится выбранное поколение
        const brandWithGeneration = carBrands.find(brand => 
          brand.brands.some(model => 
            model.generations.some(gen => gen.id === generationId)
          )
        );

        if (brandWithGeneration) {
          // Фильтруем запчасти только этого бренда
          filteredParts = brandWithGeneration.parts.filter(part => 
            part.relations.includes(generationId)
          );
        } else {
          filteredParts = [];
        }
      }
      
      // Сортируем запчасти по цене
      if (sortOrder === 'asc' || sortOrder === 'desc') {
        filteredParts.sort((a, b) => {
          return sortOrder === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        });
      }

      return filteredParts;
    } catch {
      return [];
    }
  }
  
