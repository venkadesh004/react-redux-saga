import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);

  console.log(result);

  return (
    <div className="header">
      <div className="cart-div">
        <h1>Items in cart: </h1>
        <span>{result.length}</span>
      </div>
    </div>
  );
};

export default Header;
