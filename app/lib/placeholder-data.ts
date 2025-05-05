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
        generations: [
          {
            id: "1975a28d-ba50-4c23-9973-a2fd5736edb5",
            name: "E140 (2006–2013)",
          },
          {
            id: "f149ba9a-2009-46cf-9cb1-81d267a2948e",
            name: "E170 (2013–2018)",
          },
        ],
      },
      {
        id: "b4e43176-25cf-4455-9e83-7f78b1e31eb6",
        name: "Camry",
        generations: [
          {
            id: "f70e7961-e084-46ef-8e7d-80bcdbed9efa",
            name: "XV40 (2006–2011)",
          },
          {
            id: "0aad5d1c-60bd-42f8-a120-eebb8a223784",
            name: "XV50 (2011–2017)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "d42e427f-0833-4e3f-af28-662986ad99e5",
        name: "Масляный фильтр",
        price: 450,
        relations: [
          "1975a28d-ba50-4c23-9973-a2fd5736edb5",
          "f149ba9a-2009-46cf-9cb1-81d267a2948e",
          "f70e7961-e084-46ef-8e7d-80bcdbed9efa",
        ],
      },
      {
        id: "10ff465a-f764-4ce7-ad79-c8ea527e20cc",
        name: "Воздушный фильтр",
        price: 600,
        relations: [
          "f149ba9a-2009-46cf-9cb1-81d267a2948e",
          "f70e7961-e084-46ef-8e7d-80bcdbed9efa",
        ],
      },
      {
        id: "ba713936-c595-4a0f-932c-a95fe19aba96",
        name: "Салонный фильтр",
        price: 700,
        relations: ["1975a28d-ba50-4c23-9973-a2fd5736edb5"],
      },
      {
        id: "5435080c-cb2e-4adc-837c-20919fda1a2b",
        name: "Тормозные колодки передние",
        price: 2800,
        relations: ["f149ba9a-2009-46cf-9cb1-81d267a2948e"],
      },
      {
        id: "88c2dbe8-ab84-45fd-8cb6-d3d68e091217",
        name: "Масло моторное (4л)",
        price: 2800,
        relations: [
          "1975a28d-ba50-4c23-9973-a2fd5736edb5",
          "f149ba9a-2009-46cf-9cb1-81d267a2948e",
          "f70e7961-e084-46ef-8e7d-80bcdbed9efa",
          "0aad5d1c-60bd-42f8-a120-eebb8a223784",
        ],
      },
    ],
  },
  {
    id: "f4558f9b-3d83-4034-be2d-f69053b5732a",
    name: "bmw",
    brands: [
      {
        id: "76c1a62e-15cb-4228-9798-ef7b5bf771fd",
        name: "3 Series",
        generations: [
          {
            id: "142aa4e6-140e-4445-b26e-ef7c29e0e350",
            name: "E46 (1998–2006)",
          },
        ],
      },
      {
        id: "95d71f7d-d86c-4e7e-9198-8a34589968b3",
        name: "3 Series",
        generations: [
          {
            id: "19e1d5b9-5e5e-44ad-86f7-d1cf107af56f",
            name: "E90 (2005–2013)",
          },
        ],
      },
      {
        id: "84e30c68-606b-4d21-9bab-3a9fa4456aea",
        name: "5 Series",
        generations: [
          {
            id: "ec8421c1-5e6d-4b92-93e7-21eed239f7a0",
            name: "E39 (1995–2003)",
          },
        ],
      },
      {
        id: "edadde3b-360c-4b61-8ed9-fb9c78277375",
        name: "5 Series",
        generations: [
          {
            id: "70e306eb-50a8-40c6-82fd-a207916182b2",
            name: "E60 (2003–2010)",
          },
        ],
      },
      {
        id: "61ea468d-0ba7-42e4-b2c0-220947b2b0be",
        name: "5 Series",
        generations: [
          {
            id: "5964ace5-5c43-4363-a5ae-d2562f9bc900",
            name: "F10 (2010–2017)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "2a2724fa-e1b1-4d92-86aa-b50575213907",
        name: "Масляный фильтр",
        price: 750,
        relations: [
          "142aa4e6-140e-4445-b26e-ef7c29e0e350",
          "19e1d5b9-5e5e-44ad-86f7-d1cf107af56f",
        ],
      },
      {
        id: "7bf1b63c-c030-430a-bcdb-3f32d702af84",
        name: "Воздушный фильтр",
        price: 1100,
        relations: [
          "ec8421c1-5e6d-4b92-93e7-21eed239f7a0",
          "70e306eb-50a8-40c6-82fd-a207916182b2",
        ],
      },
      {
        id: "104a9ed7-653a-4580-8f36-af05c3887427",
        name: "Амортизатор передний",
        price: 7600,
        relations: ["5964ace5-5c43-4363-a5ae-d2562f9bc900"],
      },
      {
        id: "22997473-b408-4df0-bbd8-d718ca64d1a5",
        name: "Масло моторное (5л)",
        price: 4800,
        relations: [
          "142aa4e6-140e-4445-b26e-ef7c29e0e350",
          "19e1d5b9-5e5e-44ad-86f7-d1cf107af56f",
          "ec8421c1-5e6d-4b92-93e7-21eed239f7a0",
          "70e306eb-50a8-40c6-82fd-a207916182b2",
          "5964ace5-5c43-4363-a5ae-d2562f9bc900",
        ],
      },
      {
        id: "6411723a-fb9a-4ee6-87fe-019d30fa023f",
        name: "Бампер передний",
        price: 4800,
        relations: ["70e306eb-50a8-40c6-82fd-a207916182b2"],
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
        generations: [
          {
            id: "f6c752f2-4919-4015-b2fe-9941a87998d4",
            name: "B8 (2008–2016)",
          },
        ],
      },
      {
        id: "9b3593a9-0ece-43a9-aeee-3d3caa805021",
        name: "A6",
        generations: [
          {
            id: "d2bf65ab-2b47-4c6c-82a0-d95b6acfd650",
            name: "C6 (2004–2011)",
          },
        ],
      },
      {
        id: "95a6c41f-93cb-4757-880a-4e452b9ddd52",
        name: "A3",
        generations: [
          {
            id: "24f6f62c-ad6d-4f41-938c-8d0ead1a845b",
            name: "8P (2003–2012)",
          },
        ],
      },
      {
        id: "0803109c-4109-42a9-b77e-1aca278505da",
        name: "Q5",
        generations: [
          {
            id: "cb2a5f5f-b8c1-404d-800c-4f29150840d2",
            name: "8R (2008–2017)",
          },
        ],
      },
      {
        id: "21b06593-634f-4232-8bb2-02bbcac70793",
        name: "Q3",
        generations: [
          {
            id: "1583d921-7391-4053-a069-63dfc953386b",
            name: "8U (2011–2018)",
          },
        ],
      },
      {
        id: "a910ee0b-ca69-4fbb-9eaa-868ba629ee9e",
        name: "Q3",
        generations: [
          {
            id: "1583d921-7391-4053-a069-63dfc953386b",
            name: "8U (2011–2018)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "29d16716-474a-4590-b451-6e069ea92e5e",
        name: "Масляный фильтр",
        price: 800,
        relations: ["f6c752f2-4919-4015-b2fe-9941a87998d4"],
      },
      {
        id: "cc7783ce-6e31-4456-b405-0149f633532a",
        name: "Воздушний фильтр",
        price: 800,
        relations: ["d2bf65ab-2b47-4c6c-82a0-d95b6acfd650"],
      },
      {
        id: "e9fddf25-a809-412b-8ffd-d0eb58fbc311",
        name: "Салонный фильтр",
        price: 1200,
        relations: [
          "cb2a5f5f-b8c1-404d-800c-4f29150840d2",
          "f6c752f2-4919-4015-b2fe-9941a87998d4",
        ],
      },
      {
        id: "c3261fa9-3bd6-4e76-807e-b16a3d3656d2",
        name: "Тормозные колодки передние",
        price: 5400,
        relations: [
          "f6c752f2-4919-4015-b2fe-9941a87998d4",
          "d2bf65ab-2b47-4c6c-82a0-d95b6acfd650",
        ],
      },
      {
        id: "aff26032-3814-4bda-9a6b-f733339553bb",
        name: "Тормозные колодки задние",
        price: 5000,
        relations: [
          "24f6f62c-ad6d-4f41-938c-8d0ead1a845b",
          "cb2a5f5f-b8c1-404d-800c-4f29150840d2",
          "1583d921-7391-4053-a069-63dfc953386b",
        ],
      },
      {
        id: "2d1723d8-7e02-4d8e-b52c-b6975ad21057",
        name: "Амортизатор передний",
        price: 7500,
        relations: ["d2bf65ab-2b47-4c6c-82a0-d95b6acfd650"],
      },
      {
        id: "6ef12d5b-044e-40c7-9c9d-2cbb003dd202",
        name: "Амортизатор задний",
        price: 7300,
        relations: [
          "1583d921-7391-4053-a069-63dfc953386b",
          "f6c752f2-4919-4015-b2fe-9941a87998d4",
        ],
      },
      {
        id: "0e8ba7d8-44d5-433d-b283-d7a652ba5f14",
        name: "Цепь ГРМ",
        price: 10200,
        relations: [
          "f6c752f2-4919-4015-b2fe-9941a87998d4",
          "24f6f62c-ad6d-4f41-938c-8d0ead1a845b",
        ],
      },
      {
        id: "e62c54c1-397a-48d6-ac5d-85899b1796fe",
        name: "Помпа водяная",
        price: 6900,
        relations: [
          "cb2a5f5f-b8c1-404d-800c-4f29150840d2",
          "d2bf65ab-2b47-4c6c-82a0-d95b6acfd650",
        ],
      },
      {
        id: "957ae846-9fca-4891-8b09-54488b914aad",
        name: "Моторное масло (5л)",
        price: 4900,
        relations: [
          "f6c752f2-4919-4015-b2fe-9941a87998d4",
          "d2bf65ab-2b47-4c6c-82a0-d95b6acfd650",
          "24f6f62c-ad6d-4f41-938c-8d0ead1a845b",
          "cb2a5f5f-b8c1-404d-800c-4f29150840d2",
          "1583d921-7391-4053-a069-63dfc953386b",
        ],
      },
      {
        id: "cc50e7c3-c926-49e3-9384-4956812d951f",
        name: "Шаровая опора",
        price: 3100,
        relations: [
          "24f6f62c-ad6d-4f41-938c-8d0ead1a845b",
          "1583d921-7391-4053-a069-63dfc953386b",
        ],
      },
      {
        id: "8e5b542d-e69e-432c-b900-c8737e095b9b",
        name: "Лобовое стекло",
        price: 11800,
        relations: ["f6c752f2-4919-4015-b2fe-9941a87998d4"],
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
        generations: [
          {
            id: "af11c1f2-f013-4f4d-ada2-ee15ae2ac436",
            name: "W205/S205/C205/A205 (2014—2018)",
          },
        ],
      },
      {
        id: "e45b4e69-e9f9-46bb-a41e-015d1223d288",
        name: "E-Class",
        generations: [
          {
            id: "ffcdc733-e92b-43c4-bf25-1539bf033a54",
            name: "W213/S213/C238/A238 (2016—2021)",
          },
        ],
      },
      {
        id: "9ef93b5b-b4b8-4222-bc0a-f902c9b3058b",
        name: "A-Class",
        generations: [
          {
            id: "3ec5cc0a-08dd-4283-a21a-fec1546d26a3",
            name: "W176 (2012—2015)",
          },
        ],
      },
      {
        id: "78cc7126-d10d-4164-993c-b69ac6d272ba",
        name: "GLA",
        generations: [
          {
            id: "ebef1f2a-1bfc-4b78-a4e9-a884d0e2693b",
            name: "X156 (2013—2017)",
          },
        ],
      },
      {
        id: "cc82d020-5b25-48ac-b9a6-289ce70a5328",
        name: "GLC",
        generations: [
          {
            id: "7a84b7ef-9804-43c7-b8db-0a53b152022c",
            name: "X253 (2015-2019)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "25812f15-be97-408d-9cc1-07c4a0bc938c",
        name: "Масляный фильтр",
        price: 850,
        relations: ["af11c1f2-f013-4f4d-ada2-ee15ae2ac436"],
      },
      {
        id: "5d86ff22-fefd-4266-828f-82a3d03f3263",
        name: "Воздушный фильтр",
        price: 1200,
        relations: ["ffcdc733-e92b-43c4-bf25-1539bf033a54"],
      },
      {
        id: "b5d1f020-d918-4084-a8ed-092097d42b48",
        name: "Салонный фильтр",
        price: 1350,
        relations: [
          "7a84b7ef-9804-43c7-b8db-0a53b152022c",
          "af11c1f2-f013-4f4d-ada2-ee15ae2ac436",
        ],
      },
      {
        id: "4f184232-c695-4c1a-a324-e7f826b5aba4",
        name: "Тормозные колодки передние",
        price: 5600,
        relations: [
          "af11c1f2-f013-4f4d-ada2-ee15ae2ac436",
          "ffcdc733-e92b-43c4-bf25-1539bf033a54",
        ],
      },
      {
        id: "0c3670b5-c731-4176-9f5e-a015c9051ec4",
        name: "Тормозные колодки задние",
        price: 5200,
        relations: [
          "ebef1f2a-1bfc-4b78-a4e9-a884d0e2693b",
          "7a84b7ef-9804-43c7-b8db-0a53b152022c",
        ],
      },
      {
        id: "f122bb5f-25c4-4ca6-ac53-09890f27d931",
        name: "Амортизатор передний",
        price: 7900,
        relations: ["ffcdc733-e92b-43c4-bf25-1539bf033a54"],
      },
      {
        id: "c42a5d6d-3c23-4941-8972-beccc2d1849f",
        name: "Амортизатор задний",
        price: 7900,
        relations: [
          "af11c1f2-f013-4f4d-ada2-ee15ae2ac436",
          "7a84b7ef-9804-43c7-b8db-0a53b152022c",
        ],
      },
      {
        id: "86773e4b-2570-4d24-98f0-92b6ca73a8da",
        name: "Цепь ГРМ",
        price: 10500,
        relations: [
          "af11c1f2-f013-4f4d-ada2-ee15ae2ac436",
          "3ec5cc0a-08dd-4283-a21a-fec1546d26a3",
        ],
      },
    ],
  },
  {
    id: "bbd0c569-87af-4e98-a87b-ff75e69556a0",
    name: "Lexus",
    brands: [
      {
        id: "3adad076-73f2-464f-80cd-2379239f71dc",
        name: "CT",
        generations: [
          {
            id: "3b57da60-7ed3-43ba-8883-2717e5555afa",
            name: "I (2010-2014)",
          },
        ],
      },
      {
        id: "9ae1f715-e3b3-4c02-90fc-7df8d85d5c1d",
        name: "ES",
        generations: [
          {
            id: "eac9b43f-c553-4d6d-9bba-6b1d277d9897",
            name: "XV70 (2018-2021)",
          },
        ],
      },
      {
        id: "9b977558-1013-461c-82e5-4fce68ba7af8",
        name: "GS",
        generations: [
          {
            id: "d90f36a8-2b04-41ee-b176-c144950b168b",
            name: "IV (2011-2015)",
          },
        ],
      },
      {
        id: "696e7af0-1611-4b89-9a4b-4d631403de9c",
        name: "IS",
        generations: [
          {
            id: "9f052eb6-b726-45e1-8250-5366da92e7b7",
            name: "III (2013-2016)",
          },
        ],
      },
      {
        id: "6253e22a-cbe1-4a8e-ad90-7ad732ebbb4b",
        name: "LX",
        generations: [
          {
            id: "87c0198b-6bf2-4092-8cfc-9059d57cd391",
            name: "J310 (2021-2025)",
          },
        ],
      },
      {
        id: "c398d457-5c36-460f-be34-9f279ca25501",
        name: "NX",
        generations: [
          {
            id: "f185cbf2-63a6-49a4-a05e-12b8f5b164c9",
            name: "Z10 (2014-2017)",
          },
        ],
      },
      {
        id: "120ccf4e-12fe-4ec9-af25-679e9927ab54",
        name: "RX",
        generations: [
          {
            id: "03e99e35-e56c-4f84-82e2-34df257ccedf",
            name: "IV (2015-2019)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "406f2d2b-d0f8-45a1-b979-f05eb332564e",
        name: "Масляный фильтр",
        price: 450,
        relations: [
          "3b57da60-7ed3-43ba-8883-2717e5555afa",
          "eac9b43f-c553-4d6d-9bba-6b1d277d9897",
          "d90f36a8-2b04-41ee-b176-c144950b168b",
          "9f052eb6-b726-45e1-8250-5366da92e7b7",
        ],
      },
      {
        id: "040ae302-17a3-4fe3-82a3-007b18264f91",
        name: "Воздушный фильтр",
        price: 600,
        relations: [
          "f185cbf2-63a6-49a4-a05e-12b8f5b164c9",
          "03e99e35-e56c-4f84-82e2-34df257ccedf",
        ],
      },
      {
        id: "3306bf8b-d107-4476-a8ba-457e27f586f9",
        name: "Салонный фильтр",
        price: 700,
        relations: [
          "3b57da60-7ed3-43ba-8883-2717e5555afa",
          "9f052eb6-b726-45e1-8250-5366da92e7b7",
        ],
      },
      {
        id: "f81aeff2-95c9-4e9b-b317-ab06289993bd",
        name: "Тормозные колодки передние",
        price: 2800,
        relations: [
          "9f052eb6-b726-45e1-8250-5366da92e7b7",
          "9f052eb6-b726-45e1-8250-5366da92e7b7",
        ],
      },
      {
        id: "9bac0281-7282-4754-bc8c-3042302b1ac5",
        name: "Масло моторное (4л)",
        price: 2800,
        relations: [
          "3b57da60-7ed3-43ba-8883-2717e5555afa",
          "eac9b43f-c553-4d6d-9bba-6b1d277d9897",
          "d90f36a8-2b04-41ee-b176-c144950b168b",
          "9f052eb6-b726-45e1-8250-5366da92e7b7",
          "87c0198b-6bf2-4092-8cfc-9059d57cd391",
          "f185cbf2-63a6-49a4-a05e-12b8f5b164c9",
          "03e99e35-e56c-4f84-82e2-34df257ccedf",
        ],
      },
    ],
  },
  {
    id: "b980f503-1926-4a70-a4a7-33aef819f45f",
    name: "KIA",
    brands: [
      {
        id: "12fb2d0c-0df7-4179-824b-2593554042d9",
        name: "Ceed",
        generations: [
          {
            id: "5b7d7ea8-f321-4c78-b0ae-be1577b44330",
            name: "CD (2018-2021)",
          },
        ],
      },
      {
        id: "146c8494-fbc1-4b77-8d0f-426a1325c1fa",
        name: "Sportage",
        generations: [
          {
            id: "a6c558ff-753c-4941-b533-c22157e9a70a",
            name: "IV (2015-2018)",
          },
        ],
      },
      {
        id: "d3e46237-c57b-428e-a652-0780a1400a36",
        name: "Stinger",
        generations: [
          {
            id: "04496f25-b243-4637-9c9e-563b1e7cfcc2",
            name: "I (2017-2021)",
          },
        ],
      },
      {
        id: "5e41a82d-ca29-420e-8ca9-e7aadd3dcdd9",
        name: "Magentis",
        generations: [
          {
            id: "4e0f57a0-68fc-436d-acf4-33a966f98b5e",
            name: "II (2005-2008)",
          },
        ],
      },
      {
        id: "6d2eb92f-2aef-4d5f-b115-a35c8b32afa8",
        name: "Cerato",
        generations: [
          {
            id: "a92fa09d-a89a-48e4-9a70-4f232e4a6c3d",
            name: "IV (2018-2022)",
          },
        ],
      },
      {
        id: "94e3e2a2-ef4e-411f-8d76-af71bae95c4b",
        name: "Optima",
        generations: [
          {
            id: "1ee0a7ba-e25c-4240-96fa-fdb84424fa09",
            name: "IV (2015-2018)",
          },
        ],
      },
      {
        id: "825bc1da-b5ce-4822-a521-6d76f0b29fc1",
        name: "K5",
        generations: [
          {
            id: "f8c987ad-a386-4539-91fc-df219e8ddf9a",
            name: "III (2019-2025)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "ab16e49b-3fb3-4ebd-b7cb-f1f065f201dc",
        name: "Масляный фильтр",
        price: 450,
        relations: [
          "5b7d7ea8-f321-4c78-b0ae-be1577b44330",
          "a6c558ff-753c-4941-b533-c22157e9a70a",
          "04496f25-b243-4637-9c9e-563b1e7cfcc2",
          "4e0f57a0-68fc-436d-acf4-33a966f98b5e",
        ],
      },
      {
        id: "1d3d834c-f03e-4270-82d3-3e34c503ce75",
        name: "Воздушный фильтр",
        price: 600,
        relations: [
          "1ee0a7ba-e25c-4240-96fa-fdb84424fa09",
          "f8c987ad-a386-4539-91fc-df219e8ddf9a",
        ],
      },
      {
        id: "7ca8b6b9-78b8-43d9-8054-18f90c01b652",
        name: "Салонный фильтр",
        price: 700,
        relations: [
          "4e0f57a0-68fc-436d-acf4-33a966f98b5e",
          "a6c558ff-753c-4941-b533-c22157e9a70a",
        ],
      },
      {
        id: "528c1322-c902-44eb-8ac8-866adfb291af",
        name: "Тормозные колодки передние",
        price: 2800,
        relations: [
          "04496f25-b243-4637-9c9e-563b1e7cfcc2",
          "1ee0a7ba-e25c-4240-96fa-fdb84424fa09",
        ],
      },
      {
        id: "258f0524-46ce-439d-9e18-de7fc34f210d",
        name: "Масло моторное (4л)",
        price: 2800,
        relations: [
          "5b7d7ea8-f321-4c78-b0ae-be1577b44330",
          "a6c558ff-753c-4941-b533-c22157e9a70a",
          "04496f25-b243-4637-9c9e-563b1e7cfcc2",
          "4e0f57a0-68fc-436d-acf4-33a966f98b5e",
          "a92fa09d-a89a-48e4-9a70-4f232e4a6c3d",
          "1ee0a7ba-e25c-4240-96fa-fdb84424fa09",
          "f8c987ad-a386-4539-91fc-df219e8ddf9a",
        ],
      },
    ],
  },
  {
    id: "157b68cb-2530-4f61-be74-4636b126b1c4",
    name: "FORD",
    brands: [
      {
        id: "dd9e236d-1f42-4477-9c10-7f99f9956ac3",
        name: "Fiesta",
        generations: [
          {
            id: "14a66d84-26a8-4933-84c0-ccc55d810ec8",
            name: "MK7 (2017-2022)",
          },
        ],
      },
      {
        id: "e005695f-3572-4b50-8ab7-9b249bb01ec4",
        name: "Focus",
        generations: [
          {
            id: "aee0d080-3600-40a1-9e2e-a249aea85345",
            name: "III (2011-2015)",
          },
        ],
      },
      {
        id: "135b049e-38df-4b42-b0a1-c0486b5a4f0d",
        name: "Kuga",
        generations: [
          {
            id: "7f09941e-af84-43a3-af5e-e1211c9262a7",
            name: "II (2012-2016)",
          },
        ],
      },
      {
        id: "cb8311eb-4e0c-47a2-b5aa-b3b568d591c7",
        name: "Ka",
        generations: [
          {
            id: "3a827f58-efa3-4775-9c41-1dcc32771440",
            name: "II (2008-2016)",
          },
        ],
      },
      {
        id: "f9c6dec9-0d55-4aed-87f6-c3563aab57fe",
        name: "Mustang",
        generations: [
          {
            id: "ca526413-a09e-4a37-bc93-c41b5eba1a3c",
            name: "VI (2014-2017)",
          },
        ],
      },
      {
        id: "e0eb9464-e379-4b66-9ce3-2d5e4d5d9df2",
        name: "Mondeo",
        generations: [
          {
            id: "1700e36f-3de1-4f8d-9abc-152ef8540953",
            name: "V (2014-2019)",
          },
        ],
      },
      {
        id: "aaf58862-9307-4346-ae37-66594cfe43fe",
        name: "Sierra",
        generations: [
          {
            id: "6d6c3392-aca1-4670-bc41-c0dfac1a5209",
            name: "I (1982-1989)",
          },
        ],
      },
    ],
    parts: [
      {
        id: "afe9de2f-9e2d-4a2c-8289-235281970910",
        name: "Масляный фильтр",
        price: 450,
        relations: [
          "14a66d84-26a8-4933-84c0-ccc55d810ec8",
          "aee0d080-3600-40a1-9e2e-a249aea85345",
          "7f09941e-af84-43a3-af5e-e1211c9262a7",
          "3a827f58-efa3-4775-9c41-1dcc32771440",
        ],
      },
      {
        id: "e4e50222-e810-4dfb-bccc-9d1d937a8e02",
        name: "Воздушный фильтр",
        price: 600,
        relations: [
          "ca526413-a09e-4a37-bc93-c41b5eba1a3c",
          "1700e36f-3de1-4f8d-9abc-152ef8540953",
        ],
      },
      {
        id: "1286ea71-90c8-4789-a7dd-955ee9b64561",
        name: "Салонный фильтр",
        price: 700,
        relations: [
          "6d6c3392-aca1-4670-bc41-c0dfac1a5209",
          "7f09941e-af84-43a3-af5e-e1211c9262a7",
        ],
      },
      {
        id: "ec110b8a-6433-431e-bd66-ace0edbedbd6",
        name: "Тормозные колодки передние",
        price: 2800,
        relations: [
          "3a827f58-efa3-4775-9c41-1dcc32771440",
          "6d6c3392-aca1-4670-bc41-c0dfac1a5209",
        ],
      },
      {
        id: "fdabdb36-44b2-4752-bbff-cf5a4a7ad988",
        name: "Масло моторное (4л)",
        price: 2800,
        relations: [
          "14a66d84-26a8-4933-84c0-ccc55d810ec8",
          "aee0d080-3600-40a1-9e2e-a249aea85345",
          "7f09941e-af84-43a3-af5e-e1211c9262a7",
          "3a827f58-efa3-4775-9c41-1dcc32771440",
          "ca526413-a09e-4a37-bc93-c41b5eba1a3c",
          "1700e36f-3de1-4f8d-9abc-152ef8540953",
          "6d6c3392-aca1-4670-bc41-c0dfac1a5209",
        ],
      },
    ],
  },
];
