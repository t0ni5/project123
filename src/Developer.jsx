import 'bootstrap/dist/css/bootstrap.min.css'

import defaultAvatar from './assets/avatar.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '@fontawesome/fontawesome-free/css/all.min.css';  

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//import { faTelegram } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Developer(props){
    return(
        <div  className='container-fluid d-flex align-items-center justify-content-center'>
        <Card className="my-3 developer_card">
        
        <Card.Body className="d-flex flex-column flex-lg-row align-items-center  text-center">
        <Col lg={4} md={4} sm={10} xs={10 } className="mb-3 mb-lg-0 mb-md-0">

        <Card.Img variant="top" src={defaultAvatar} alt="developer's avatar" className='img-fluid max-width-80 mx-auto text-center'/>
        </Col>
        
        <Col lg={8} md={8}>
        
        <Card.Title className='developer_name max-width-100'>{props.name}</Card.Title>
        <Card.Text ><ul className='developer_contacts d-flex flex-column'> 
        <li><div className='d-flex justify-content-center'><i className="fab fa-github"></i><a href={props.gitlink}>{props.github}</a></div></li>  
        <li><div className='d-flex justify-content-center'><i className="fab fa-telegram"></i><a href={props.tegramlink}>{props.telegram}</a></div></li></ul>
        </Card.Text>
       
        </Col>
      </Card.Body>
      
        </Card>
        </div>
        
       
       
      
    );
}

export default Developer