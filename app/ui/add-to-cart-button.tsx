'use client';

import { useCart } from '../lib/cart-context';

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({ id, name, price }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ id, name, price })}
      className="px-3 py-1 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      В корзину
    </button>
  );
} 