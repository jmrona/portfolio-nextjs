import { Button, ButtonGroup, Card, Row } from 'react-bootstrap'
import { Markup } from 'interweave';

export const ExpCard = ({id, img, role, description, date, urlWebsite, visible: isVisible}) => {
    return (
        <>  
            {
                isVisible ?
            
                <Card className="shadow h-100 m-vw-100">
                    <Row className="no-gutters">
                        <Card.Img className="col-md-4 p-3 align-self-center" variant="top" src={img} width="300px" height="300px"/>
                        <div className="col-md-8">
                            <Card.Body className="card-body d-flex flex-column">
                                <div className="card-title">
                                    <h5 className="card-title">{role}</h5>
                                    <small className="card-subtitle text-muted">{date}</small>
                                </div>
                                <p className="card-text">
                                    <Markup content={description} />
                                </p>
                                <Button 
                                    variant="primary" 
                                    block 
                                    size="sm" 
                                    href={urlWebsite}
                                >
                                    Go to website
                                </Button>
                            </Card.Body>
                        </div>
                    </Row>
                </Card>

                :

                ''
            }
        </>
    )
}
