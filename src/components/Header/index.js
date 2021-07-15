import React, { useState } from 'react';
/* import { Link } from "react-router-dom"; */
/* import { Typography } from '@material-ui/core'; */
/* import useStyles from './styles'; */

export default function Header() {
 /*  const classes = useStyles(); */
 const [input, setInput] = useState('');
/*  const handleKeyDown = (target) => {
  if(target.charCode==13) {
    console.log(input);
    <Link to={`/search/title/${input}`} activeClassName="current"></Link>
    
  }
} */
  return (
    
    <div className="container-fluid">
    <div className="row bg-secondary py-1 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center d-block d-lg-none">
          <a href className="btn px-0 ml-2">
            <i className="fas fa-heart text-dark" />
            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
          </a>
          <a href className="btn px-0 ml-2">
            <i className="fas fa-shopping-cart text-dark" />
            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
      <div className="col-lg-4">
        <a href="/" className="text-decoration-none">
          <span className="h1 text-uppercase text-dark bg-light px-2">Huy Hoàng</span>
          <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Piano</span>
        </a>
      </div>
      <div className="col-lg-4 col-6 text-left">
        <form action>
          <div className="input-group">
            <input 
            type="text"
            className="form-control" 
            placeholder="Tìm kiếm sản phẩm" 
            value={input} 
            onInput={e => setInput(e.target.value)}
            /* onKeyPress={handleKeyDown} */
            />
            
            <a className="input-group-append" href= {`/search/title/${input}`}>
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </a>
          </div>
        </form>
      </div>
      <div className="col-lg-2 col-6 text-right">
        <div className="d-flex">
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-twitter" /></a>
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-facebook-f" /></a>
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-linkedin-in" /></a>
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square"><i className="fab fa-instagram" /></a>
        </div> 
      </div>
      <div className="col-lg-2 col-6 text-right">
        <p className="m-0"> Huy Hoàng</p>
        <h5 className="m-0"> 0934 825 780</h5>
      </div>
    </div>
  </div>
  );
}
