import React from 'react';
import {menu} from "./static/menucontent/menu";
import './index.css'; 
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
        <div className="row align-items-center text-center justify-content-center background-light-grey p-1 my-4 mx-0">
                <div className="col-12 ">
                    <span className="font-menu-header font-piazolla">Ваш бренд</span>
                </div>
            </div>
            <div className="row text-center align-items-center flex-column mb-5">
                <div className="col-2 p-1 col-md-4">
                    <div className="d-flex flex-column justify-content-between link-ease-in-out flex-md-row align-items-center">
                        {menu.map(e => <Link className="font-menu-header footer-menu p-1" to={e.link} key={e.key}>{e.title}</Link>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;