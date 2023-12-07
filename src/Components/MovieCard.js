import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'

export default function MovieCard({ele,index}) {
    return (
        <>
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
                <Card border="secondary" style={{height:'470px', color:'white',width: '230px',margin:'40px',marginLeft:'50px' , background: 'rgba(255, 255, 255, 0.1)',borderRadius: '5px',backdropFilter: 'blur(10px)',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',textDecoration: 'none'}}>
                    <Card.Img variant="top" src={ele.img} alt={`${ele.title} Poster`} style={{height:'320px',width:'228px',display:'block'}} />
                    <Card.Body>
                        <Card.Title style={{maxWidth:'170px'}}>{ele.title}</Card.Title>
                        <Link  to={"/"+index} className="movie-card-link" style={{color:'white',width:'10px'}}> 
                            <i className="fa-solid fa-circle-info fa-lg" style={{position:'absolute',right:'5%',bottom:'25%'}}></i>
                        </Link>
                        <Card.Text>{ele.description}</Card.Text>
                        <ListGroup className="list-group-flush" style={{color:'black'}}>
                            <ListGroup.Item style={{color:'white',background: 'rgba(255, 255, 255, 0.1)',borderRadius: '5px',backdropFilter: 'blur(10px)',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                                Rating: {ele.rating} <i class="fa-solid fa-star fa-sm" style={{paddingLeft:'60px'}}></i>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </>
    )
}
