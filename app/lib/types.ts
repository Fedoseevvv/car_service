export type Brand = {
  id: string;
  name: string;
};

export type Model = {
  id: string;
  name: string;
  brandId: string;
};

export type Generation = {
  id: string;
  name: string;
  modelId: string;
};

export type Part = {
  id: string;
  name: string;
  price: number;
  status: string;
  generationId: string;
}; 