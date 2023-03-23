import { Link } from "react-router-dom";

function InformationProduct({ product }) {
  return (
    <div className='column-info'>
      <div>
        <h4>{product.title}</h4>
        <Link to={"/signup"}>
          <button>{product.button_title}</button>
        </Link>
      </div>
      <div>
        <img
          src={product.img}
          alt={product.title}
        />
      </div>
    </div>
  );
}

export default InformationProduct;
