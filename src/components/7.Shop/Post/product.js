import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../redux/actions/cartActions";
import toast, { Toaster } from 'react-hot-toast';
import { updateProduct } from '../../../redux/actions/productActions';

export default function Product({ product }) {
  const [qty] = useState(1);
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

  const onLikeBtnClick = React.useCallback(() => {
    dispatch(
      /* console.log(product.likeCount), */
      updateProduct({ ...product, likeCount: product.likeCount + 1 })
    );
  }, [dispatch, updateProduct]);

  return (
              
                <div className="product-item bg-light mb-4" >
                  <div className="product-img position-relative overflow-hidden">
                  <div className="product-img">
                    <img className="w-100 h-auto center" src={product.attachment} alt={product.name} />
                  </div>
                  
                    <div className="product-action" href={`/product/${product._id}`}>
                      <a className="btn btn-outline-dark btn-square" onClick={function(event){notify(); addToCartHandler();}}>
                      
                        <i className="fa fa-shopping-cart" title="Thêm vào giỏ hàng" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" onClick={onLikeBtnClick}><i title="Yêu thích sản phẩm" className="far fa-heart"/></a>
                      {/* <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a> */}
                      <a className="btn btn-outline-dark btn-square" href={`/product/${product._id}`}><i className="fa fa-search" title="Xem thông tin chi tiết"/></a>
                    </div>
                    
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href={`/product/${product._id}`}>{product.title}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                      <h5 className = "cost">{product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </h5>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                      <h6 className="text-muted ml-2"><del>{(product.cost*1.2).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</del></h6>
                    </div> */}
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
