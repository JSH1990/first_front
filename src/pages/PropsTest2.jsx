import React from "react";
function Heading(props) {
    return <h1>{props.text}</h1>
}

function Paragraph(props){
    return <p>{props.text}</p>
}

function Section(props){
    return (
        <div>
            <Heading text={props.title} />
            <Paragraph text={props.content} />
        </div>
    );
}

export default Section;