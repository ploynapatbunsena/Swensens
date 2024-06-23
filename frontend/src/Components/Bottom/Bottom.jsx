import React from 'react'
import "./Bottom.css";
import google_play from "../Assets/Icon/google-play.png";
import app_store from "../Assets/Icon/app-store.png";
import app_screen from "../Assets/app-screen-webp.webp";

const Bottom = () => {
  return (
    <div className="page-bottom">
      <div className="container">
        <div className="page-bottom-row-wrap ant-row-flex ant-row-flex-middle">
          <div className="column-image ant-col ant-col-md-10 ant-col-md-offset-2">
            <div className="app-screen">
              <img src={app_screen} alt="" />
            </div>
          </div>
          <div className="column-content ant-col ant-col-md-9 ant-col-md-offset-1">
            <div className="app-download">
              <h2 className="heading-download">ดาวน์โหลดที่</h2>
              <div className="download-list">
                <div className="ant-row" style={{ marginLeft: "-12px", marginRight: "-12px"}}>
                  <div className="ant-col ant-col-12" style={{ paddingLeft: "12px", paddingRight: "12px"}}>
                    <div className="download-item">
                      <a href="https://play.google.com/store/apps/details?id=com.swensens1112.swensens">
                        <img src={google_play} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="ant-col ant-col-12" style={{ paddingLeft: "12px", paddingRight: "12px"}}>
                    <div className="download-item">
                      <a href="https://apps.apple.com/th/app/swensens/id1553427962">
                        <img src={app_store} alt="" />
                      </a>
                    </div>
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

export default Bottom