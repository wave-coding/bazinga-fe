function FourProductApp({ products }) {
  return (
    <>
      <div>
        {products.map((product, index) => (
          <section key={index}>
            <h4>{product.title}</h4>
            <div className='column'>
              {product.products_col_one.map((single_product, index) => (
                <div
                  className='column-1'
                  key={index}>
                  <img
                    src={single_product.img}
                    alt={single_product.name}
                  />
                  <p>{single_product.name}</p>
                </div>
              ))}
            </div>
            <div className='column'>
              {product.products_col_two.map((single_product, index) => (
                <div
                  className='column-2'
                  key={index}>
                  <img
                    src={single_product.img}
                    alt={single_product.name}
                  />
                  <p>{single_product.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default FourProductApp;
