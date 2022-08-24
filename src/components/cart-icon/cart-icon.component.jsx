import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartIcon = ({onClick}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartIconContainer onClick={onClick} >
      <ShoppingIcon/>
      <ItemCount>
        {cartItems.length? cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0):0}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;