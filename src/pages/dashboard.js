import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';

import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({location}) => {
    const [isVivisble, setIsVisible] = useState(false);
    useEffect(() => {
        if(location.pathname.match(/^\/dashboard\/?$/)) { 
            navigate('/dashboard/login', { replace: true })
        }
    }, [location.pathname])

    const showModal = () => setIsVisible(true);
    return(
        <Layout>
            <Profile />
            <Router>
                <RouteSecret path = "/dashboard/secret"/>
                <RouteBase path = "/dashboard/base"/>
                <RouteLogin path = "/dashboard/login"  showModal = {showModal}/>
            </Router>
            <IdentityModal
                showDialog = {isVivisble}
                 onCloseDialog = {() => setIsVisible(false)}
            />
        </Layout>
    )
}
export default Dashboard;