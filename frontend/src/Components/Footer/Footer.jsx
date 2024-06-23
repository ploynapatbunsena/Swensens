import React from 'react'
import "./Footer.css"
import swensens_logo from "../Assets/swensens-logo-white.svg"
import icon_facebook from "../Assets/Icon/icon-facebook.svg"
import icon_instagram from "../Assets/Icon/icon-instagram.svg"
import icon_youtube from "../Assets/Icon/icon-youtube.svg"

const Footer = () => {
  return (
    <div className="footer">
      <footer className="primary-footer ant-layout-footer">
        <div className="logo">
          <a href="/">
            <img src={swensens_logo} alt="" />
          </a>
        </div>
        <div className="footer-menu-wrap ant-space ant-space-horizontal ant-space-align-center">
          <div className="ant-space-item">
            <ul className="footer-menu footer-primary-menu">
              <li>
                <a href="">ไอศกรีมของเรา</a>
              </li>
              <li>
                <a href="">สิทธิพิเศษ</a>
              </li>
              <li>
                <a href="">รีวอร์ด</a>
              </li>
              <li>
                <a href="">คูปองของฉัน</a>
              </li>
              <li>
                <a href="">บัตรของขวัญ</a>
              </li>
              <li>
                <a href="">บัตรสเวนเซ่นส์การ์ด</a>
              </li>
              <li>
                <a href="">ข้อมูลของฉัน</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="secondary-footer ant-layout-footer">
        <div className="column-social ant-space ant-space-horizontal ant-space-align-center">
          <div className="ant-space-item">
            <ul className="socials">
              <li>
                <a href="https://www.facebook.com/weloveswensens/">
                  <img src={icon_facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/we_love_swensens/">
                  <img src={icon_instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCZg-uMHcpiqr3z1qiJCurIQ/videos">
                  <img src={icon_youtube} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      <div className="column-menu ant-space ant-space-horizontal ant-space-align-center">
        <div className="ant-space-item">
          <ul className="footer-menu footer-secondary-menu">
            <li>
              <a href="https://swensens1112.com/mobile/faq-th.html">คำถามที่พบบ่อย</a>
            </li>
            <li>
              <a href="/terms-conditions">ข้อกำหนดการใช้งาน</a>
            </li>
            <li>
              <a href="/privacy-policy">นโยบายความเป็นส่วนตัว</a>
            </li>
          </ul>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer