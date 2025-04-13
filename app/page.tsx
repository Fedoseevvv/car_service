import StorageTable from "./ui/index/table";
import StorageFilters from "./ui/index/filters";
import { fetchBrands, fetchModelsByBrand } from "./lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    model?: string;
    brand?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const carBrand = searchParams?.brand || null;
  const carModel = searchParams?.model || null;

  const brands = await fetchBrands();
  const models = carBrand ? await fetchModelsByBrand(carBrand) : null;

  return (
    <main className="flex flex-row p-6 gap-10">
      <StorageFilters
        brands={brands}
        models={models}
        carBrand={carBrand}
        carModel={carModel}
      />
      <StorageTable carModel={carModel} />
    </main>
  );
}
