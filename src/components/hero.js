import React from 'react';
import {Link} from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const HeroImage = styled("div")`
    height: 50vh;
    background-image: url('/harley-davidson.jpg');
    background-position: bottom 30% center;
    background-size: cover;
        + * {
            margin-top: 0;
        }
`;
const TextBox = styled("div")`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 2rem;
`;

const Hero = () => {
    return(
        <HeroImage>
            <TextBox>
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
            </TextBox>
        </HeroImage>

    )
};
export default Hero;