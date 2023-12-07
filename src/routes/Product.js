import React, {useState} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { useLoaderData } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch} from 'react-redux'
import { add } from '../features/cart/cartSlice'


function Product() {
  const product = useLoaderData()
  const dispatch = useDispatch()


  const [count, setCount] = useState(1)
  const [aroma, setAroma] = useState('')
  const [fitil, setFitil] = useState('')
  const [volume, setVolume] = useState('')

  
  const addProduct = () => {
      dispatch(add({
        id: product.id,
        quantity: count,
        aroma: aroma,
        fitil: fitil,
        volume: volume,
        image: product.image,
        title: product.title,
        price: product.price,
      }))
  }

  return (
    <div className='container'>
    <Header/>
    <div class="row text-center flex-column flex-md-row">
    <div class="col-12 col-md-6">
      <img src={product.image} className='img-fluid img-product'/>
    </div>
    <div class="col-12 col-md-6">
      <div className='product-title-text'><h2>{product.title}</h2></div>
      <div className='product-title-text mb-2'><h2>{product.price} руб.</h2></div>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example" onChange={(e) => setAroma(e.target.value)}>
        <option selected value='Аромат не выбран'>Выберете аромат</option>
        {product.aroma.map(e => <option value={e}>{e}</option>)}
      </select>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example" onChange={(e) => setFitil(e.target.value)}>
        <option selected value='Фитиль не выбран'>Выберете фитиль</option>
        {product.fitil.map(e => <option value={e}>{e}</option>)}
      </select>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example" onChange={(e) => setVolume(e.target.value)}>
        <option selected value='Объем не выбран'>Выберете объем</option>
        {product.volume.map(e => <option value={e} onClick={() => setVolume(e)}>{e}</option>)}
      </select>
      <div class="row text-center justify-content-between m-0 mb-2">
      <div class="btn-group  d-flex btn-group-product p-0" role="group" aria-label="Basic example">
  <button type="button " className={classNames("btn btn-light btn-product", {"disabled": count == 1})} onClick={() => setCount(count - 1)}> - </button>
  <div className='text-center d-flex align-items-center p-2'>{count}</div>
  <button type="button" class="btn btn-light btn-product " onClick={() => setCount(count + 1)}> + </button>
  </div>
  <button type="button" className={classNames("btn btn-outline-secondary btn-submit", {"disabled" : aroma == '' || fitil == '' || volume == '' })} onClick={() => addProduct()}>Добавить в корзину</button>
      </div>
      <p className='text-start product-title-text'>
      <span>Срок изготовления свечей 4-5 рабочих дней.<br/>
Ознакомиться с описанием ароматов вы можете в разделе описание ароматов.</span><br/>
    <span>В создании свечи используются соевый воск и ароматические масла, имеющие сертификаты безопасности Международной парфюмерной организации (IFRA). </span>
    <span>Свеча идет в комплекте с крышкой, которая является как декоративным элементом, так и защитой поверхности от загрязнения. Также с помощью крышки вы можете гасить пламя, не допуская запаха гари, тем самым сохранив аромат пространства. </span>
    </p>
    </div>
    </div>
    <Footer/>
    </div>
    
  )
}

const loader = async ({req, params}) => {
    console.log(req, params)
const res = await fetch(`https://json-server-swart-rho.vercel.app/products/${params.productId}`)
return res.json()
}

export {Product, loader}
