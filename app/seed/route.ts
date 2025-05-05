import postgres from "postgres";
import { carBrands } from "../lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!);

async function seedStorage() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Удаляем существующие таблицы в правильном порядке
  await sql`DROP TABLE IF EXISTS car_parts_models CASCADE`;
  await sql`DROP TABLE IF EXISTS car_parts CASCADE`;
  await sql`DROP TABLE IF EXISTS car_generations CASCADE`;
  await sql`DROP TABLE IF EXISTS car_models CASCADE`;
  await sql`DROP TABLE IF EXISTS car_brands CASCADE`;

  await sql`CREATE TABLE IF NOT EXISTS car_brands (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;

  await sql`CREATE TABLE IF NOT EXISTS car_models (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand_id UUID NOT NULL,
    FOREIGN KEY (brand_id) REFERENCES car_brands(id)
  )`;

  await sql`CREATE TABLE IF NOT EXISTS car_generations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    model_id UUID NOT NULL,
    FOREIGN KEY (model_id) REFERENCES car_models(id)
  )`;

  await sql`CREATE TABLE IF NOT EXISTS car_parts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )`;

  await sql`CREATE TABLE IF NOT EXISTS car_parts_models (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    part_id UUID NOT NULL,
    generation_id UUID NOT NULL,
    FOREIGN KEY (part_id) REFERENCES car_parts(id),
    FOREIGN KEY (generation_id) REFERENCES car_generations(id)
  )`;

  await Promise.all(
    carBrands.map(async (brand) => {
      await sql`INSERT INTO car_brands (id, name)
        VALUES (${brand.id}, ${brand.name})
        ON CONFLICT (id) DO NOTHING`;

      await Promise.all(
        brand.brands.map(async (model) => {
          await sql`INSERT INTO car_models (id, name, brand_id)
            VALUES (${model.id}, ${model.name}, ${brand.id})
            ON CONFLICT (id) DO NOTHING`;

          await Promise.all(
            model.generations.map(async (generation) => {
              await sql`INSERT INTO car_generations (id, name, model_id)
                VALUES (${generation.id}, ${generation.name}, ${model.id})
                ON CONFLICT (id) DO NOTHING`;
            })
          );
        })
      );

      await Promise.all(
        brand.parts.map(async (part) => {
          await sql`INSERT INTO car_parts (id, name, price)
            VALUES (${part.id}, ${part.name}, ${part.price})
            ON CONFLICT (id) DO NOTHING`;

          await Promise.all(
            part.relations.map(async (relation) => {
              await sql`INSERT INTO car_parts_models (part_id, generation_id)
                VALUES (${part.id}, ${relation})
                ON CONFLICT (id) DO NOTHING`;
            })
          );
        })
      );
    })
  );
  return true;
}

export async function GET() {
  try {
    await sql.begin(() => [seedStorage()]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
