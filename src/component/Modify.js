import react,{useState} from "react";
import {Modal,form,Button} from "bootstrap-modal-js"
import {Button , Modal , Form} from "bootstrap-modal-js"
const Modify = ({addfilm}) => {
    const [show, setShow] = useState(false);
    const [name , setName] = useState("")
    const [image , setImage] = useState("")
    const [rating , setRating] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave=()=>{
        let newmovie={
            name : name , 
            url :image , 
            rate : rating ,
            id : Math.random()
            
        }
        addfilm(newmovie)
        setImage("")
        setName("")
        setRating(0)
        setShow(false)

    }
  
    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group>
            <Form.Label>name :</Form.Label>
                <Form.Control type="text" placeholder="add the name of movie" value={name} onChange={(e)=>setName(e.target.value)} />
                            
            </Form.Group>
        
            <Form.Group >
            <Form.Label>picture :</Form.Label>
                <Form.Control type="text" placeholder="add the url picture of movie" value={image} onChange={(e)=>setImage(e.target.value)} />
                            
            </Form.Group>

            <Form.Group >
            <Form.Label>rate:</Form.Label>
                <Rating rate={rating} setRate={setRating} />
                            
            </Form.Group>

            



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default Modify;