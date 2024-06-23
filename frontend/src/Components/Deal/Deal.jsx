import React from 'react'
import "./Deal.css"
import all_deal from '../Assets/all_deal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deal = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="page-body">
      <div className="section-deal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading has-action">
              ดีลสุดคุ้ม
            </h2>
          </div>
          <div className="deal-carousel">
            <div className="slick-slider slick-initialized">
              <div className="slick-item">
                <div className="slick-track">
                  <Slider {...settings}>
                    {all_deal.map((item, index) => (
                      <div className="deal-item" key={index}>
                        <div className="slick-slide">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-reward">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading has-action">ข่าว</h2>
          </div>
        </div>
        <div className="reward-carousel">
          <div className="contaiber">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deal