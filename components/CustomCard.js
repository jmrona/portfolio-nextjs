import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa';

import { BiWorld } from 'react-icons/bi';

import { Markup } from 'interweave';

export const CustomCard = ({img, title, description, urlRepository, urlWebsite, skills}) => {

    const img_default = './assets/img/SD-default-image.png';

    return (
        <Card className="shadow h-100 m-sm-4 m-vw-100">
            <Card.Img variant="top" src={ img !== '' ? img : img_default}/>
            <Card.Body className="d-flex flex-column">
                <div className="pb-3 mb-auto">
                    {
                        skills.map( (skill, index) => (
                            <span 
                                key={index} 
                                className="badge badge-dark mr-1 p-1"
                            >
                                {skill}
                            </span>
                        ))
                    }
                </div>
                <Card.Title>
                    <h5 className="card-title text-uppercase ">{title}</h5>
                </Card.Title>
                <Card.Text>
                    <Markup content={description} />
                </Card.Text>
                <div className="d-flex flex-column mt-auto">
                    <Row className=" justify-content-center">
                        {
                            urlRepository
                            && 
                            <Col xs={6}>
                                <ButtonGroup className="w-100 mb-2">
                                    <Button 
                                        disabled
                                        className="btn btn-dark">
                                        <FaGithub/>
                                    </Button>
                                    <Button 
                                        block 
                                        className="btn btn-dark"
                                        href={urlRepository}
                                    >
                                        <span className="ml-2">Github</span>
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        }
                        {
                            urlWebsite 
                            &&
                            <Col xs={6}>
                                <ButtonGroup className="w-100">
                                    <Button disabled className="btn btn-primary">
                                        <BiWorld/>
                                    </Button>
                                    <Button block href={urlWebsite}>
                                        <span className="ml-2">Demo</span>
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        }
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}