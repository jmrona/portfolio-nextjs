import Head from 'next/head'
import { Layout } from '../components/Layout'

import styles from '../styles/Home.module.css'

import {
    Container, 
    Row, 
    Col, 
    Button} 
    from 'react-bootstrap'

export default function Home() {
  return (

        <>
            <Head>
                <title>JmRona</title>
            </Head>

            <Layout>
                <Container fluid className={styles.container}>
                    <Row className="d-flex pt-4 align-items-center justify-content-center">
                        <Col 
                        className="d-flex justify-content-center"
                        lg={6}>
                            <div className={styles.presentation}>
                                <h1>
                                    I'm <span>J</span><span>o</span><span>s</span><span>e</span> <br /> Romero
                                </h1>
                                <p>
                                    I’m a Spanish web developer based in Bristol and available for full-time roles & freelance projects.
                                </p>
                                <Button 
                                    variant="outline-primary"
                                    size="lg" 
                                    block
                                    className="btnCustom"
                                    href="https://drive.google.com/file/d/1Ddwti5wt_BTmVmsO31yT_Hz9zSZTLBMG/view?usp=sharing"
                                >
                                    Get my resume
                                </Button>
                            </div>
                        </Col>
                        <Col 
                        className="d-flex justify-content-center"
                        lg={6}>
                            <img
                                src="../assets/svg/illustration1.svg" 
                                alt="desk ilustration" 
                                className={styles.imgPresentation} 
                            />
                        </Col>
                    </Row>
                </Container>
            </Layout>
            
        </>
  )
}
