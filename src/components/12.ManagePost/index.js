import React from 'react';
/* import {CardMedia} from '@material-ui/core'; */
/* import useStyles from '../12.ManagePost/style'; */
import { useDispatch } from 'react-redux';
/* import { Link } from "react-router-dom"; */
import {  delProduct } from '../../redux/actions/productActions';


export default function ManagerProduct({ product }) {
/*   const classes = useStyles(); */
  const dispatch = useDispatch();
  const deleteproduct = (id) => {
    dispatch(delProduct(id));
    window.location.reload();
  };
  return (
                <div className="product-item bg-light mb-4" >
                  <div className="product-img position-relative overflow-hidden">
                  <div className="product-img">
                    <img className="w-100 h-100" src={product.attachment} alt={product.name} />
                  </div>
                    <div className="product-action" href={`/product/${product._id}`}>
                      <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                      <a className="btn btn-outline-dark btn-square" ><i className="far fa-heart" /* onClick={onLikeBtnClick} *//></a>
                      {/* <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a> */}
                      <a className="btn btn-outline-dark btn-square" href={`/product/${product._id}`}><i className="fa fa-search" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href = {`/product/${product._id}`}>{product.title}</a>
                    {/* <Link to={`/product/${product._id}`} className="info__button">
                      Xem chi tiết
                    </Link> */}
                    <button
                      className="cartItem__deleteBtn"
                      onClick={() => deleteproduct(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </h5>
                        
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>{product.likeCount}</small>
                    </div>
                  </div>
                </div>
          
  );
}
