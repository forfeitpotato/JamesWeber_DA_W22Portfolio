import React from "react";
const Sample = (props) =>{
    return(
        <div>
            <a href={props.link}>{props.title}</a>
            <div>{props.description}</div>
            <br/>
        </div>
    )
}

export default Sample;