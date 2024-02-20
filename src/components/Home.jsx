import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductAction } from "../redux/action/ProductAction";
import { CounterContext } from "../Context/CounterContext";
import { CartContext } from "../Context/cartContext";

const Home = () => {
  const { counter, setcounter } = useContext(CounterContext);
  const { data, setData } = useContext(CartContext);
  const nav = useNavigate();
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const ProductData = useSelector((state) => state.product);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const da = await res.json();
    dispatch(ProductAction(da.products));
    // setData(da.products);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(data);
  console.log("ProductData", ProductData);
  return (
    <div className="container">
      {/* <h1>Count: {counter}</h1>
      <button onClick={() => setcounter((p) => p + 5)}>Increment</button> */}
      {/* <div>
        <h1>Count: {data}</h1>
        <button onClick={() => setData((p) => p + 5)}>Increment</button>
      </div> */}

      {ProductData.map((x) => (
        <div key={x.id} className="images">
          <img
            onClick={() => nav("details", { state: x })}
            src={x.thumbnail}
            alt=""
            height={300}
            width={400}
          />
          <h2>{x.title}</h2>
          <h3>$ {x.price}</h3>
          {/* <div>
            {x.images.map((i) => (
              <img key={i} onClick={()=>nav('details',{state:x})} src={i} alt="" />
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Home;
