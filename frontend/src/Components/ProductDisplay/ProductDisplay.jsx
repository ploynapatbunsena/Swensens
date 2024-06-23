import React from 'react'
import "./ProductDisplay.css"
import arrow_back from "../Assets/Icon/arrow-back.svg"

const ProductDisplay = (props) => {

  const { product } = props;

  return (
    <div className="page-wrapper page-detail-wrapper page-product-detail">
      <div className="page-body">
        <div className="container-box large">
          <div className="ant-row-flex ant-row-flex-center">
            <div className="ant-col ant-col-20">
              <div className="section-header-action">
                <h2 className="action-heading">
                  <button className="back ant-btn ant-btn-link">
                    <img src={arrow_back} alt="" />
                  </button>
                  {product.category}
                </h2>
              </div>
              <div className="center-box">
                <div className="center-box-header">
                  <img src={product.image} alt="" />
                </div>
                <div className="center-box-body">
                  <h2 className="title">{product.name}</h2>
                  <div className="detail">
                    <div className="desciption">
                      {product.description}
                    </div>
                  </div>
                  <div className="action">
                    <button className="ant-btn ant-btn-primary ant-btn-block">
                      <span>ใส่ตะกร้า ({product.price} บาท)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay