"use client";

import React from "react";
import Select from "react-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  CAR_BAND_SEARCH_PARAM,
  CAR_MODEL_SEARCH_PARAM,
} from "@/app/lib/constants";
import { capitalize } from "@/app/lib/utils";

export default function Filters({
  carModel,
  carBrand,
  brands,
  models,
}: {
  carModel: string | null;
  carBrand: string | null;
  brands: string[];
  models: string[] | null;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const brandsOptions = brands.map((brand) => ({
    value: brand,
    label: capitalize(brand),
  }));

  const onCarFilterChange = (name: string, value: any) => {
    if (!value) {
      params.delete(name);
    } else {
      params.set(name, value.value);
    }

    // Если в фильтрах меняем название марки машины,
    // то и чистим текущую модель.
    if (name === CAR_BAND_SEARCH_PARAM) {
      params.delete(CAR_MODEL_SEARCH_PARAM);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="pt-6 pb-24 w-80">
      <div className="border-b border-gray-200 py-6">
        <span className="block font-medium text-gray-900 mb-2">
          Марка Машины
        </span>

        <Select
          placeholder="Выберите марку"
          value={brandsOptions.find((o) => o.value === carBrand)}
          isClearable
          onChange={(v) => onCarFilterChange(CAR_BAND_SEARCH_PARAM, v)}
          options={brandsOptions}
          isSearchable={false}
        />
      </div>

      {models && (
        <div className="border-b border-gray-200 py-6">
          <span className="block font-medium text-gray-900 mb-2">
            Модель машины
          </span>

          <Select
            placeholder="Выберите модель"
            value={models
              .map((m) => ({ value: m, label: m }))
              .find((o) => o.value === carModel)}
            onChange={(v: any) => onCarFilterChange(CAR_MODEL_SEARCH_PARAM, v)}
            options={models.map((m) => ({ value: m, label: capitalize(m) }))}
            isSearchable={false}
          />
        </div>
      )}
    </section>
  );
}
