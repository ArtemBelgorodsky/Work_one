import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Header";
import Footer from "../Footer";
import Product from "../Product";


const Shop = () => (
    <div className="container">
        <Header/>
        <Product/>
        <Footer/>

    </div>
);
export default Shop;