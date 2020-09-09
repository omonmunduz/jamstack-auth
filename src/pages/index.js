import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/core';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <div css = {css`
           background-color: white;
        `}>
            <h1> This app is awesome</h1>
            <p>Log in to find out why</p>

            <Link to = "/dashboard" css ={css`
                text-decoration: none;
                color: #279AF1; 
                font-size: 1.333em;
                font-weight: bold;
                letter-spacing: 0.15em;
                transition: letter-spacing 0.50s;
                    & :hover {
                        letter-spacing: 0.20em;
                    }
            `}>
                Go to the dashboard &rarr;
            </Link>
        </div>
    </Layout>
)