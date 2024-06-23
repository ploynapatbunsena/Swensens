import React from 'react';
import "./Banner.css"
import banner_image from "../Assets/banner-image.svg"


const Banner = () => {

  return (
    <div className="page-banner">
      <div className="banner-wrap">
        <div className="banner-container">
          <div className="banner-row-wrap">
            <div className="banner-content column-lg" style={{ paddingLeft: "15px", paddingRight: "15px"}}>
              <h1 className="heading">
                สมัครเป็นสมาชิก <br/>
                สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
              </h1>
                <div className="content">
                  <p>พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้ ยิ่งคุ้ม ใครๆ ก็สมัครได้ 
                    ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ รอไม่ได้แล้ว สมัครเลย
                  </p>
                </div>
              <div className="row">
                <div className="column-lg">
                  <div className="action-to-delivery-wrapper">
                    <a href="/delivery" className="image-btn-th"></a>
                  </div>
                </div>
                {localStorage.getItem("auth-token") ? (
                  <div className="column-lg">
                    <div className="action-card-wrapper">
                      <a href="/" className="image-btn-card"></a>
                    </div>
                  </div>
                ) : (
                  <div className="column column-lg"></div>
                )}
              </div>
            </div>
            <div className="banner-image">
              <img src={banner_image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner