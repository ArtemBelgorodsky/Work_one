import React, {useState} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { useLoaderData } from 'react-router-dom'
import classNames from 'classnames'

function Product() {
  const product = useLoaderData()
  console.log(product)

  const [count,setCount] = useState(1);
  console.log(count)

  return (
    <div className='container'>
    <Header/>
    <div class="row text-center flex-column flex-md-row">
    <div class="col-12 col-md-6">
      <img src={product[0].image} className='img-fluid img-product'/>
    </div>
    <div class="col-12 col-md-6">
      <div className='product-title-text'><h2>{product[0].title}</h2></div>
      <div className='product-title-text mb-2'><h2>от {product[0].price}</h2></div>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example">
        <option selected>Выберете аромат</option>
        {product[0].aroma.map(e => <option value="1">{e}</option>)}
      </select>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example">
        <option selected>Выберете фитиль</option>
        {product[0].fitil.map(e => <option value="1">{e}</option>)}
      </select>
      <select className="form-select select-product mb-2 p-3" aria-label="Default select example">
        <option selected>Выберете объем</option>
        {product[0].volume.map(e => <option value="1">{e}</option>)}
      </select>
      <div class="row text-center justify-content-between m-0 mb-2">
      <div class="btn-group  d-flex btn-group-product p-0" role="group" aria-label="Basic example">
  <button type="button " className={classNames("btn btn-light btn-product", {"disabled": count == 1})} onClick={() => setCount(count-1)}> - </button>
  <div className='text-center d-flex align-items-center p-2'>{count}</div>
  <button type="button" class="btn btn-light btn-product " onClick={() => setCount(count+1)}> + </button>
  </div>
  <button type="button" class="btn btn-outline-secondary btn-submit">Добавить в корзину</button>
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
const res = await fetch(`http://localhost:3001/${params.productId}`)
return res.json()
}

export {Product, loader}
