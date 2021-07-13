import React from 'react';
import {Animated} from "react-animated-css";
// import Slideshow from '../SlideShow/SlideShow';

/* const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}; */
export default function Carousel() {
        return  (

          


        <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
          <Animated animationIn="bounce" animationInDuration={2000}  isVisible={true}>
                <div className="position-relative active" style={{height: '430px'}}>
                  <img className="position-absolute w-100 h-100" src={process.env.PUBLIC_URL + "/assets/img/carousel-1.jpg"} style={{objectFit: 'cover'}} />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '700px'}}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Huy Hoàng</h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Mua bán Piano nhập khẩu trực tiếp, dạy đàn piano</p>
                      <a href="shop" className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">Mua ngay</a>
                    </div>
                  </div>
                </div>
          </Animated> 
          </div>

          

          <div className="col-lg-4">
          <Animated animationIn="bounceInRight" animationInDuration={1800}  isVisible={true}>
            <div className="product-offer mb-30" style={{height: '200px'}}>
              <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/offer-1.jpg"} alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Tiết kiệm 20%</h6>
                <h3 className="text-white mb-3">Khuyến mãi</h3>
                <a href="shop" className="btn btn-primary">Mua ngay</a>
              </div>
            </div>
          </Animated>  
          <Animated animationIn="bounceInRight" animationInDuration={1800}  isVisible={true}>
            <div className="product-offer mb-30" style={{height: '200px'}}>
              <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/offer-2.jpg"} alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Tiết kiệm 20%</h6>
                <h3 className="text-white mb-3">Khuyến mãi</h3>
                <a href="shop" className="btn btn-primary">Mua ngay</a>
              </div>
            </div>
          </Animated>  
          </div> 
        </div>
        
      </div>
        
        
        )}