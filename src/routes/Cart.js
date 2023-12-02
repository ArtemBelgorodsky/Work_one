import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector} from 'react-redux'
import DeleteIcon from "../static/icons/delete.png"
import { del } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

export default function Cart() {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    console.log(cart)

    const delProduct = (position) => {
        dispatch(del({
            position: position
        }
        ))
    }

  return (
    <div className='container'>
        <Header/>
        <div className='row'>
            <div className='col-12 cart-text'>
                <h4>Оформление товара</h4>
            </div>
        </div>
        <div className='row'>
            <div className='col-6 cart-text'>
                <p>Продукт</p>
            </div>
            <div className='col-1 cart-text text-center'>
                <p>Цена</p>
            </div>
            <div className='col-2 cart-text text-center'>
                <p>Количество</p>
            </div>
            <div className='col-2 cart-text text-center'>
                <p>Сумма</p>
            </div>
            <div className='col-1 cart-text text-center'>

            </div>
        </div>
        {cart.map((e) => <div className='row mb-2'>
            <div className='col-6 cart-text'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={e.image} className="img-fluid"></img>
                    </div>
                    <div className='col-8'>
                        <p>{e.title}</p>
                        <p>Аромат: {e.aroma}</p>
                        <p>Фитиль: {e.fitil}</p>
                        <p>Объем: {e.volume}</p>
                    </div>
                </div>
            </div>
            <div className='col-2 cart-text text-center'>
                <p>{e.price}</p>
            </div>
            <div className='col-1 cart-text text-center'>
                <p>{e.quantity}</p>
            </div>
            <div className='col-2 cart-text text-center'>
                <p>{e.price * e.quantity}</p>
            </div>
            <div className='col-1 cart-text text-center'>
                <button className='btn-cart'><img src={DeleteIcon} className='btn-cart-img' onClick={() => delProduct(e.position)}/></button>
            </div>
        </div>)}
        
        <Footer/>
    </div>
  )
}
