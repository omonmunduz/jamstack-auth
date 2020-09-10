import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';
import './profile.css';



const Profile = ({showModal}) => {

const identity = useIdentityContext();
const isLoggedIn = identity && identity.isLoggedIn;
console.log(identity)

const name = 
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name
    return(
        isLoggedIn &&(
            <div className = "dashboard-header">
                <nav className = "profile-nav">
                    <Link to ="/dashboard/secret" activeClassName = "active" >Secrets</Link>
                    <Link to = "/dashboard/base" activeClassName = "active">Base</Link>
                    <span className = "user-name">Logged in as {name}<button onClick = {showModal} className = "logoutBtn">Logout</button></span>
                </nav>
            </div>
        )
    )
};
export default Profile;