function InformationProduct({ product }) {
  return (
    <div className='column-info'>
      <div>
        <h4>{product.title}</h4>
        <button>{product.button_title}</button>
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
