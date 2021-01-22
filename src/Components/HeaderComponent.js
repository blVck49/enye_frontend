import React from 'react';
import Row from 'react-bootstrap/Row';
import logo_img from './logo.jpg';
import Col from 'react-bootstrap/Col'

 function HeaderComponent (props) {

    function searchInputChange (val) {
        return props.inputChange(val)
      }
    return (
            
            <Row className="shadow" style={{position:"static"}}> 
              
                <img style={{marginLeft:"20px",padding:"5px",width:"50px",height:"50px"}} src={logo_img} alt="#"/>
                <Col>
                    <p style={{fontFamily:"Muli",fontSize:"25px",fontWeight:"bold",paddingTop:"5px"}}>Enyo Frontend</p>
                </Col>  
                <Col xs={12} md={8}>
                    <form >
                    <input
                        style={{outline:"none",backgroundColor:"none",borderWidth:"0 0 2px",borderColor:"#61aaf2",marginTop:"15px"}}
                        className="w-50" type="text" placeholder="Name" aria-label="Search" 
                        onChange={e => searchInputChange(e.target.value)}
                        />                            
                    </form> 
                </Col>                      
            
            </Row>
    )
    }

export default HeaderComponent;
