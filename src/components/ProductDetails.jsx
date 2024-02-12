import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const {
    state: { title, description, price, brand, thumbnail },
  } = useLocation();
  console.log(title);
  return (
    <div className="conatiner1">
      <img src={thumbnail} alt="" />
      <div>
        <h4>{description}</h4>
        <h3>$ {price}</h3>
        <h3>{brand}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
