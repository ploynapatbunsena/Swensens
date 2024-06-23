import React, { useContext, useEffect, useState } from 'react';
import Bottom from '../Components/Bottom/Bottom';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Delivery.css';
import Navigation from '../Components/Navigation/Navigation';
import sw_banner from '../Components/Assets/Product/sw-banner.jpg';

const Delivery = () => {
  const { all_product } = useContext(ShopContext);
  const [menu, setMenu] = useState("All");
  const [categoryTitle, setCategoryTitle] = useState("ทั้งหมด");

  // New Product State
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/delivery")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setNewProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching new products:", error);
      });
  }, []);

  const handleMenuChange = (menu, title) => {
    setMenu(menu);
    setCategoryTitle(title);
  };

  const getFilteredProducts = () => {
    const combinedProducts = [...all_product, ...newProduct];
    return combinedProducts.filter((item) => menu === "All" || menu === item.category);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <div className="shop-category">
        <img className="delivery-banner" src={sw_banner} alt="" />
        <div className="page-nevigation">
          <Navigation menu={menu} setMenu={handleMenuChange} />
          <div className="page-body">
            <div className="container-delivery">
              <div className="section-header" style={{ paddingLeft: "12px" }}>
                <h2>{categoryTitle}</h2>
              </div>
              <div className="product-grid">
                <div className="card-row">
                  <div className="category-products">
                    {filteredProducts.map((item, i) => (
                      <div key={i}>
                        <Item
                          id={item.id} 
                          name={item.name} 
                          image={item.image} 
                          price={item.price}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Delivery;
