import styles from '../../styles/Projects.module.css'

import Head from 'next/head'

import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import { CustomCard } from '../../components/CustomCard'
// import { FaGithub } from 'react-icons/fa';
// import { BiWorld } from 'react-icons/bi';

export default function Projects() {

    const projects = [
        {
            img: 'assets/img/portfolio.jpg',
            title: 'Portfolio', 
            description: 'This is my first web page where I show the users who visit it my work experience and my projects. In addition to the possibility of <b>downloading my resume</b> and contacting me through a <b>contact form</b>.<br/><br/>To design this website I used <b>Figma to get a visual idea</b> of what I was looking for. And to develop it I have used <b>Next JS</b> to take advantage of my React knowledge and learn a new tool. Besides I use <a href="https://www.emailjs.com/"><b>Email JS</b></a> to be able to send emails', 
            urlRepository: 'https://github.com/jmrona/portfolio-nextjs', 
            urlWebsite: 'jmrona.vercel.app', 
            skills: [
                {name: 'Next JS'},
                {name: 'Bootstrap'},
                {name: 'EmailJS'},
            ]
        },
        {
            img: 'assets/img/journal-app.jpg',
            title: 'Journal App', 
            description: 'I developed this web application to put into practice what I had learned with React Js using Hooks.<br/><br/> Here I use <b>Firebase</b> for the first time, and I use their tool to create <b>authentication by mail and by Google</b>. I also use <b>Firestore to create the database</b> where I store the user\'s data and save each of the entries that the user creates. I also make use of the <b><a href="https://cloudinary.com/">Cloudinary API</a></b>, which allows me to store images.', 
            urlRepository: 'https://github.com/jmrona/journal-app', 
            urlWebsite: '', 
            skills: [
                {name: 'React JS'},
                {name: 'Redux'},
                {name: 'SASS'},
                {name: 'Firebase'},
                {name: 'Firestore'},
                {name: 'Google auth'},
                {name: 'Cloudinary API'},
            ]
        },
        {
            img: 'assets/img/calendarapp.jpg',
            title: 'Calendar App', 
            description: 'This is my first project after finishing the React JS course from <a href="https://www.udemy.com/course/react-cero-experto/"><b>Udemy</b></a>. <br/><br/>I developed the <b>backend</b> with Express JS, MongoDB as a database where I save all the information about the created events and React JS to develop the <b>frontend</b>. <br/><br/>Apart from the calendar and <b>CRUD</b> of your events, you can find a login and registration section that generates a token using <b>JWT</b>.', 
            urlRepository: 'https://github.com/jmrona/mern-calendar', 
            urlWebsite: 'https://mern-calendar-jmrona.herokuapp.com/', 
            skills: [
                {name: 'MongoDB'},
                {name: 'Express JS'},
                {name: 'React JS'},
                {name: 'Node JS'},
                {name: 'Redux'},
                {name: 'API restful'},
                {name: 'JWT'},
                {name: 'Heroku'},
            ]
        },
        {
            img: 'assets/img/chr-photography.jpg',
            title: 'Chr-photography', 
            description: 'This is the first and only project that I have <b>developed with PHP using the Laravel</b> framework for the backend and <b>Vue JS</b> for the frontend. <br/><br/>The idea of this project was to create <b>a website for a photographer</b> where he could upload his photos to an image gallery, <b>create categories</b> and classify the photos, after <b>logging in</b> previously. In addition to a about section and a contact form.', 
            urlRepository: 'https://github.com/jmrona/chr-fotografia', 
            urlWebsite: '', 
            skills: [
                {name: 'Vue JS'},
                {name: 'Laravel'},
                {name: 'Vuetify'},
                {name: 'MySQL'},
            ]
        },
        {
            img: 'assets/img/gifapp.jpg',
            title: 'Gif App', 
            description: 'This is my first project with React JS in which I applied what I learned in the Udemy course. <br/><br/>The idea of this project is to create a <b>search engine where you can get gifs</b>  as a search result. To get these gifs I have used the <a href="https://developers.giphy.com/"><b>Giphy API</b></a>. In this section of the course, the teacher did not focus on the layout of the web, so I have to improve the web design.', 
            urlRepository: 'https://github.com/jmrona/react-GifExpertApp', 
            urlWebsite: 'https://jmrona.github.io/react-GifExpertApp/', 
            skills: [
                {name: 'React JS'},
                {name: 'Giphy API'},
                {name: 'Github Pages'},
            ]
        },
        
    ]
    
  return (
    <>
        <Head>
            <title>JmRona - Projects</title>
            <style type="text/css">
                {`
                    .nav{
                        background-color: #eeeeee !important;
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
                <Row className="position-absolute">
                    <Col sm={12}>
                        <h1 className="title">Projects</h1>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center pt-5 align-content-center">
                    <Col sm={12}><br/><br/></Col>
                    {
                        projects.map( (project, index) => (
                            <Col sm={4} xs={10} className="mt-3 justify-self-center">
                                <CustomCard key={index} {...project} />
                            </Col>
                        ))
                    }
                    <Col sm={12}><br/><br/></Col>
                </Row>
            </Container>
      </Layout>
        
    </>
)};