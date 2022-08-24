import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./product-card.component.scss";

const ProductCard = ({product}) => {
  const { name, imageUrl, price } = product;
  const { addCartItem } = useContext(CartContext);

  const addToCart = (event) => {
    addCartItem(product);
  };

  return (
    <div className="product-card-container" >
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer" >
        <span className="name" >{name}</span>
        <span className="price" >{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addToCart} >Add to cart</Button>
    </div>
  );
};

export default ProductCard;