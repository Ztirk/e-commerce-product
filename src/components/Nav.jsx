import React from 'react'
import './Nav.css'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import Product, { CartContext } from './Product'

function Nav() {
  const [toggleCartPop, setToggleCartPop] = React.useState(false)

  const amount = React.useContext(CartContext)

  const handleCartPop = () => {
    setToggleCartPop(!toggleCartPop)
  }

  return (
    <div className='nav-container'>
        <img className='logo' src={logo}></img>
        <div className='toggle-container'>
            <ul className='left-container dark-grayish-blue'>
                <li>Collections<div className='underline'></div></li>
                <li>Men<div className='underline'></div></li>
                <li>Women<div className='underline'></div></li>
                <li>About<div className='underline'></div></li>
                <li>Contact<div className='underline'></div></li>
            </ul>
            <ul className='right-container'>
                <li className='cart-container'>
                  <img className='cart' src={cart} onClick={handleCartPop}></img>
                  <div className={toggleCartPop ? 'cart-pop cart-popped' : 'cart-pop'}>
                    <div className='cart-title'>Cart</div>
                    <div className='line'></div>
                    <div>{amount}</div>
                    <div className='btn btn-checkout'>Checkout</div>
                  </div>
                </li>
                <li><img className='avatar' src={avatar}></img></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav