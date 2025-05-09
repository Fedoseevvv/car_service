import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

export async function fetchBrands(): Promise<string[]> {
  try {
    const brands = await sql`
      SELECT name FROM car_brands
    `;
    return brands.map((v) => v.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch brands.");
  }
}

export async function fetchModelsByBrand(brandName: string): Promise<string[]> {
  try {
    const brandId = await sql`
      SELECT id FROM car_brands
      WHERE name = ${brandName};
    `;

    const models = await sql`
      SELECT name FROM car_models
      WHERE brand_id = ${brandId[0].id};
    `;

    return models.map((m) => m.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch models.");
  }
}

// Получить поколения по модели
export async function fetchGenerationsByModel(modelName: string | null): Promise<string[]> {
  try {
    if (!modelName) {
      const generations = await sql`SELECT name FROM car_generations`;
      return generations.map((g) => g.name);
    }

    const modelId = await sql`
      SELECT id FROM car_models
      WHERE name = ${modelName};
    `;

    const generations = await sql`
      SELECT name FROM car_generations
      WHERE model_id = ${modelId[0].id};
    `;

    return generations.map((g) => g.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch generations.");
  }
}

export async function fetchPartsByGenerationName(
  generationName: string | null
) {
  console.log(generationName);
  try {
    if (!generationName) {
      return await sql`SELECT * FROM car_parts`;
    }

    const generationId = await sql`
      SELECT id FROM car_generations
      WHERE name = ${generationName};
    `;

    console.log(generationId);

    if (!generationId || generationId.length === 0) {
      return [];
    }

    const relatedParts = await sql`
      SELECT
        cp.id,
        cp.name,
        cp.price
      FROM car_parts cp
      JOIN car_parts_models cpg ON cp.id = cpg.part_id
      WHERE cpg.generation_id = ${generationId[0].id};
    `;

    return relatedParts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch parts.");
  }
}
