// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
export const carBrands = [
  {
    id: "f377c234-454f-4427-b208-ad2d0e439ecb",
    name: "toyota",
    brands: [
      {
        id: "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
        name: "Corolla",
      },
      {
        id: "b4e43176-25cf-4455-9e83-7f78b1e31eb6",
        name: "Camry",
      },
      {
        id: "4b9d5d18-9ab2-4343-8384-5f502533fb93",
        name: "RAV4",
      },
      {
        id: "40d0e11b-5cc3-4d5d-ada2-3c69bfbb01bf",
        name: "Yaris",
      },
      {
        id: "350d6fbd-406b-45ff-b0e0-f8261c08f1c3",
        name: "Hilux",
      },
      {
        id: "303adec1-d477-43bf-b659-5f7ff6cfc75f",
        name: "Avensis",
      },
      {
        id: "3f0d806d-0dec-4f3e-9a3f-be1e697310f7",
        name: "Land Cruiser",
      },
    ],
    parts: [
      {
        id: "d42e427f-0833-4e3f-af28-662986ad99e5",
        name: "Масляный фильтр",
        price: 450,
        relations: [
          "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
          "b4e43176-25cf-4455-9e83-7f78b1e31eb6",
          "4b9d5d18-9ab2-4343-8384-5f502533fb93",
          "40d0e11b-5cc3-4d5d-ada2-3c69bfbb01bf",
        ],
      },
      {
        id: "10ff465a-f764-4ce7-ad79-c8ea527e20cc",
        name: "Воздушный фильтр",
        price: 600,
        relations: [
          "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
          "b4e43176-25cf-4455-9e83-7f78b1e31eb6",
        ],
      },
      {
        id: "ba713936-c595-4a0f-932c-a95fe19aba96",
        name: "Салонный фильтр",
        price: 700,
        relations: [
          "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
          "4b9d5d18-9ab2-4343-8384-5f502533fb93",
        ],
      },
      {
        id: "5435080c-cb2e-4adc-837c-20919fda1a2b",
        name: "Тормозные колодки передние",
        price: 2800,
        relations: [
          "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
          "4b9d5d18-9ab2-4343-8384-5f502533fb93",
        ],
      },
      {
        id: "88c2dbe8-ab84-45fd-8cb6-d3d68e091217",
        name: "Масло моторное (4л)",
        price: 2800,
        relations: [
          "1d3ca6ee-6f98-4b1e-b8ae-a0ce99ead8b0",
          "b4e43176-25cf-4455-9e83-7f78b1e31eb6",
          "4b9d5d18-9ab2-4343-8384-5f502533fb93",
          "40d0e11b-5cc3-4d5d-ada2-3c69bfbb01bf",
          "350d6fbd-406b-45ff-b0e0-f8261c08f1c3",
          "303adec1-d477-43bf-b659-5f7ff6cfc75f",
          "3f0d806d-0dec-4f3e-9a3f-be1e697310f7",
        ],
      },
    ],
  },
  {
    id: "f4558f9b-3d83-4034-be2d-f69053b5732a",
    name: "bmw",
    brands: [
      {
        id: "76c1a62e-15cb-4228-979b-ef7b5bf771fd",
        name: "3 Series E90",
      },
      {
        id: "95d71f7d-d86c-4e7e-9198-8a34589968b3",
        name: "3 Series F30",
      },
      {
        id: "84e30c68-606b-4d21-9bab-3a9fa4456aea",
        name: "5 Series E60",
      },
      {
        id: "edadde3b-360c-4b61-8ed9-fb9c78277375",
        name: "5 Series G30",
      },
      {
        id: "61ea468d-0ba7-42e4-b2c0-220947b2b0be",
        name: "5 Series F10",
      },
    ],
    parts: [
      {
        id: "2a2724fa-e1b1-4d92-86aa-b50575213907",
        name: "Масляный фильтр",
        price: 750,
        relations: [
          "76c1a62e-15cb-4228-979b-ef7b5bf771fd",
          "95d71f7d-d86c-4e7e-9198-8a34589968b3",
        ],
      },
      {
        id: "7bf1b63c-c030-430a-bcdb-3f32d702af84",
        name: "Воздушный фильтр",
        price: 1100,
        relations: [
          "84e30c68-606b-4d21-9bab-3a9fa4456aea",
          "edadde3b-360c-4b61-8ed9-fb9c78277375",
        ],
      },
      {
        id: "104a9ed7-653a-4580-8f36-af05c3887427",
        name: "Амортизатор передний",
        price: 7600,
        relations: ["61ea468d-0ba7-42e4-b2c0-220947b2b0be"],
      },
      {
        id: "22997473-b408-4df0-bbd8-d718ca64d1a5",
        name: "Масло моторное (5л)",
        price: 4800,
        relations: [
          "76c1a62e-15cb-4228-979b-ef7b5bf771fd",
          "95d71f7d-d86c-4e7e-9198-8a34589968b3",
          "84e30c68-606b-4d21-9bab-3a9fa4456aea",
          "edadde3b-360c-4b61-8ed9-fb9c78277375",
          "61ea468d-0ba7-42e4-b2c0-220947b2b0be",
        ],
      },
      {
        id: "6411723a-fb9a-4ee6-87fe-019d30fa023f",
        name: "Бампер передний",
        price: 4800,
        relations: ["edadde3b-360c-4b61-8ed9-fb9c78277375"],
      },
    ],
  },
  {
    id: "4c814f52-1294-44b5-bfc5-487308c877b5",
    name: "audi",
    brands: [
      {
        id: "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
        name: "A4",
      },
      {
        id: "9b3593a9-0ece-43a9-aeee-3d3caa805021",
        name: "A6",
      },
      {
        id: "95a6c41f-93cb-4757-880a-4e452b9ddd52",
        name: "A3",
      },
      {
        id: "0803109c-4109-42a9-b77e-1aca278505da",
        name: "Q5",
      },
      {
        id: "21b06593-634f-4232-8bb2-02bbcac70793",
        name: "Q3",
      },
      {
        id: "a910ee0b-ca69-4fbb-9eaa-868ba629ee9e",
        name: "Q3",
      },
    ],
    parts: [
      {
        id: "29d16716-474a-4590-b451-6e069ea92e5e",
        name: "Масляный фильтр",
        price: 800,
        relations: ["bd4d12d2-c5f0-4873-90cd-5f9a62807084"],
      },
      {
        id: "cc7783ce-6e31-4456-b405-0149f633532a",
        name: "Воздушний фильтр",
        price: 800,
        relations: ["9b3593a9-0ece-43a9-aeee-3d3caa805021"],
      },
      {
        id: "e9fddf25-a809-412b-8ffd-d0eb58fbc311",
        name: "Салонный фильтр",
        price: 1200,
        relations: [
          "0803109c-4109-42a9-b77e-1aca278505da",
          "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
        ],
      },
      {
        id: "c3261fa9-3bd6-4e76-807e-b16a3d3656d2",
        name: "Тормозные колодки передние",
        price: 5400,
        relations: [
          "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
          "9b3593a9-0ece-43a9-aeee-3d3caa805021",
        ],
      },
      {
        id: "aff26032-3814-4bda-9a6b-f733339553bb",
        name: "Тормозные колодки задние",
        price: 5000,
        relations: [
          "95a6c41f-93cb-4757-880a-4e452b9ddd52",
          "0803109c-4109-42a9-b77e-1aca278505da",
          "21b06593-634f-4232-8bb2-02bbcac70793",
        ],
      },
      {
        id: "2d1723d8-7e02-4d8e-b52c-b6975ad21057",
        name: "Амортизатор передний",
        price: 7500,
        relations: ["9b3593a9-0ece-43a9-aeee-3d3caa805021"],
      },
      {
        id: "6ef12d5b-044e-40c7-9c9d-2cbb003dd202",
        name: "Амортизатор задний",
        price: 7300,
        relations: [
          "21b06593-634f-4232-8bb2-02bbcac70793",
          "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
        ],
      },
      {
        id: "0e8ba7d8-44d5-433d-b283-d7a652ba5f14",
        name: "Цепь ГРМ",
        price: 10200,
        relations: [
          "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
          "95a6c41f-93cb-4757-880a-4e452b9ddd52",
        ],
      },
      {
        id: "e62c54c1-397a-48d6-ac5d-85899b1796fe",
        name: "Помпа водяная",
        price: 6900,
        relations: [
          "0803109c-4109-42a9-b77e-1aca278505da",
          "9b3593a9-0ece-43a9-aeee-3d3caa805021",
        ],
      },
      {
        id: "957ae846-9fca-4891-8b09-54488b914aad",
        name: "Моторное масло (5л)",
        price: 4900,
        relations: [
          "bd4d12d2-c5f0-4873-90cd-5f9a62807084",
          "9b3593a9-0ece-43a9-aeee-3d3caa805021",
          "95a6c41f-93cb-4757-880a-4e452b9ddd52",
          "0803109c-4109-42a9-b77e-1aca278505da",
          "21b06593-634f-4232-8bb2-02bbcac70793",
          "a910ee0b-ca69-4fbb-9eaa-868ba629ee9e",
        ],
      },
      {
        id: "cc50e7c3-c926-49e3-9384-4956812d951f",
        name: "Шаровая опора",
        price: 3100,
        relations: [
          "95a6c41f-93cb-4757-880a-4e452b9ddd52",
          "21b06593-634f-4232-8bb2-02bbcac70793",
        ],
      },
      {
        id: "8e5b542d-e69e-432c-b900-c8737e095b9b",
        name: "Лобовое стекло",
        price: 11800,
        relations: ["bd4d12d2-c5f0-4873-90cd-5f9a62807084"],
      },
    ],
  },
  {
    id: "ee233206-0665-49f9-8949-4b5f382f8e2c",
    name: "mercedes",
    brands: [
      {
        id: "03c52565-1e66-4534-9df8-e982ec2cb4f3",
        name: "C-Class",
      },
      {
        id: "e45b4e69-e9f9-46bb-a41e-015d1223d288",
        name: "E-Class",
      },
      {
        id: "9ef93b5b-b4b8-4222-bc0a-f902c9b3058b",
        name: "A-Class",
      },
      {
        id: "78cc7126-d10d-4164-993c-b69ac6d272ba",
        name: "GLA",
      },
      {
        id: "cc82d020-5b25-48ac-b9a6-289ce70a5328",
        name: "GLC",
      },
    ],
    parts: [
      {
        id: "25812f15-be97-408d-9cc1-07c4a0bc938c",
        name: "Масляный фильтр",
        price: 850,
        relations: ["03c52565-1e66-4534-9df8-e982ec2cb4f3"],
      },
      {
        id: "5d86ff22-fefd-4266-828f-82a3d03f3263",
        name: "Воздушный фильтр",
        price: 1200,
        relations: ["e45b4e69-e9f9-46bb-a41e-015d1223d288"],
      },
      {
        id: "b5d1f020-d918-4084-a8ed-092097d42b48",
        name: "Салонный фильтр",
        price: 1350,
        relations: [
          "cc82d020-5b25-48ac-b9a6-289ce70a5328",
          "03c52565-1e66-4534-9df8-e982ec2cb4f3",
        ],
      },
      {
        id: "4f184232-c695-4c1a-a324-e7f826b5aba4",
        name: "Тормозные колодки передние",
        price: 5600,
        relations: [
          "03c52565-1e66-4534-9df8-e982ec2cb4f3",
          "e45b4e69-e9f9-46bb-a41e-015d1223d288",
        ],
      },
      {
        id: "0c3670b5-c731-4176-9f5e-a015c9051ec4",
        name: "Тормозные колодки задние",
        price: 5200,
        relations: [
          "78cc7126-d10d-4164-993c-b69ac6d272ba",
          "cc82d020-5b25-48ac-b9a6-289ce70a5328",
        ],
      },
      {
        id: "f122bb5f-25c4-4ca6-ac53-09890f27d931",
        name: "Амортизатор передний",
        price: 7900,
        relations: ["e45b4e69-e9f9-46bb-a41e-015d1223d288"],
      },
      {
        id: "c42a5d6d-3c23-4941-8972-beccc2d1849f",
        name: "Амортизатор задний",
        price: 7900,
        relations: [
          "03c52565-1e66-4534-9df8-e982ec2cb4f3",
          "cc82d020-5b25-48ac-b9a6-289ce70a5328",
        ],
      },
      {
        id: "86773e4b-2570-4d24-98f0-92b6ca73a8da",
        name: "Цепь ГРМ",
        price: 10500,
        relations: [
          "03c52565-1e66-4534-9df8-e982ec2cb4f3",
          "9ef93b5b-b4b8-4222-bc0a-f902c9b3058b",
        ],
      },
    ],
  },
];
