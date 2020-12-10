import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const Navegation = () => {
    return (
        <>
            <Head>
                <style type="text/css">
                    {`

                    .bg-blue{
                        background-color: var(--dark-blue);
                    }

                    .bg-white{
                        background-color: var(--white-color);
                    }

                    .small{
                        font-size:12px;
                        padding-left: 3px;
                    }

                    `}
                </style>
            </Head>
            
            

            <Navbar collapseOnSelect 
                expand="lg" 
                bg="blue"
                variant="dark"
                className="nav"
                sticky="top">
                <Navbar.Brand href="/">
                        <img src="assets/svg/jr.svg" alt="logo" width="60px" className="pl-2"/><br/>
                        <small className="small">JmRona</small>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="/" passHref>
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </Link>
                        <Link href="/experience" passHref>
                            <Nav.Link>
                                Experience
                            </Nav.Link>
                        </Link>
                        <Link href="/projects" passHref>
                            <Nav.Link>
                                Projects
                            </Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </Link>
                        
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

