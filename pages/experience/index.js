import styles from '../../styles/Experience.module.css'

import Head from 'next/head'

import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import { ExpCard } from '../../components/ExpCard'

export default function experience({jobs}) {
    
    return (
        <>
            <Head>
                <title>JmRona - Experience</title>
                <style type="text/css">
                    {`
                        .nav{
                            background-color: #eeeeee !important;
                        }

                        .active{
                            color: var(--blue-color) !important;
                        }

                        .nav-link, .small{
                            color: var(--black-color) !important;
                        }

                        .navbar-dark .navbar-toggler-icon {
                            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 28, 65, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
                        }
                    `}
                </style>
            </Head>

            <Layout>
                <Container fluid className={styles.container}>
                    <Row className="position-absolute ">
                        <Col sm={12}>
                            <h1 className="title">Experience</h1>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex h-100 justify-content-around pt-5 align-items-around" sm={6}>
                        <Col sm={12} ><br/><br/></Col>

                        {
                            jobs.map( (job, index) => (
                                <Col key={index} sm={5} xs={10} className="justify-self-center mt-5 ">
                                    <ExpCard {...job} />
                                </Col>
                            ))
                        }
                        <Col sm={12} ><br/><br/></Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
};

export async function getServerSideProps({params}){

    const res = await fetch(`https://backend-portfolio-jmrona.herokuapp.com/api/experience`)
    const data = await res.json()
    const {experiences: jobs} = data;

    return { props: {jobs} }
};