
export default function Product({ product }) {

    return (
        <div className="col-md-4 product-card">
            <img className="img-product-1" alt="product-img-1" src={product.img[0]}></img>
            <img className="img-product-2" alt="product-img-2" src={product.img[1]}></img>
            <h4 className="name-product">{product.title}</h4>
            <p className="desc-product">{product.content}</p>
            <p className="price-product">{product.price}</p>
        </div>
    )
}