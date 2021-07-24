import React from "react";

import Section from "./Section";

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
        <Section>
        </Section>
        </>
    );
}