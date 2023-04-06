function SingleProduct({ product }) {
  return (
    <div className='column-single-product'>
      <article>
        <h4>{product.title}</h4>
        <img
          src={product.img}
          alt={product.title}
        />
        <a href="/" style={{fontSize:"12px",textDecoration:"underline",color:"blue"}}>Shop Now</a>
      </article>
    </div>
  );
}

export default SingleProduct;
