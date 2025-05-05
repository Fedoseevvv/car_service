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
    generations?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const carBrand = searchParams?.brand || null;
  const carModel = searchParams?.model || null;
  const carGeneration = searchParams?.generations || null;

  console.log(carGeneration);

  const brands = await fetchBrands();
  const models = carBrand ? await fetchModelsByBrand(carBrand) : null;
  const generations = carModel ? await fetchGenerationsByModel(carModel) : null;

  return (
    <main className="flex flex-row p-6 gap-10">
      <StorageFilters
        generations={generations}
        carGeneration={carGeneration}
        brands={brands}
        models={models}
        carBrand={carBrand}
        carModel={carModel}
      />
      <StorageTable carGeneration={carGeneration} />
    </main>
  );
}
