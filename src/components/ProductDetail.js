import { useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"


const { Option } = Select;


function ProductDetail({product}) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    const [color, setColor] = useState();

   return (
       
    <div className="detail-container">  
        <Row className=" shop-container " >
            <Col  lg={{ span: 11 }} sm={{ span: 20 }} xs={{ span:24 }}>
            <img
                alt=""
                className="product-top-image"
                src={product.image}
            />
                
            </Col>
            <Col  className="shop-top-right" lg={{span:7, offset:1}} sm={{ span: 17 }} xs={{ span:18 }}>
                <div className="shop-top-right-container">
                    <h2 className="product-name">
                        {product.name}
                    </h2>    
                    <p className="product-author">
                        {product.author}
                    </p>
                    <p>${product.price}</p>
                   
                <p className="product-color">
                    <p> Color</p>
                        {"   "}
                        <Select 
                            defaultValue={color} 
                            placeholder="Select color"
                            className="select-style shop-top-right-container"
                            onChange={val=>setColor(val)}
                            size="large"
                        >
                            {[...Array(product.color.length).keys()].map((x) => (
                                <Option value={product.color[x]}>
                                {product.color[x]}
                                </Option>
                            ))}
                        </Select>
                    </p>
                    <div>
                        <p className="product-detail-qty">
                            <p>Quantity </p>
                            {"   "}
                            <Select 
                                defaultValue={qty} 
                                className="select-style"
                                onChange={val=>setQty(val)}
                            >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </Option>
                                ))}
                            </Select>
                          
                        </p>
                    </div>
                    <AddToCart product={product} qty={qty} />
                </div>
            </Col>
        </Row>
        <div className="shop-container">
            <Row className=" shop-top-right " gutter={[32, 32]}>
                <Col lg={{span:19}} sm={{ span: 18}} xs={{ span:19 }}>
                    <h5 className="description">Description</h5>
                    <p >{product.description}</p>

                    <li className="product-description.long">{product.descriptionlong1}</li>
                    <li className="product-description.long">{product.descriptionlong2}</li>
                    <li className="product-description.long">{product.descriptionlong3}</li>
                    <li className="product-description.long">{product.descriptionlong4}</li>
                    <li className="product-description.long">{product.descriptionlong5}</li>
                </Col>
            </Row>
        </div>
        <div className="related-products-container">
            <hr className="related-products"></hr>
            <h5 style={{ margin:"0" }}>Related Products</h5>
            <hr className="related-products"></hr>
            <Row className="shop-container" gutter={[16, 32]}>
            
                <Col lg={{span:1}} >
                    <button type="button" className="related-btn"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-privious.png"  alt=""/></button>
                </Col>
                <Col lg={{ span:17 }} sm={{ span:16 }} xs={{ span:16 }}>
                    <div className="related-products-images">
                        <Col  lg={{span:6}} sm={{span:12}} id="photo">
                            
                            <img className="products-image" src={product.detailproduct1} alt=""/>
                        </Col>
                        <Col  lg={{span:6}} sm={{span:12}} xs={{ span:0 }}>
                            <img className="products-image" src={product.detailproduct2} alt=""/>
                        </Col>
                        <Col  lg={{span:6}} sm={{span:0}} xs={{ span:0 }}>
                            <img className="products-image" src={product.detailproduct3} alt=""/>
                        </Col>
                        <Col  lg={{span:6}} sm={{span:0}} xs={{ span:0 }}>
                            <img className="products-image" src={product.detailproduct4} alt="" />
                        </Col>
                    </div> 
                </Col>
                <Col  lg={{span:1}} >
                    <div className="btn2">
                        <button type="button" className="related-btn "> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-next.png"  alt=""/></button>
                    </div>
                </Col>
            </Row>
        </div>

        

            
      </div>
   );
}

export default ProductDetail;