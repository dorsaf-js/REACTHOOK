import React, { useState } from 'react';
import {Modal,Button,Form} from 'react-bootstrap';

export const AddMovie = ({addmovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('');
    const [posterURL,setPosterUrl] = useState('');
    const [description,setDescription] = useState('');
    const [rate,setRate] = useState(0);

    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Films</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie title"  onChange={(e)=>setTitle(e.target.value)}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>posterURL</Form.Label>
    <Form.Control type="text" placeholder="enter the movie posterUrl"onChange={(e)=>setPosterUrl(e.target.value)} />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="enter the movie description"onChange={(e)=>setDescription(e.target.value)} />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>rate</Form.Label>
    <Form.Control type="number" placeholder="enter the movie rate" onChange={(e)=>setRate(e.target.value)}/>
  </Form.Group>
  
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addmovie(title,posterURL,description,rate);setShow(false)}}>
           add movie
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default AddMovie
