import { notFound } from 'next/navigation';

import { getProductById, getRelatedProducts } from '@/lib/storefront';
import StoreProductDetails from '@/views/buyer/store-details/store-details';

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  return <StoreProductDetails product={product} related={related} />;
};

export default ProductDetails;
