import React, {useState} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {menu} from "./static/menucontent/menu";

const Header = () => {

    const [scrollTop, setScrollTop] = useState(0);

    window.addEventListener('scroll', function() {
        setScrollTop(this.window.scrollY)
        if (scrollTop > 120) {
            document.getElementById("header-img").style.height= "100px";
        }
        else {
            document.getElementById("header-img").style.height= "200px";
        }
      });
    
    return (
        <div className='sticky-top background-white'>
            <div className="row text-center align-items-center flex-column mb-5">
                <div className="col-4 header-image-col p-2">
                        <Link to={'/'}><img src="https://i.pinimg.com/736x/fa/30/b6/fa30b6460239d2d3eada8e80e89c793b--desain-logo-logo-google.jpg" className="img-fluid header-img" alt="..." id='header-img'/></Link>
                </div>
                <div className="col-3 p-2 col-md-4">
                    <div className="d-flex flex-column justify-content-between link-ease-in-out flex-md-row" id="parent-font-menu-header">
                        {menu.map(e => <Link className="font-menu-header p-2" id="font-menu-header" to={e.link} key={e.key}>{e.title}</Link>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;