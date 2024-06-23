import React, { useRef } from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom';

const Navigation = ({ menu, setMenu }) => {

  const menuRef = useRef();

  return (
    <div className="nevigation">
      <ul ref={menuRef} className="navigation-menu">
      <li onClick={() => { setMenu("All", "ทั้งหมด") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ทั้งหมด</Link>
          {menu === "All" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("โปรโมชั่น", "โปรโมชั่น") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>โปรโมชั่น</Link>
          {menu === "โปรโมชั่น" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ไอศกรีมเค้ก", "ไอศกรีมเค้ก") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ไอศกรีมเค้ก</Link>
          {menu === "ไอศกรีมเค้ก" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ไอศกรีมควอท (450g)", "ไอศกรีมควอท (450g)") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ไอศกรีมควอท (450g)</Link>
          {menu === "ไอศกรีมควอท (450g)" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ไอศกรีมมินิ ควอท (250g)", "ไอศกรีมมินิ ควอท (250g)") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ไอศกรีมมินิ ควอท (250g)</Link>
          {menu === "ไอศกรีมมินิ ควอท (250g)" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ซันเด เซต", "ซันเด เซต") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ซันเด เซต</Link>
          {menu === "ซันเด เซต" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ไอศกรีมสกู๊ป", "ไอศกรีมสกู๊ป") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ไอศกรีมสกู๊ป</Link>
          {menu === "ไอศกรีมสกู๊ป" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ไอศกรีมสมอลไบทส์", "ไอศกรีมสมอลไบทส์") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ไอศกรีมสมอลไบทส์</Link>
          {menu === "ไอศกรีมสมอลไบทส์" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ท็อปปิ้ง", "ท็อปปิ้ง") }} className="menu-item">
          <Link style={{ textDecoration: "none" }}>ท็อปปิ้ง</Link>
          {menu === "ท็อปปิ้ง" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  )
}

export default Navigation