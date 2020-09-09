import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/core';

const Header = () => (
        <header css = {css`
            align-items: baseline;
            background: #ddd;
            display: flex;
            font-size: 0.875rem;
            justify-content: space-between;
            margin: 0 -5vw;
            padding: 0.5rem 5vw;
        `}>
            <Link to = "/" css = {css`
                color: #222;
                display: inline-block;
                padding: 0.25rem 0.5rem;
                text-decoration: none;
                    & :hover:not(.active){
                        background: #bbb;
                    }
                    & .active {
                        background: #333;
                        color: white;
                    }
            `}>
                JAMstack App
            </Link>
        </header>
);
export default Header;