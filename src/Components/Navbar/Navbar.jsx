import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png'; 

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  
  const userRole = 'supplier'; 

  return (
    <div className="navbar">
      <div className="Nav-logo">
        <img src={logo} alt="" />
        <p>AUREUM</p>
      </div>
      <ul className="Nav-menu">
        <li onClick={() => setMenu('Shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>
            Men
          </Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>
            Women
          </Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        {userRole === 'supplier' && (
          <div className="supplier-dropdown">
            <Link to='/supplier'>SELLER PANEL</Link>
            
           
          </div>
        )}
        <Link to='/cart'>
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
