import { fetchParts } from "@/app/lib/dopolnenie";
import { formatCurrency } from "@/app/lib/utils";

type Props = {
  carModel?: string | null;
  carGeneration: string | null;
  sortOrder?: string | null;
};

type Part = {
  id: string;
  name: string;
  price: number;
};

export default async function StorageTable({
  carModel,
  carGeneration,
  sortOrder,
}: Props) {
  const parts = await fetchParts({
    modelId: carModel,
    generationId: carGeneration,
    sortOrder,
  });

  return (
    <div className="mt-6 flow-root flex-1">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Наименование товара
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Статус
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Цена
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {parts?.map((item: Part) => (
                <tr
                  key={item.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3 font-bold">
                      {item.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">В наличии ✅</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
