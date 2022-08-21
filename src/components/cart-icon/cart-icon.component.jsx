import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartIcon = ({onClick}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={onClick} >
      <ShoppingCart className="shopping-icon" />
      <span className="item-count" >
        {cartItems.length? cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0):0}
      </span>
    </div>
  );
};

export default CartIcon;