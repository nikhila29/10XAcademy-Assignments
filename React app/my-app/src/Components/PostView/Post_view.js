import React from 'react';
import './Post_view.css'

	
export default function PostView(){
    const months=["jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const years=[1900,1901,1999,2000]
    let posts=[
        {name:"Vijayalakshmi",
        location:"Bengaluru",
        likes:64,
        description: "Kick start your career",
        PostImage: "/assets/img/post.png",
        date: new Date(),
        },
        {name:"Vaishnavi",
        location:"Chennai",
        likes:30,
        description: "Sample Description",
        PostImage: "/assets/img/post2.jpg",
        date: new Date(),
        },
        {name:"Vineela",
        location:"Hyderabad",
        likes:30,
        description: "Sample Description for Post",
        PostImage: "/assets/img/post3.jpg",
        date: new Date(),
        }
        ]

    return(
        <div className="body">
    
        <nav className="navbar p-2 bg-green">
        <i className="fab fa-instagram-square"></i>
        <a className="navbar-brand">Instaclone</a>
            <i className="fas fa-camera"></i>
          </nav>

          {posts.map((post,index)=>{
            return (


          <div className="row justify-content-md-center pt-5" key={index}>
              <div className="card p-0 fixed-width">

                  <div className="card-header">
                      <h3 className="text-label">{post.name}</h3>
                      <small className="text-label1">{post.location}</small>
                      <div className="ellipsis"> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                     
                  </div>

                  <img src={post.PostImage} className="card-img-too" alt="Card image cap"/>
                  <div className="card-body">
                      <div className="icons">
                      <i className="far fa-heart"></i>
                      <i className="far fa-share-square"></i>
                      <p className="date">{post.date.getDate()+"-"+months[post.date.getMonth()]}</p>
                      </div>
                      <p className="card-text">{post.likes}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      <div className="footer"><p>{post.description}</p></div>
                  </div>
              </div>
          </div>

            );
        })}

           
    </div> 
  )
           
    
        // {posts.map((post,index)=>{
        //     return (
        //         <div>
            
        //         <nav className="navbar p-2 bg-green">
        //         <i className="fab fa-instagram-square"></i>
        //         <a className="navbar-brand">Instaclone</a>
        //             <i className="fas fa-camera"></i>
        //           </nav>
        
        //           <div className="row justify-content-md-center pt-5">
        //               <div className="card p-0 fixed-width">
        
        //                   <div className="card-header">
        //                       <h3 className="text-label">{posts.name}</h3>
        //                       <small className="text-label1">{posts.location}</small>
        //                       <div className="ellipsis"> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                             
        //                   </div>
        
        //                   <img src={posts.PostImage} className="card-img-too" alt="Card image cap"/>
        //                   <div className="card-body">
        //                       <div className="icons">
        //                       <i className="far fa-heart"></i>
        //                       <i className="far fa-share-square"></i>
        //                       <p className="date">{posts.date}</p>
        //                       </div>
        //                       <p className="card-text">{posts.likes}</p>
        //                       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //                       <div className="footer"><p>{posts.description}</p></div>
        //                   </div>
        //               </div>
        //           </div>
        
                   
        //     </div> 
        //  );
        // })}
}