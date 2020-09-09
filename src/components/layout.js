import React from 'react';
import useMetadata from '../hooks/use-siteMetadata';

import { IdentityContextProvider } from  'react-netlify-identity-widget';
import Helmet from 'react-helmet';

import Header from './header';
import './layout.css';

const Layout = ({children}) => {
 const {title, description } = useMetadata();
    return (
        <>
            <Helmet>
                <html lang = "eng"/>
                <title>{title}</title>
                <meta name = "description" content = {description}/>
            </Helmet>
            <IdentityContextProvider url = "https://jamstack312-auth.netlify.app">
               <Header />
                <main>
                    {children}
                </main>
            </IdentityContextProvider>
        </>
    )
};

export default Layout;