import ReactStars from "react-rating-stars-component";
import { useRef,useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

export default function AddMovie({adding}) {

    let titleRef = useRef();
    let imgurlRef = useRef();
    let traiurlRef = useRef();
    let descRef = useRef();
    let [rate, setRate] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
    };

    function submitted(ev){
        ev.preventDefault();

        let movieObject = { 
            title:titleRef.current.value, 
            img:imgurlRef.current.value, 
            description:descRef.current.value, 
            trailer:traiurlRef.current.value, 
            rating:rate};
        adding(movieObject);

        //save all this information in localStorage
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>
        <div style={{backgroundColor:'#8B0000'}}>
            <Button variant="light" onClick={handleShow} style={{position:'fixed',bottom:'20px',right:'20px',borderRadius:'10px'}}>
                <i className="fa-solid fa-plus"></i>
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add a movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitted}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Title :</Form.Label>
                                <Form.Control type="text" 
                                    name="title" 
                                    ref={titleRef} 
                                    placeholder="enter movie title" 
                                    required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Description :</Form.Label>
                                <Form.Control type='textarea' name="description"
                                    ref={descRef}
                                    rows={3} required/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Poster Url :</Form.Label>
                            <Form.Control type="url"
                                name="posterURL"
                                ref={imgurlRef}
                                placeholder="enter movie poster url" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie trailer :</Form.Label>
                            <Form.Control type="url"
                                name="trailerLink"
                                ref={traiurlRef}
                                placeholder="enter movie trailer" required/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                            <Form.Label>Rating :</Form.Label>
                            <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
                            </Form.Group>
                        </Row>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="danger" type="submit" onClick={handleClose} >Add Movie</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
        </>
    )
}
