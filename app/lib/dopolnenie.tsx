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
      
      console.log('Selected generation ID:', generationId);
      
      // Сначала фильтруем по бренду и поколению
      if (generationId) {
        // Находим бренд, к которому относится выбранное поколение
        const brandWithGeneration = carBrands.find(brand => {
          const hasGeneration = brand.brands.some(model => 
            model.generations.some(gen => gen.id === generationId)
          );
          console.log(`Brand ${brand.name} has generation ${generationId}: ${hasGeneration}`);
          return hasGeneration;
        });

        console.log('Found brand:', brandWithGeneration?.name);

        if (brandWithGeneration) {
          // Берем только запчасти этого бренда, которые подходят для выбранного поколения
          filteredParts = brandWithGeneration.parts.filter(part => {
            const hasRelation = part.relations.includes(generationId);
            console.log(`Part ${part.name} has relation to ${generationId}: ${hasRelation}`);
            return hasRelation;
          });
          
          console.log('Filtered parts:', filteredParts.map(p => p.name));
        }
      } else {
        // Если поколение не выбрано, показываем все запчасти
        filteredParts = carBrands.flatMap(brand => brand.parts);
        console.log('No generation selected, showing all parts:', filteredParts.map(p => p.name));
      }
      
      // Затем сортируем по цене, если указан порядок сортировки
      if (sortOrder === 'asc' || sortOrder === 'desc') {
        filteredParts.sort((a, b) => {
          return sortOrder === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        });
        console.log('Sorted parts:', filteredParts.map(p => `${p.name} (${p.price})`));
      }

      return filteredParts;
    } catch (error) {
      console.error('Error in fetchParts:', error);
      return [];
    }
  }
  
