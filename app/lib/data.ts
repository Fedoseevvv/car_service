import { brands, models, generations } from './placeholder-data';
import type { Brand, Model, Generation } from './types';
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

export async function fetchBrands(): Promise<Brand[]> {
  return brands;
}

export async function fetchModelsByBrand(brandId: string): Promise<Model[]> {
  return models.filter(model => model.brandId === brandId);
}

export async function fetchGenerationsByModel(modelId: string): Promise<Generation[]> {
  return generations.filter(generation => generation.modelId === modelId);
}

export async function fetchPartsByGenerationName(
  generationName: string | null
) {
  try {
    if (!generationName) {
      return await sql`SELECT * FROM car_parts`;
    }

    const generationId = await sql`
      SELECT id FROM car_generations
      WHERE name = ${generationName};
    `;

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
  } catch {
    // В продакшене здесь можно добавить логирование в файл или сервис мониторинга
    throw new Error("Failed to fetch parts.");
  }
}
