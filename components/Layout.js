import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Navegation } from './Navegation'

export const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Bhai&family=Exo"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navegation/>
            <div>
                {children}
            </div>
            
        </>
    )
}
