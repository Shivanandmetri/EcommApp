export const Product = "Product";
export const ProductAction = (Products) => {
  return {
    type: Product,
    payload: Products,
  };
};
