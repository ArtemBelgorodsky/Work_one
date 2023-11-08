import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {menu} from "./static/menucontent/menu";

const Header = () => {
    return (
        <div className='sticky-top w-100 background-white'>
            <div className="row text-center align-items-center flex-column mb-5">
                <div className="col-4 header-image-col p-2">
                        <img src="https://i.pinimg.com/736x/fa/30/b6/fa30b6460239d2d3eada8e80e89c793b--desain-logo-logo-google.jpg" className="img-fluid" alt="..."/>
                </div>
                <div className="col-3 p-2 col-md-4">
                    <div className="d-flex flex-column justify-content-between link-ease-in-out flex-md-row">
                        {menu.map(e => <a className="font-menu-header p-2" key={e.key}>{e.title}</a>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;