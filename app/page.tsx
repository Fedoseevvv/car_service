import StorageTable from "./ui/index/table";
import StorageFilters from "./ui/index/filters";
import {
  fetchBrands,
  fetchGenerationsByModel,
  fetchModelsByBrand,
} from "./lib/data";

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
    sortOrder
  });

  const brands = await fetchBrands();
  const models = carBrand ? await fetchModelsByBrand(carBrand) : null;
  const generations = carModel ? await fetchGenerationsByModel(carModel) : null;

  console.log('Available data:', {
    brands,
    models,
    generations
  });

  return (
    <main className="flex flex-row p-6 gap-10">
      <StorageFilters
        generations={generations as string[] | null}
        carGeneration={carGeneration}
        brands={brands as string[]}
        models={models as string[] | null}
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
