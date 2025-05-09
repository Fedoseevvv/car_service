"use client";

import React from "react";
import Select from "react-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  CAR_BAND_SEARCH_PARAM,
  CAR_MODEL_SEARCH_PARAM,
  CAR_GENERATION_SEARCH_PARAM,
} from "@/app/lib/constants";
import { capitalize } from "@/app/lib/utils";

const priceSortOptions = [
  { value: "asc", label: "По возрастанию" },
  { value: "desc", label: "По убыванию" },
];

export default function Filters({
  carModel,
  carBrand,
  carGeneration,
  brands,
  models,
  generations,
  sortOrder,
}: {
  carModel: string | null;
  carBrand: string | null;
  carGeneration: string | null;
  brands: string[];
  models: string[] | null;
  sortOrder: string | null;
  generations: Array<{ id: string; name: string }> | null;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentSort = sortOrder;

  console.log('Filters props:', {
    carModel,
    carBrand,
    carGeneration,
    brands,
    models,
    generations,
    sortOrder
  });

  const params = new URLSearchParams(searchParams.toString());

  const brandsOptions = brands.map((brand) => ({
    value: brand,
    label: capitalize(brand),
  }));

  const handleFilterChange = (
    name: string,
    value: { value: string; label: string } | null
  ) => {
    console.log('Filter change:', { name, value });

    if (!value) {
      params.delete(name);
    } else {
      params.set(name, value.value);
    }

    // Очистка связанных параметров при смене более высокого уровня
    if (name === CAR_BAND_SEARCH_PARAM) {
      params.delete(CAR_MODEL_SEARCH_PARAM);
      params.delete(CAR_GENERATION_SEARCH_PARAM);
    } else if (name === CAR_MODEL_SEARCH_PARAM) {
      params.delete(CAR_GENERATION_SEARCH_PARAM);
    }

    const newUrl = `${pathname}?${params.toString()}`;
    console.log('New URL:', newUrl);
    replace(newUrl);
  };

  return (
    <section className="pt-6 pb-24 w-80">
      {/* Марка машины */}
      <div className="border-b border-gray-200 py-6">
        <span className="block font-medium text-gray-900 mb-2">
          Марка машины
        </span>
        <Select
          placeholder="Выберите марку"
          value={brandsOptions.find((o) => o.value === carBrand)}
          isClearable
          onChange={(v) => handleFilterChange(CAR_BAND_SEARCH_PARAM, v)}
          options={brandsOptions}
          isSearchable={false}
        />
      </div>

      {/* Модель машины */}
      {models && (
        <div className="border-b border-gray-200 py-6">
          <span className="block font-medium text-gray-900 mb-2">
            Модель машины
          </span>
          <Select
            placeholder="Выберите модель"
            value={models
              .map((m) => ({ value: m, label: capitalize(m) }))
              .find((o) => o.value === carModel)}
            onChange={(v) => handleFilterChange(CAR_MODEL_SEARCH_PARAM, v)}
            options={models.map((m) => ({
              value: m,
              label: capitalize(m),
            }))}
            isSearchable={false}
          />
        </div>
      )}

      {/* Поколение машины */}
      {generations && (
        <div className="border-b border-gray-200 py-6">
          <span className="block font-medium text-gray-900 mb-2">
            Поколение машины
          </span>
          <Select
            placeholder="Выберите поколение"
            value={generations
              .map((g) => ({ value: g.id, label: g.name }))
              .find((o) => o.value === carGeneration)}
            onChange={(v) => handleFilterChange(CAR_GENERATION_SEARCH_PARAM, v)}
            options={generations.map((g) => ({
              value: g.id,
              label: g.name,
            }))}
            isSearchable={false}
          />
        </div>
      )}

      {/* Сортировка по цене */}
      <div className="border-b border-gray-200 py-6">
        <span className="block font-medium text-gray-900 mb-2">
          Сортировка по цене
        </span>
        <Select
          placeholder="Выберите сортировку"
          value={priceSortOptions.find((o) => o.value === currentSort)}
          onChange={(v) => handleFilterChange("sort", v)}
          options={priceSortOptions}
          isSearchable={false}
          isClearable
        />
      </div>
    </section>
  );
}
