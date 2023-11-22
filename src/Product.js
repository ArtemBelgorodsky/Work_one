import React from 'react';
import {goods} from "./static/goodlist/goods";

const Product = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-2">
                    Column
                </div>
                <div className="col-10 flex-wrap d-flex justify-content-between flex-md-row flex-column">
                    {goods.map(e => <div className="card shop-card" >
                        <img src={e.image} className="card-img-top img-shop" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">{e.title}</p>
                            </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Product;