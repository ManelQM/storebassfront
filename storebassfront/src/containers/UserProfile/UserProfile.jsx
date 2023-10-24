import React from "react";
import "./UserProfile.css"

const UserProfile = () => {
    return(
        <div className="profileAesthetics">  
        <div className="containerProfile container  container-fluid">
           
        <h2 className="mt-5 ml-5">My Profile</h2>
  
        <div className=" justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" src='' alt='' />
                </figure>
                <a href="#" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div className="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>Ghulam Abbas</p>
     
                 <h4>Email Address</h4>
                 <p>ghulamabbas258@gmail.com</p>

                 <a href="#" className="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" className="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>
    </div>
    <div class="container  container-fluid" className="containerProfile">
           
        <h2 class="mt-5 ml-5">My Profile</h2>
  
        <div class=" justify-content-around mt-5 user-info">
            <div class="col-12 col-md-3">
                <figure class='avatar avatar-profile'>
                    <img class="rounded-circle img-fluid" src='' alt='' />
                </figure>
                <a href="#" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div class="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>Ghulam Abbas</p>
     
                 <h4>Email Address</h4>
                 <p>ghulamabbas258@gmail.com</p>

                 <a href="#" class="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" class="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>
    </div>
        </div>
        
    )
}

export default UserProfile;