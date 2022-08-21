import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { Link } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className="cart-dropdown-container" >
      <div className="cart-items">
        {cartItems.map( item => <CartItem key={item.id} item={item} />)}
      </div>
      <Link to="/checkout" >
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;