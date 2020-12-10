import React from 'react';

import styles from '../../styles/Contact.module.css'
import Head from 'next/head'

import { Container, Row, Col, Toast } from 'react-bootstrap'
import { Layout } from '../../components/Layout'

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import validator from 'validator';
import ReCAPTCHA from "react-google-recaptcha";

import { useForm } from '../../hooks/useForm'
import { useState } from 'react';

export default function contact() {

    const initialForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
    const {email, name, subject, message} = formValues;
    const [disabled, setDisabled] = useState(false);

    const recaptchaRef = React.createRef();

    const service_gmail = 'service_pwqklgs';
    const template_email = 'template_3jt4s3o';
    const userID = 'user_ueJuu7yLZJeokwB7FxsMo';
    // const mailgun = 'service_qjf2d8u';

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Disable send button
        setDisabled(true);

        // Validate email
        if(!validator.isEmail(email.trim())){
            Swal.fire('Watch out!','Do not forget to provide a email', 'warning')
            return;
        }
        // Validate name
        if(validator.isEmpty(name.trim())){
            Swal.fire('Watch out!','Do not forget to provide a name', 'warning')
            return;
        }
        // Validate subject
        if(validator.isEmpty(subject.trim())){
            Swal.fire('Watch out!','Do not forget to provide the subject', 'warning')
            return;
        }
        // Validate message
        if(validator.isEmpty(message.trim())){
            Swal.fire('Watch out!','Do not forget to provide the message', 'warning')
            return;
        }

        Swal.fire('Sending...','', 'info');

        const text = subject + ' - ' + message;

        // Send email
        emailjs.send(service_gmail,template_email,{
            from_name: JSON.stringify(name),
            reply_to: email,
            message: JSON.stringify(text),
        },userID)
        .then( (response) => {
            // console.log('SUCCESS!', response.status, response.text);
            Swal.fire('Thank you','Your email has been sended', 'success');

            reset();
        }, (error) => {
            Swal.fire('Oops!','An error has occured. Please try again later', 'error');
            // console.log('FAILED...', error);
        });

        // Reset captcha
        const recaptchaValue = recaptchaRef.current.reset();

        // Enable send button
        setDisabled(false);
    }

    return (
        <>
            <Head>
                <title>JmRona - Contact</title>
                <script src='https://www.google.com/recaptcha/api.js'></script>
            </Head>

            <Layout>
                <Container fluid className={styles.container}>
                    <Row className="position-absolute">
                        <Col sm={12}>
                            <h1 className="title dark">Contact</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex h-100 pb-5 align-content-center justify-content-center">
                        <Col sm={12} ><br/><br/><br/></Col>
                        <Col sm={3} >
                            <div className={styles.form}>
                                <form className="form-group" onSubmit={handleSubmit}>
                                    <div className="d-flex justify-content-center">
                                        <img 
                                            src="assets/svg/jr.svg" 
                                            alt="JmRona"
                                            width="100px"
                                            />
                                    </div>
                                    <div className="d-flex justify-content-center mb-2"><small>JmRona</small></div>
                                    <label htmlFor="name" className={styles.form__label}>
                                        Name:
                                    </label>
                                    <input 
                                        className="form-control mb-4" 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        onChange={handleInputChange}
                                        value={name}
                                        required
                                        placeholder="Name"/>
                                    <label htmlFor="email" className={styles.form__label}>
                                        Email:
                                    </label>
                                    <input 
                                        className="form-control mb-4" 
                                        type="text" 
                                        name="email" 
                                        id="email"
                                        onChange={handleInputChange}
                                        value={email}
                                        required
                                        placeholder="Email"/>
                                    <label htmlFor="subject" className={styles.form__label}>
                                        Subject:
                                    </label>
                                    <input 
                                        className="form-control mb-4" 
                                        type="text" 
                                        name="subject" 
                                        id="subject"
                                        onChange={handleInputChange}
                                        value={subject}
                                        required
                                        placeholder="Subject"/>
                                    <label htmlFor="message" className={styles.form__label}>
                                        Message:
                                    </label>
                                    <textarea 
                                        className="form-control mb-4" 
                                        name="message"
                                        id="message"
                                        placeholder="Type your message here"
                                        onChange={handleInputChange}
                                        value={message}
                                        required
                                    >
                                    </textarea>
                                    <div className="mb-4 mw-100">
                                        <ReCAPTCHA
                                            sitekey="6Lei1QAaAAAAACEGTIGTxFHEMeUyLkX23xTfPuLv"
                                            ref={recaptchaRef}
                                        />
                                    </div>
                                    <button type="submit" disabled={disabled} className="btn btn-outline-primary btn-md btn-block">Send</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}
