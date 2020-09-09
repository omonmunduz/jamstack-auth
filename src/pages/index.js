import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import './index.css';

export default () => (
    <Layout>
        <div className = "main-text-wrapper">
            <h1> This app is awesome</h1>
            <p>Log in to find out why</p>
            <Link to = "/dashboard" className = "dashboard-link">Go to the dashboard</Link>
        </div>
    </Layout>
)