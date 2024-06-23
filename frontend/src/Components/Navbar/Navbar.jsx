import React, { useState } from 'react';
import "./Navbar.css"
import icon_logo from "../Assets/swensens_logo-red.svg"
import icon_location from "../Assets/Icon/icon-location.svg"
import icon_qr_scan from "../Assets/Icon/icon-qr-scan.svg"
import icon_bag from "../Assets/Icon/icon-bag.svg"
import icon_fav from "../Assets/Icon/icon-favorite.svg"
import icon_inbox from "../Assets/Icon/icon-inbox.svg"
import icon_menu from "../Assets/Icon/menu.svg"
import { Button, Drawer } from 'antd';
import { CaretDownOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/")
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="site-header">
        <div className="site-header-left">
          <Link to="/" ><img src={icon_logo} alt="" /></Link>
        </div>
        <div className="site-header-right">
          <Link to="/address" style={{ textDecoration: "none"}}>
            <div className="curent-location">
              <img className="icon-location" src={icon_location} alt="" />
              <li>กรุณาเลือกที่อยู่จัดส่ง</li>
              <CaretDownOutlined className="icon-dropdown location-dropdown"/>
            </div>
          </Link>
          {localStorage.getItem("auth-token") ? 
          (
            <>
              <div className="scan" >
                <button className="button-scan">
                  <span className="icon"><img src=  {icon_qr_scan} alt="" /></span>
                  <span>สแกน</span>
                </button>
              </div>
              <div className="space-item">
                <ul className="header-user-menu">
                  <li  className="shopping-bag menu-item">
                    <img src={icon_bag} className="icon" alt="" />
                  </li>
                  <li className="favorite menu-item">
                    <img src={icon_fav} alt="" />
                  </li>
                  <li className="inbox menu-item">
                    <img src={icon_inbox} alt="" />
                  </li>
                  <li className="submenu-login">
                  <span style={{ padding: "0 24px"}}>TH
                    <CaretDownOutlined  className="icon-dropdown" style={{ marginLeft: "5px"}}/>
                    </span>
                  </li>
                  <li className="menu menu-item">
                    <img onClick={showDrawer} src={icon_menu} alt="" />
                    <div style={{ maxWidth: "320px"}}>
                      <Drawer 
                        title="ยินดีต้อนรับ ☺ 🍨️" 
                        onClose={onClose} 
                        open={open}  
                        width={320}
                        footer={
                          localStorage.getItem("auth-token") ? (
                            <a onClick={handleLogout} style={{ color: "#787878"}}>ออกจากระบบ</a>
                          ) : null
                        }
                      >
                        <ul>
                          <li>ข้อความ</li>
                          <li>ออเดอร์</li>
                          <li>สิืธิพิเศษ</li>
                          <li>บัตรสเวนเซ่นส์การ์ด</li>
                          <li>ข้อมูลของฉัน</li>
                        </ul>
                      </Drawer>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/register">
                <div className="regiter-button">
                  <button>สมัครสมาชิก</button>
                </div>
              </Link>
              <Link to="/login">
                <div className="login-button">
                  <button>เข้าสู่ระบบ</button>
                </div>
              </Link>
              <div className="submenu">
                <span>TH
                <CaretDownOutlined className="icon-dropdown" style={{marginLeft: "5px"}}/>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}