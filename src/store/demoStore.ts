import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { ProductType } from '../pages/DemoPage';

// Interface Definitions
interface productStoreState {
  products: ProductType[];
  setProducts: (productList: ProductType[]) => void;
}

export const productStore = create<productStoreState>(
  devtools((set) => ({
    products: [],
    setProducts: (productList) => set({ products: productList }),
  }))
);
