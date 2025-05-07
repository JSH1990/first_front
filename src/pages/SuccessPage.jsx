import React from "react";

function SuccessPage(){
    return (
        <div>
        <Welcome name="React" />
        <Welcome name="View1" />
        </div>
    );
}

function Welcome(props){
    return <h1>{props.name} 안녕</h1>
}

export default SuccessPage;