import {Card}from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem( { product }) {
    return (
        <Card className="home-product">
            <Link  to={`/product/${product.id}`}>
                <img 
                    className="product-pic"
                    src={product.image}
                    alt={product.alt} />
            </Link>
            <div className="product-info">
                <h5>
                    {product.name}
                </h5>
                <p >
                    {product.author}
                </p>
            </div>
        </Card>
    );
}