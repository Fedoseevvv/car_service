export const CAR_SORT_SEARCH_PARAM = "sort";
import StorageTable from "../ui/index/table";
import StorageFilters from "../ui/index/filters";
import postgres from "postgres";
import {
  fetchBrands,
  fetchModelsByBrand,
  fetchGenerationsByModel,
} from "../lib/data";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'require',
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10,
});

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
  }) {
    let query = `SELECT * FROM car_parts
      JOIN car_parts_models ON car_parts.id = car_parts_models.part_id
      JOIN car_models ON car_parts_models.model_id = car_models.id`;
  
    const conditions: string[] = [];
    const values: any[] = [];
  
    if (modelId) {
      conditions.push(`car_models.id = $${values.length + 1}`);
      values.push(modelId);
    }
  
    if (generationId) {
      conditions.push(`car_models.generation = $${values.length + 1}`);
      values.push(generationId);
    }
  
    if (conditions.length > 0) {
      query += ` WHERE ` + conditions.join(" AND ");
    }
  
    if (sortOrder === "asc" || sortOrder === "desc") {
      query += ` ORDER BY car_parts.price ${sortOrder}`;
    }
  
    const parts = await sql.unsafe(query, values);
    return parts;
  }
  
