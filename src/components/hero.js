import React from 'react';
import {Link} from 'gatsby';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 50vh;
    background-position: bottom 30% center;
    background-size: cover;
    padding: 5rem;
        + * {
            margin-top: 0;
        }

    @media (max-width: 650px) {
        padding: 1.2rem
        }
    
`;
const TextBox = styled("div")`
    background-color: #F7F7FF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding:  1.70rem;
    width: 30%;

    @media (max-width: 650px) {
        width: 90%;
        margin: 1.50rem auto;
        }
    @media (max-width: 500px) {
        width: 100%;
        margin:0;
    }
`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "solen-feyissa.jpg"}){
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return(
        <ImageBackground Tag = "section" fluid = {image.sharp.fluid} fadeIn = "soft">
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
        </ImageBackground>

    )
};
export default Hero;