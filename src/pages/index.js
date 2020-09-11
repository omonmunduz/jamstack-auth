import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import A1a1 from '../components/a1a1';
import A2a2 from '../components/a2a2';
import { css } from '@emotion/core';



export default () => (
    <Layout>
        <Hero />
        <div css = {css`
            position: relative
        `}>
        <A1a1 />
        <div css = {css`
            position: relative
        `}>
        <A2a2 />
        </div>
        </div>
    </Layout>
)