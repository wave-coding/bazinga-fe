import { Link } from "react-router-dom";

function FourProduct({ products }) {
  return (
    <>
      <div>
        {products.map((product, index) => (
          <section key={index}>
            <h4>{product.title}</h4>
            <div className='column'>
              {product.products_col_one.map((single_product, index) => (
                <Link
                  key={index}
                  to={`${product.path}/${single_product.id}`}>
                  <div className='columns'>
                    <img
                      src={single_product.img}
                      alt={single_product.name}
                    />
                    <p>{single_product.name.substring(0, 20) + "..."}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='column'>
              {product.products_col_two.map((single_product, index) => (
                <Link
                  key={index}
                  to={`${product.path}/${single_product.id}`}>
                  <div className='columns'>
                    <img
                      src={single_product.img}
                      alt={single_product.name}
                    />
                    <p>{single_product.name.substring(0, 20) + "..."}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default FourProduct;
