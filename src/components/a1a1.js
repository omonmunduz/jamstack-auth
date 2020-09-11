import React from 'react';
import { css } from '@emotion/core';


const A1a1 = () => {

    return (
        <div css={css`
            width: 100vw;
            max-width:500px;
            height: 500px;
            background-color: #FFD447;
            margin: 0 auto;
            padding: 2rem;
            position: absolute;
            top: -8rem;
            right: 8rem;
                @media (max-width: 800px){
                    left: 0;
                    padding: 2px;
                }
            `}>
        <h1 css={css`
            font-size: 2.8rem;
            text-align: right;
            border: 5px solid black;

        `}>. . . . . . 3rd party API</h1>
        </div>
    )

};
export default A1a1;