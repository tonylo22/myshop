import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { Link } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length?
          cartItems.map( item => <CartItem key={item.id} item={item} />)
          : <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        }
      </CartItems>
      <Link to="/checkout" >
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted} >Checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;