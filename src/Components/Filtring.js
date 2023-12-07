import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

export default function Filtring({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);
    
    const ratingChanged = (newRating) => {
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };


    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }


    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{ height: '60px' }}>
        <Container fluid>
        <Navbar.Brand href="/" className="d-flex" style={{margin:'10px'}}>
            <img style={{backgroundColor:'white',borderRadius:'5px',padding:'5px',margin:'10px'}}
              alt=""
              src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/movie-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <h2 style={{ marginTop:'5px'}}>My Movie app</h2>
          </Navbar.Brand>
          <Form className="d-flex" onChange={submitted} onSubmit={submitted} style={{maxheight:'25px'}}>
            <Form.Control ref={searchRef}
              type="text"
              placeholder="Search for a movie"
              className="me-2"
              aria-label="Search"
            />
            
            <ReactStars count={10} style={{maxWidth:'10px'}} 
                onChange={ratingChanged}
                isHalf={true}
              activeColor="#ffd700"/>
          </Form>
        </Container>
      </Navbar>
        </>
    )
}
