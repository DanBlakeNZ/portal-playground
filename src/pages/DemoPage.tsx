import { useQuery } from 'react-query';
import { getProductList } from '../api/demoApi';
import { productStore } from '../store/demoStore';

// Interface Definitions
export interface ProductType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const DemoPage = () => {
  const { isLoading, isError, data } = useQuery('products', getProductList);
  const setProducts = productStore((state) => state.setProducts);
  const productList = productStore((state) => state.products);

  if (data) setProducts(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong....</div>;

  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <h1>Shop Page</h1>

      {productList?.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid black',
            marginBottom: '10px',
            padding: '10px',
          }}
        >
          <img width='60px' src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemoPage;
