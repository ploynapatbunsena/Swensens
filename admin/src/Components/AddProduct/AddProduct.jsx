import React from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"
import { useState } from 'react'

const AddProduct = () => {

  const [image, setImage] = useState(false);

  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    price: "",
  })

  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }

  const changeHanler = (e) => {
    setproductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product",image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body:formData,
    }).then((resp) => resp.json().then((data) => {responseData = data}))

    if (responseData.success){
      product.image = responseData.image_url
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHanler} type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHanler} type="text" name="price" placeholder="Type here"/>
        </div>
      </div>
      <div className="addproduct-description">
        <div className="addproduct-itemfield">
          <p>Description</p>
          <input value={productDetails.description} onChange={changeHanler} type="text" name="description" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHanler} name="category" className="app-product-selector">
          <option value="โปรโมชั่น">โปรโมชั่น</option>
          <option value="ไอศกรีมเค้ก">ไอศกรีมเค้ก</option>
          <option value="ไอศกรีมควอท (450g)">ไอศกรีมควอท (450g)</option>
          <option value="ไอศกรีมมินิ ควอท (250g)">ไอศกรีมมินิ ควอท (250g)</option>
          <option value="ซันเด เซต">ซันเด เซต</option>
          <option value="ไอศกรีมสกู๊ป">ไอศกรีมสกู๊ป</option>
          <option value="ไอศกรีมสมอลไบทส์">ไอศกรีมสมอลไบทส์</option>
          <option value="ท็อปปิ้ง">ท็อปปิ้ง</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduc-thumnail-img" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>
      <button onClick={() => {Add_Product()}} className="addproduct-btn">Add</button>
    </div>
  )
}

export default AddProduct