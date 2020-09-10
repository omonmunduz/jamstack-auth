import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/core';

const Header = () => (
        <header css = {css`
            width: 100%;
            background: #2C363F;
            display: flex;
            align-items: center;
        `}>
            <Link to = "/" css = {css`
                color: #FFE74C;
                display: inline-block;
                padding: 0.25rem 0.5rem;
                font-size: 4rem;
                text-decoration: none;
            `}>
                &#x02A50;
            </Link>
        </header>
);
export default Header;