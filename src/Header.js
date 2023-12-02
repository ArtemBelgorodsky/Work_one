import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {menu} from "./static/menucontent/menu";
import Icon from "./static/icons/shopping-cart.png"

const Header = () => {
    
    const cart = useSelector((state) => state.cart)

    return (
        <div className='sticky-top background-white header-top'>
            <div className="row text-center align-items-center flex-column mb-5">
                <div className="col-12 header-image-col p-2">
                    <div className='row align-items-center flex-nowrap'>
                    <div className='col-3 col-md-1'>

                         </div>
                        <div className='col-6 col-md-10'>
                            <Link to={'/'}><img src="https://i.pinimg.com/736x/fa/30/b6/fa30b6460239d2d3eada8e80e89c793b--desain-logo-logo-google.jpg" className="img-fluid header-img" alt="..." id='header-img'/></Link>
                        </div>
                         <div className='col-3 col-md-1 d-flex flex-row'>
                           <Link to={'/cart'}><img src={Icon} className='icon align-self-baseline p-1 '></img></Link>
                           <div>{cart.length}</div>
                         </div>
                        
                    </div>
                       
                </div>
                <div className="col-12 p-2 col-md-4">
                    <div className="d-flex flex-column justify-content-between link-ease-in-out flex-md-row" id="parent-font-menu-header">
                        {menu.map(e => <Link className="font-menu-header p-2" id="font-menu-header" to={e.link} key={e.key}>{e.title}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;