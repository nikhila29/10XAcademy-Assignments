import React from 'react';
import "./Landing_page.css";
import { BrowserRouter as Link } from 'react-router-dom';
import landingImg from "../../assets/img/landing.png";



export default function Landing_page(){
return (
    
    <div className="container">
        <div className="row justify-content-md-center pt-5">

            <div className="col-md-4">

                <img src={landingImg} className='img' alt="Landing"/>
            </div>
            
            <div className="col-md-3 align-middle">
                <div className="text-center">
                    <h1 className="text"> 10X Team</h1>
                    {/* <Link to={'/postview'} ><button>Enter</button></Link> */}
                    <div className="button">
                   <a href="/postview"> Enter</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
    

    
)
}
