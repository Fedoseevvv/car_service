import { parts } from './placeholder-data';
import type { Part } from './types';

type FetchPartsParams = {
  generationId: string | null;
  sortOrder?: string | null;
};

export async function fetchParts({ generationId, sortOrder }: FetchPartsParams): Promise<Part[]> {
  let filteredParts = parts;

  if (generationId) {
    filteredParts = parts.filter(part => part.generationId === generationId);
  }

  if (sortOrder) {
    filteredParts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return filteredParts;
} 