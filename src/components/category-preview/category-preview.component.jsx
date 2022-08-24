import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => navigate(`${title}`)} >{title.toUpperCase()}</span>
      </h2>
      <div className="preview" >
        {products.map((product, index)=>{
          return index<4 && <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;