import React from "react";

export default function App() {
    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 bg-light">
                            <div>
                                <h2 style={{
                                    display: "block",
                                    marginBlockStart: "16px",
                                    marginBlockEnd: "16px"
                                }}>Lorem Ipsum</h2>
                                <p style={{
                                    display: "block",
                                    marginBlockStart: "16px",
                                    marginBlockEnd: "16px"
                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="bg-danger">
                            <h2 style={{
                                display: "block",
                                marginBlockStart: "16px",
                                marginBlockEnd: "16px"
                            }}>Lorem Ipsum</h2>
                            <p style={{
                                display: "block",
                                marginBlockStart: "16px",
                                marginBlockEnd: "16px"
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc
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
                            <img src="https://picsum.photos/200/300" style="width: 100%"/>
                            <div style="overflow: auto; margin-left: 40px; margin-right: 40px">
                                <h2 style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem
                                    Ipsum</h2>
                                <p style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus.
                                    Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum
                                    dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="bg-success">
                            <img src="https://picsum.photos/200/300" style="width: 100%"/>
                            <div style="overflow: auto; margin-left: 40px; margin-right: 40px">
                                <h2 style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem
                                    Ipsum</h2>
                                <p style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus.
                                    Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum
                                    dolor eu varius varius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="bg-primary">
                            <img src="https://picsum.photos/200/300" style="width: 100%"/>
                            <div style="overflow: auto; margin-left: 40px; margin-right: 40px">
                                <h2 style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem
                                    Ipsum</h2>
                                <p style="display: block; margin-block-start: 16px; margin-block-end: 16px">Lorem ipsum
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