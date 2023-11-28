import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Header";
import Footer from "../Footer";
import Products from "../Products";


const Shop = () => (
    <div className="container">
        <Header/>
        <Products/>
        <Footer/>

    </div>
);
export default Shop;