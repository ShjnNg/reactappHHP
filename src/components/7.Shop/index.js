import React from 'react';
import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Container} from "@material-ui/core";
import Product from './Post/product';
import { Spinner } from 'react-awesome-spinners';
//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

export default function PostList() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error,products } = getProducts;


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" className = {{}}>
    <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Lọc theo giá</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                  <label className="custom-control-label" htmlFor="price-all">Tất cả</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-1" />
                  <label className="custom-control-label" htmlFor="price-1">0 - 1.000.000 VNĐ</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-2" />
                  <label className="custom-control-label" htmlFor="price-2">1.000.000 - 3.000.000 VNĐ</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-3" />
                  <label className="custom-control-label" htmlFor="price-3">3.000.000 - 5.000.000</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-4" />
                  <label className="custom-control-label" htmlFor="price-4">5tr VNĐ - 10tr VNĐ</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="price-5" />
                  <label className="custom-control-label" htmlFor="price-5">10tr VNĐ - 20tr VNĐ</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="price-5" />
                  <label className="custom-control-label" htmlFor="price-5">20tr - ~ </label>
                  <span className="badge border font-weight-normal">17</span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Lọc theo màu sắc</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                  <label className="custom-control-label" htmlFor="price-all">Tất cả</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-1" />
                  <label className="custom-control-label" htmlFor="color-1">Black</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-2" />
                  <label className="custom-control-label" htmlFor="color-2">White</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-3" />
                  <label className="custom-control-label" htmlFor="color-3">Red</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-4" />
                  <label className="custom-control-label" htmlFor="color-4">Blue</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="color-5" />
                  <label className="custom-control-label" htmlFor="color-5">Green</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div> */}
            {/* Color End */}
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                    <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Latest</a>
                        <a className="dropdown-item" href="#">Popularity</a>
                        <a className="dropdown-item" href="#">Best Rating</a>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">10</a>
                        <a className="dropdown-item" href="#">20</a>
                        <a className="dropdown-item" href="#">30</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
              <h2>Đang tải    <Spinner /></h2>
                  ) : error ? (
                    <h2>{error}</h2>
                  ) : (
                    <>
                      {products.map((product) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 pb-1">
                              <div  key={product._id}>
                                <Product product={product} />
                              </div>
                              </div>
                            ))}   
                      </>
                    )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
