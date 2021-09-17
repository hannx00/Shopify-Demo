import React from "react";
import "./Home.css";
import reactDom from "react-dom";
import hotel from "./img/hotel.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    render() {
        return(
            <Container>
                
                <Row>
                    <h1 className="header">
                        WELCOME TO  <br/> The  <br/> Midtown  <br/> Hotel
                    </h1>
                </Row>

                <div>
                    <img src={hotel} alt="hotel-img" className="bg"/>
                </div>

                <Row>
                    <Col style={{paddingTop: "2rem"}}> 
                        <a style={{float: "right"}} href="/checkin" className="button"> 
                            GUEST CHECK-IN 
                        </a>
                    </Col>

                    <Col style={{paddingTop: "2rem"}}> 
                        <a style={{float: "left"}} href="/giftshop" className="button">
                            GIFT SHOP 
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;