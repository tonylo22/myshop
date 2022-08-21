import "./cart-item.styles.scss";

const CartItem = ({item}) => {
  const {quantity, name, price, imageUrl} = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="Name">{name}</span>
        <span className="price">{quantity} x {`$${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;