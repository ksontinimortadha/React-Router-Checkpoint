import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";
import {Container,Navbar,Form,Nav,Button} from 'react-bootstrap';

export default function Filtring({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);
    
    const ratingChanged = (newRating) => {
      filter(searchRef.current.value, newRating);
      setRate(newRating);
    };


    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }

    const resetFilters = () => {
      searchRef.current.value = '';
      filter('', 0);
      setRate(0);
    };

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
            <Nav.Link style={{marginLeft:'480px'}}>
            <ReactStars
              count={10}
              onChange={ratingChanged}
              size={25}
              isHalf={true}
              activeColor="#ffd700"
              value={rate}
            />
            </Nav.Link>
          <Form className="d-flex" onChange={submitted} onSubmit={submitted} style={{maxheight:'25px'}}>
            <Form.Control ref={searchRef}
              type="text"
              placeholder="Search for a movie"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" onClick={resetFilters}>
              Reset
            </Button>
            
          </Form>
        </Container>
      </Navbar>
        </>
    )
}
