import React from 'react';
import { css } from '@emotion/core';

const DummyText = () => {

    return (
        <div css = {css`
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            padding: 1.80rem;
            position:relative;
        `}>
            <h2>
                What is Lorem Ipsum?
            </h2>
            <p css = {css`
                font-size: 1.2em;
                position:abolute;
                right: 0;
                bottom:0;
            `}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}
export default DummyText;