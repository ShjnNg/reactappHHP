import React, {useState} from 'react';
/* import useStyles from '../style'; */
import { useDispatch } from 'react-redux';
// import { updatePost } from '../../../redux/actions';
/* import { Link } from "react-router-dom"; */
/* import {  delProduct } from '../../../redux/actions/productActions'; */
import { addToCart } from "../../../redux/actions/cartActions";
import toast, { Toaster } from 'react-hot-toast';

export default function Product({ product }) {
  const [qty /* setQty */] = useState(1);
/*   const classes = useStyles(); */
  const dispatch = useDispatch();
  const notify = () => toast.success('Đã thêm mặt hàng ' + product.title + ' vào giỏ hàng', 
    {style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      },
    }
  );

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    
    /* history.push(`http://localhost:3000/cart`); */
  };

  return (
              
                <div className="product-item bg-light mb-4" >
                  <div className="product-img position-relative overflow-hidden">
                  <div className="product-img">
                    <img className="w-100 h-100" src={product.attachment} alt={product.name} />
                  </div>
                  
                    <div className="product-action" href={`/product/${product._id}`}>
                      <a className="btn btn-outline-dark btn-square" onClick={function(event){notify(); addToCartHandler();}}>
                      
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" ><i className="far fa-heart" /* onClick={onLikeBtnClick} *//></a>
                      {/* <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a> */}
                      <a className="btn btn-outline-dark btn-square" href={`/product/${product._id}`}><i className="fa fa-search" /></a>
                    </div>
                    
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href={`/product/${product._id}`}>{product.title}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                      <h5>{product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                      <h6 className="text-muted ml-2"><del>{(product.cost*1.2).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</del></h6>
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
                  <Toaster />
                </div>
                
          
  );
}
