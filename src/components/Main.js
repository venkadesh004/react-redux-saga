import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state);
  console.log("Main Page Data", data);
  const product = {
    name: "IPhone",
    category: "Electronics",
    price: 1000,
    color: "Black",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Add to Cart
      </button>
      <button onClick={() => dispatch(emptyCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(productList(product))}>
        Call Product List
      </button>
    </div>
  );
};

export default Main;
