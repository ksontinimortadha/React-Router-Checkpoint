import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Description({list,ele}) {

    console.log(list.length);
    let params = useParams();
    return (
        <>
        <div className="desc">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <div className="movie-detail" style={{backgroundColor:'#8B0000',marginTop:'-20px',marginBottom:'-30px',paddingTop:'15px',height:'630px'}}>
            <Card className="text-center" border="secondary"  style={{height:'auto', color:'white',width: '700px',marginTop:'70px',marginBottom:'30px',marginLeft:'270px', background: 'rgba(255, 255, 255, 0.1)',borderRadius: '5px',backdropFilter: 'blur(10px)',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Card.Header>{list[params.id].title.toUpperCase()}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <iframe
                            title={`${list[params.id].title} Trailer`}
                            width="560"
                            height="315"
                            src={list[params.id].trailer}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </Card.Text>
                    {list[params.id].description}
                </Card.Body>
                <Card.Footer className="text">
                    <Link to="/"><Button variant="light"><i class="fa-solid fa-circle-arrow-left fa-sm" style={{marginRight:'5px'}}></i> 
                        Go back to home</Button></Link>
                </Card.Footer>
            </Card>
        </div>
            </>
            }
        </div>
        
        </>
    )
}
