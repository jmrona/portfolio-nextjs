import styles from '../../styles/Experience.module.css'

import Head from 'next/head'

import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import { ExpCard } from '../../components/ExpCard'

export default function experience() {
    
    const jobs = [
        {
            img: 'assets/img/takeatip.jpg',
            role: 'FullStack web developer',
            description: 'Take a tip is a leading market research and consulting company with continuous improvement programs with mystery shopper services, studies, surveys and training. <br/>During my time at Take a tip, we managed to <b>increase the performance of the web application by 20%</b> by improving the structure of the databases. In addition to creating <b>new features</b> for the client as a comparison of data obtained during the evaluation, etc.On the other hand, we improved the design of the web application in order to achieve a better <b>user experience</b>.',
            date: 'Jan 2016 - Sep 2017',
            urlWebsite: 'https://takeatip.es',
            visible: true
        },
        {
            img: 'assets/img/comunica-web.jpg',
            role: 'Web developer',
            description: 'Comunicaweb is a digital marketing company which offers SEO services, social networks, advertising, web design, etc. <br/>This was my first professional experience in web development after finishing my higher education in systems administration. Here I learned <b>object-oriented programming</b> and how to structure files in a web project with the <b>MVC design pattern</b> (model-view-controller). In the design part, I learned to use tools like <b>Photoshop</b> to create web designs and modify images that would later be used in a web page.',
            date: 'Mar 2015 - Jun 2015',
            urlWebsite: 'https://comunica-web.com/',
            visible: true
        },
    ]

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

// export async function getServerSideProps({params}){

//     const res = await fetch(`https://backend-portfolio-jmrona.herokuapp.com/api/experience`)
//     const data = await res.json()
//     const {experiences: jobs} = data;

//     return { props: {jobs} }
// };