import React from 'react'
import './Product.css'
import product1 from '../assets/images/image-product-1.jpg'
import product1t from '../assets/images/image-product-1-thumbnail.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product2t from '../assets/images/image-product-2-thumbnail.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product3t from '../assets/images/image-product-3-thumbnail.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import product4t from '../assets/images/image-product-4-thumbnail.jpg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'
import cart from '../assets/images/icon-cart.svg'
import xmark from '../assets/images/icon-close.svg'

export const CartContext = React.createContext()

function Product() {
    const dictPic = {
        t_p1: product1,
        t_p2: product2,
        t_p3: product3,
        t_p4: product4,
    }

    const [togglePic, setTogglePic] = React.useState({
        picture: dictPic.t_p1,
        active1: false,
        active2: false,
        active3: false,
        active4: false
    })

    const [togglePop, setTogglePop] = React.useState(false)

    const [amount, setAmount] = React.useState(0)

    const handlePic = (e) => {
        switch (e) {
            case dictPic.t_p1:
                setTogglePic({
                    picture: e,
                    active1: true,
                    active2: false,
                    active3: false,
                    active4: false
                })
                break;
            case dictPic.t_p2:
                setTogglePic({
                    picture: e,
                    active1: false,
                    active2: true,
                    active3: false,
                    active4: false
                  })
                  break;
            case dictPic.t_p3:
                setTogglePic({
                    picture: e,
                    active1: false,
                    active2: false,
                    active3: true,
                    active4: false
                })
                break;
            case dictPic.t_p4:
                setTogglePic({
                    picture: e,
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: true
                })
                break;
            default:
        }
    }

    const handlePop = () => {
        setTogglePop(!togglePop)
    }

    const handleSlide = (e) => {
        if (e == 'previous') {
            switch (togglePic.picture) {
                case dictPic.t_p1:
                    setTogglePic({
                        picture: dictPic.t_p2,
                        active1: false,
                        active2: true,
                        active3: false,
                        active4: false
                    })
                    break;
                case dictPic.t_p2:
                    setTogglePic({
                        picture: dictPic.t_p3,
                        active1: false,
                        active2: false,
                        active3: true,
                        active4: false
                      })
                      break;
                case dictPic.t_p3:
                    setTogglePic({
                        picture: dictPic.t_p4,
                        active1: false,
                        active2: false,
                        active3: false,
                        active4: true
                    })
                    break;
                case dictPic.t_p4:
                    setTogglePic({
                        picture: dictPic.t_p1,
                        active1: true,
                        active2: false,
                        active3: false,
                        active4: false
                    })
                    break;
                default:
            }
        } else {
            switch (togglePic.picture) {
                case dictPic.t_p1:
                    setTogglePic({
                        picture: dictPic.t_p4,
                        active1: false,
                        active2: false,
                        active3: false,
                        active4: true
                    })
                    break;
                case dictPic.t_p2:
                    setTogglePic({
                        picture: dictPic.t_p1,
                        active1: true,
                        active2: false,
                        active3: false,
                        active4: false
                      })
                      break;
                case dictPic.t_p3:
                    setTogglePic({
                        picture: dictPic.t_p2,
                        active1: false,
                        active2: true,
                        active3: false,
                        active4: false
                    })
                    break;
                case dictPic.t_p4:
                    setTogglePic({
                        picture: dictPic.t_p3,
                        active1: false,
                        active2: false,
                        active3: true,
                        active4: false
                    })
                    break;
                default:
            }
        }
    }

    const handleAmount = (e) => {
        if (e == 'plus' && amount >= 0)  {
            setAmount(amount + 1)
        } else if (e == 'minus' && amount > 0) {
            setAmount(amount - 1)
        }
    }

    const handleAdd = () => {
        setCart(amount)
    }

  return (
    <div className='product-container'>
        <div className={togglePop ? 'bg-pop bg-popped' : 'bg-pop'}></div>
        <div className={togglePop ? 'pop popped' : 'pop'}>
            <div className={togglePop ? 'left-product-container left-product-containered' : 'left-product-container'}>
                <img className='xmark' src={xmark} onClick={handlePop}></img>
                <div className='slide'>
                    <img className='left' src={next} onClick={() => handleSlide('previous')}></img>
                    <img className={togglePop ? 'p ped' : 'p'} src={togglePic.picture}></img>
                    <img className='right' src={previous} onClick={() => handleSlide('next')}></img>
                </div>
                <img className={togglePic.active1 ? 'p1-t p1-ted pp' : 'p1-t pp'} onClick={() => handlePic(dictPic.t_p1)} src={product1t}></img>
                <img className={togglePic.active2 ? 'p2-t p2-ted pp' : 'p2-t pp'} onClick={() => handlePic(dictPic.t_p2)} src={product2t}></img>
                <img className={togglePic.active3 ? 'p3-t p3-ted pp' : 'p3-t pp'} onClick={() => handlePic(dictPic.t_p3)} src={product3t}></img>
                <img className={togglePic.active4 ? 'p4-t p4-ted pp' : 'p4-t pp'} onClick={() => handlePic(dictPic.t_p4)} src={product4t}></img>
            </div>
        </div>
        <div className='left-product-container'>
            <img className='p' src={togglePic.picture} onClick={handlePop}></img>
            <img className={togglePic.active1 ? 'p1-t p1-ted' : 'p1-t'} onClick={() => handlePic(dictPic.t_p1)} src={product1t}></img>
            <img className={togglePic.active2 ? 'p2-t p2-ted' : 'p2-t'} onClick={() => handlePic(dictPic.t_p2)} src={product2t}></img>
            <img className={togglePic.active3 ? 'p3-t p3-ted' : 'p3-t'} onClick={() => handlePic(dictPic.t_p3)} src={product3t}></img>
            <img className={togglePic.active4 ? 'p4-t p4-ted' : 'p4-t'} onClick={() => handlePic(dictPic.t_p4)} src={product4t}></img>
        </div>
        <div className='right-product-container'>
            <div className='head'>Sneaker Company</div>
            <div className='name'>Fall Limited Edition Sneakers</div>
            <div className='detail'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
            <div className='price-discounted'>$125.00</div>
            <div className='discount'><span>50%</span></div>
            <div className='price'>$250.00</div>
            <div className='amount-container'>
                <img className='minus' src={minus} onClick={() => handleAmount('minus')}></img>
                <div className='amount'>{amount}</div>
                <img className='plus' src={plus} onClick={() => handleAmount('plus')}></img></div>
            <div className='btn' onClick={handleAdd}><img src={cart}></img>Add to cart</div>
        </div>
    </div>
  )
}

export default Product