import React, {useState} from 'react';
import {goods} from "./static/goodlist/goods";
import classNames from 'classnames';
import { Link } from "react-router-dom";

const Products = () => {

   const [filter, setFilter] = useState(0)

    return (
        <div className="container text-center">
            <div className="row">
                <div className="d-none d-md-flex col-md-2 shop-filter-text flex-column">
                    <button className='filter-button' onClick={() => setFilter(0)}>Все товары</button>
                    <button className='filter-button' onClick={() => setFilter(1)}>Свечи в стекле</button>
                    <button className='filter-button' onClick={() => setFilter(2)}>Диффузорры</button>
                    <button className='filter-button' onClick={() => setFilter(3)}>Свечи в бетоне</button>
                </div>
                <div className="col-12 flex-wrap d-flex justify-content-between flex-md-row flex-column col-md-10">
                    {goods.map(e =>
                         <div className= {classNames("card shop-card mb-4", {"d-none" : filter != e.filter && filter != 0} , {"d-block" : filter == e.filter || filter == 0})} >
                        <Link to={`product/${e.id}`}><img src={e.image} className="card-img-top img-shop" alt="..."/></Link>
                            <div className="card-body">
                                <p className="card-text ">{e.title}</p>
                                <p className="card-text ">{e.price}</p>
                            </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Products;