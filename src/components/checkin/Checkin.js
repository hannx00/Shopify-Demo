import React from "react";
import "./Checkin.css";
import reception from "./img/reception.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Checkin extends React.Component {
    render() {
        return(
            <Container fluid>
                <Row>
                    <h1 style={{
                        paddingTop: "8vh",
                        textAlign: "center",
                        fontSize: "3rem"
                    }}> GUEST CHECK-IN</h1>
                </Row>

                <div>
                    <img src={reception} alt="reception-img" className="reception-bg"/>
                </div>

                <Row>
                    <div class="btn">
                        <form>
                            <input type="text" name="" placeholder="   YOUR EMAIL ADDRESS" />
                            <input type="submit" name="" value="CHECK-IN" />
                        </form> 
                    </div>
                </Row>

                <Row>
                    <div className="script">
                        <p>
                            KEEP UP TO DATE AND IN THE KNOW ABOUT NEWS, RELEASES, SALES, AND ALL OTHER INFORMATION ABOUT THE MIDTOWN HOTEL BY SIGNING UP FOR E-MAILS.
                        </p>
                    </div>
                </Row>

                <Row>
                    <div className="btn">
                        <a href="/">BACK</a>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Checkin;