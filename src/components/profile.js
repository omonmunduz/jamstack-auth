import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const Profile = () => {
const identity = useIdentityContext();
console.log(identity)
    return(
        <div className = "dashboard-header">
            <nav>
                <Link to ="/dashboard/secret" activeClassName = "active">Secrets</Link>
                <Link to = "/dashboard/base" activeClassName = "active">Base</Link>
            </nav>
            <span>Show login status</span>
        </div>
    )
};
export default Profile;