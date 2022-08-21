import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../components/contexts/cart.context";

const CheckoutItem = ({item}) => {
  const {name, quantity, imageUrl, price} = item;
  const { reduceCartItem, removeCartItem, addCartItem } = useContext(CartContext);

  const reduceItemHandler = e => {reduceCartItem(item);}
  const addItemHandler = e => {addCartItem(item);}
  const removeItemHandler = e => {removeCartItem(item);}
  
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={reduceItemHandler}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>&#10095;</span>
      </div>
      <span className="price">{quantity * price}</span>
      <span className="remove-button" onClick={removeItemHandler}>&#10005;</span>
    </div>
  );
}

export default CheckoutItem;