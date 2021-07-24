import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
    const fontStyle = {
        display: "block",
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const cardBodyStyle = {
        overflow: "auto",
        marginLeft: "40px",
        marginRight: "40px"
    };

    const imageStyle = {
        width: "100%"
    }

    return (
        <>
            <div className="bg-light">
                <Container>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 bg-light">
                            <div>
                                <h2 style={fontStyle}>Lorem Ipsum</h2>
                                <p style={fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="bg-danger">
                            <h2 style={fontStyle}>Lorem Ipsum</h2>
                            <p style={fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc
                                laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu
                                varius varius.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="bg-success">
                            <img src="https://picsum.photos/200/300"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="bg-danger">
                            <img src="https://picsum.photos/200/300" style={imageStyle} />
                            <div style={cardBodyStyle}>
                                <h2 style={fontStyle}>Lorem
                                    Ipsum</h2>
                                <p style={fontStyle}>Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus.
                                    Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum
                                    dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="bg-success">
                            <img src="https://picsum.photos/200/300" style={imageStyle} />
                            <div style={cardBodyStyle}>
                                <h2 style={fontStyle}>Lorem Ipsum</h2>
                                <p style={fontStyle}>Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus.
                                    Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum
                                    dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="bg-primary">
                            <img src="https://picsum.photos/200/300" style={imageStyle} />
                            <div style={cardBodyStyle}>
                                <h2 style={fontStyle}>Lorem Ipsum</h2>
                                <p style={fontStyle}>Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus.
                                    Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum
                                    dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}