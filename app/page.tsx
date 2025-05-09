import StorageTable from "./ui/index/table";
import StorageFilters from "./ui/index/filters";
import {
  fetchBrands,
  fetchGenerationsByModel,
  fetchModelsByBrand,
} from "./lib/data";
import { fetchParts } from "./lib/dopolnenie";

type Generation = {
  id: string;
  name: string;
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

  console.log('Page params:', {
    carBrand,
    carModel,
    carGeneration,
    sortOrder,
    rawParams: searchParams
  });

  const brands = await fetchBrands();
  const models = carBrand ? await fetchModelsByBrand(carBrand) : null;
  const generations = carModel ? await fetchGenerationsByModel(carModel) : null;

  console.log('Available data:', {
    brands,
    models,
    generations,
    selectedGeneration: generations?.find((g: Generation) => g.id === carGeneration)
  });

  const parts = await fetchParts({
    generationId: carGeneration,
    sortOrder,
  });

  console.log('Fetched parts:', parts);

  return (
    <main className="flex flex-row p-6 gap-10">
      <StorageFilters
        generations={generations}
        carGeneration={carGeneration}
        brands={brands}
        models={models}
        carBrand={carBrand}
        carModel={carModel}
        sortOrder={sortOrder}
      />
      <StorageTable 
        carGeneration={carGeneration}
        sortOrder={sortOrder}
      />
    </main>
  );
}
