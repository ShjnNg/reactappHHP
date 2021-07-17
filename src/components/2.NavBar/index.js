import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
/* import NavDropdown from 'react-bootstrap/NavDropdown' */
import { Collapse, Navbar, NavbarToggler, /* NavbarBrand, */ Nav, NavItem, NavLink } from 'reactstrap';

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
        <div className="container-fluid bg-dark mb-30">{/* thanh navbar */}
        <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block"> {/* danh mục */}
        
        <a className="btn d-flex align-items-center justify-content-between bg-primary w-100 h-100" data-toggle="collapse" style={{height: '65px', padding: '0 30px'}}>
        
          <DropdownButton  
            title="Danh mục" 
            size = "lg"  
            width = "100%"
            height = "100%"
          >
        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Piano `}
              >
                    <a href={`/search/${'PianoYamaha'}`} className="dropdown-item">Piano Yamaha</a>
                    <a href={`/search/${'Pianonobel'}`} className="dropdown-item">Piano Nobel</a>
                    <a href={`/search/${'PianoCasio'}`} className="dropdown-item">Piano Casio</a>
                    <a href={`/search/${'PianoAstorHorwood'}`} className="dropdown-item">Piano Astor &amp; Horwood</a>
                    <a href={`/search/${'PianoColumbia'}`} className="dropdown-item">Piano Columbia</a>
                    <a href={`/search/${'PianoDynatone'}`} className="dropdown-item">Piano Dynatone</a>
                    <a href={`/search/${'PianoKawai'}`} className="dropdown-item">Piano Kawai</a>
                    <a href={`/search/${'PianoKorg'}`} className="dropdown-item">Piano Korg</a>
                    <a href={`/search/${'PianoCo'}`} className="dropdown-item">Piano cơ</a>
                    <a href={`/search/${'PianoGiaCo'}`} className="dropdown-item">Piano giả cơ</a>
                    <a href={`/search/${'Pianokhac'}`} className="dropdown-item">Khác</a>
            </DropdownButton>
            ))}
        </div>
        
        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Organ `}
              >
                  <a href={`/search/${'OrganYamaha'}`} class="dropdown-item">Organ Yamaha</a>
                  <a href={`/search/${'OrganKurztman'}`} class="dropdown-item">Organ Kurztman</a>
                  <a href={`/search/${'OrganCasio'}`} class="dropdown-item">Organ Casio</a>
                  <a href={`/search/${'Organkhac'}`} class="dropdown-item">Khác</a>
            </DropdownButton>
            ))}
        </div>

        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Guitar `}
              >
                <a href={`/search/${'GuitarYamaha'}`} class="dropdown-item">Guitar Yamaha</a>
                <a href={`/search/${'GuitarTaylor'}`} class="dropdown-item">Guitar Taylor</a>
                <a href={`/search/${'GuitarFENDER'}`} class="dropdown-item">FENDER</a>
                <a href={`/search/${'GuitarROSEN'}`} class="dropdown-item">ROSEN</a>
                <a href={`/search/${'GuitarEko'}`} class="dropdown-item">Eko</a>
                <a href={`/search/${'GuitarMelodica'}`} class="dropdown-item">Kèn Melodica</a>
                <a href={`/search/${'GuitarMC'}`} class="dropdown-item">Guitar M-C</a>
                <a href={`/search/${'GuitarKhac'}`} class="dropdown-item">Khác</a>
            </DropdownButton>
            ))}
        </div>


        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Đàn Ukulele `}
              >
                <a href={`/search/${'Mahalo'}`} class="dropdown-item">Mahalo</a>
                <a href={`/search/${'Ukulelekhac'}`} class="dropdown-item">Khác</a>
            </DropdownButton>
            ))}
        </div>

        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Đàn Violin `}
              >
                    <a href={`/search/${'ViolinYamaha'}`} class="dropdown-item">Yamaha</a>
                    <a href={`/search/${'ViolinValencia'}`} class="dropdown-item">Valencia</a>
                    <a href={`/search/${'Violinkhac'}`} class="dropdown-item">Khác</a>
            </DropdownButton>
            ))}
        </div>

        <div className="dropdown-item2">
          {['right'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Trống-bộ gõ `}
              >
                  <a href={`/search/${'trongdienYamaha'}`} class="dropdown-item">Trống điện Yamaha</a>
                  <a href={`/search/${'PianoYamaha'}`} class="dropdown-item">Trống điện HITMAN</a>
                  <a href={`/search/${'PianoYamaha'}`} class="dropdown-item">Trống Acoutis Yamaha</a>
            </DropdownButton>
            ))}
        </div>

        {/* <Dropdown.Item as="button">Đàn Violin</Dropdown.Item>
        <Dropdown.Item as="button">Trống-bộ gõ</Dropdown.Item> */}
        <Dropdown.Item  as="button">
          <a href={`/search/${'ken'}`} class="dropdown-item">Kèn-Sáo</a>
        </Dropdown.Item>
        <Dropdown.Item  as="button">
          <a href={`/search/${'phukien'}`} class="dropdown-item">Phụ kiện</a>
        </Dropdown.Item>
        <Dropdown.Item  as="button">
          <a href={`/search/${'suachua'}`} class="dropdown-item">Sữa chữa</a>
        </Dropdown.Item>
        <Dropdown.Item  as="button">
          <a href={`/search/${'dayhoc'}`} class="dropdown-item">Dạy học</a>
        </Dropdown.Item>
        </DropdownButton>
        {/* <i className="fa fa-angle-down text-dark" /> */}
        </a>
        </div>

          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">Huy Hoàng</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Piano</span>
              </a>
              <Navbar color="faded" light>
                {/* <NavbarBrand href="/" className="mr-auto">
                  <span className="h1 text-uppercase text-dark bg-light px-2">Huy Hoàng</span>
                  <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Piano</span> 
                </NavbarBrand> */}
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/">Trang chủ</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/shop">Mua hàng</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cart">Giỏ hàng</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/checkout">Thanh toán</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/contact">Liên hệ</NavLink>
                    </NavItem>
                  </Nav>
                  <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>253</span>
                  </a>
                  <a href className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>6899</span>
                  </a>
                </div>
                </Collapse>
              </Navbar>
              {/* <NavDropdown className="navbar-toggler-icon" id="collasible-nav-dropdown" >
              <div className="navbar-collapse justify-content-between collapse show">
              <NavDropdown.Item href="/" className="nav-item nav-link active" >Trang chủ</NavDropdown.Item>
              <NavDropdown.Item href="shop" className="nav-item nav-link active">Mua hàng</NavDropdown.Item>
              <NavDropdown.Item href="cart" className="nav-item nav-link active">Giỏ hàng</NavDropdown.Item>
              <NavDropdown.Item href="checkout" className="nav-item nav-link active">Thanh toán</NavDropdown.Item>
              <NavDropdown.Item href="contact" className="nav-item nav-link active">Liên hệ</NavDropdown.Item>
              </div>
            </NavDropdown> */}
              


              {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" onClick={() => onclickbutton()} aria-expanded= {show}>
                <span className="navbar-toggler-icon" />
              </button>
              <div className={classnamea} id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <a href="/" className="nav-item nav-link active">Trang chủ</a>
                  <a href="shop" className="nav-item nav-link">Mua hàng</a>
                  <a href="cart" className="nav-item nav-link">Giỏ hàng</a>
                  <a href="checkout" className="nav-item nav-link">Thanh toán</a>
                  <a href="contact" className="nav-item nav-link">Liên hệ</a>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>253</span>
                  </a>
                  <a href className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>6899</span>
                  </a>
                </div>
              </div> */}



            </nav>
          </div>
        </div>
      </div>
)
}