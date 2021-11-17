import React from 'react';
import './Post_view.css'
import PostImg from "../../assets/img/post.png"
	
export default function PostView(){
    return(
        <div>

          <nav className="navbar p-2 bg-green">
          <i className="fab fa-instagram-square"></i>
          <a className="navbar-brand">Instaclone</a>
              <i className="fas fa-camera"></i>
            </nav>

            <div className="row justify-content-md-center pt-5">
                <div className="card p-0 fixed-width">

                    <div className="card-header">
                        <h3 className="text-label">Siva</h3>
                        <small className="text-label1">Bengaluru</small>
                        <div className="ellipsis"> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                       
                    </div>

                    <img src={PostImg} className="card-img-too" alt="Card image cap"/>
                    <div className="card-body">
                        <div className="icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-share-square"></i>
                        <p className="date">10 Jan 2021</p>
                        </div>
                        <p className="card-text">64 likes</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <div className="footer"><p>Kick start your career with a bang</p></div>
                    </div>
                </div>
            </div>

             
      </div> 
    )
}
