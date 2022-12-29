function SingleProduct({ product }) {
  return (
    <div className='column-single-product'>
      <article>
        <h4>{product.title}</h4>
        <img
          src={product.img}
          alt={product.title}
        />
      </article>
    </div>
  );
}

export default SingleProduct;
