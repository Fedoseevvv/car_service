import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

export async function fetchPartsByCarModelName(modelName: string | null) {
  try {
    if (!modelName) {
      return await sql`SELECT * FROM car_parts`;
    }

    const modelId = await sql`
      SELECT id FROM car_models
      WHERE name = ${modelName};
    `;

    const relatedParts = await sql`SELECT
        cp.id,
        cp.name,
        cp.price
      FROM car_parts cp
      JOIN car_parts_models cpm ON cp.id = cpm.part_id
      WHERE cpm.model_id = ${modelId[0].id};
    `;

    return relatedParts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch storage data.");
  }
}

export async function fetchBrands() {
  try {
    const brands = await sql`
      SELECT name FROM car_brands
    `;

    return brands.map((v) => v.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch storage data.");
  }
}

export async function fetchModelsByBrand(brandName: string) {
  try {
    const brandId = await sql`
      SELECT id FROM car_brands
      WHERE name = ${brandName};
    `;

    const models = await sql`
      SELECT * FROM car_models
      WHERE brand_id = ${brandId[0].id};
    `;

    return models.map((m) => m.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch storage data.");
  }
}
