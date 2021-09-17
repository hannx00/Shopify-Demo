import React from "react";
import "./Giftshop.css";
import hat from "./img/hat.jpg";
import shirt from "./img/shirt.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Giftshop extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <h1 style={{
                        padding: "3rem 0 1rem 0"
                    }}>
                        THE GIFT SHOP
                    </h1>
                </Row>

                <Row>
                    <div className="innerContainer"> 
                        <div className="column">
                            <img src={shirt} alt="shirt-img" className="gift-img"/>
                            <p style={{paddingTop: "1rem"}}>THE STAFF BUTTON DOWN</p>
                            <p style={{paddingBottom: "1rem"}}>$275</p>
                        </div>

                        <div className="column">
                            <img src={hat} alt="hat-img" className="gift-img"/>
                            <p style={{paddingTop: "1rem"}}>MIDTOWN HOTEL TRUCKER</p>
                            <p>$40</p>
                        </div>
                    </div>
                </Row>

                {/* <Row>
                    <div className="innerContainer">
                        <div className="column">
                            <img src={hat} alt="hat-img" className="gift-img"/>
                            <p style={{paddingTop: "1rem"}}>MIDTOWN HOTEL TRUCKER</p>
                            <p>$40</p>
                        </div>
                    </div>
                </Row> */}

                <Row>
                    <div className="btn">
                        <a href="/">BACK</a>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Giftshop;