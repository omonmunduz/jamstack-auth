import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/core';
import {styled} from '@emotion/styled';
import Layout from '../components/layout';
import DummyText from '../components/dummy';



export default () => (
    <Layout>
        <div css = {css`
           background-color: white;
           width: 400px;
           box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
           padding: 1.80rem;
           margin: 1.50rem 0.50rem;
        `}>
            <h1> <span >&#x1D541;</span><span>&#x1D538;</span><span>&#x1D544;</span>stack is awesome</h1>
            <p css = {css` text-transform: uppercase;`}>Log in to find out why</p>

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