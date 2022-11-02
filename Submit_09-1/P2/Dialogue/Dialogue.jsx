import React from "react";
import "./Dialogue.css";

//props로 받은 title, message를 화면에 띄우고, style을 적용.
function Dialogue(props) {
    return(
        <div className="dialogue" style={props.style}>
            <h1>{props.title}</h1>
            <br />
            <p>{props.message}</p>
        </div>
    );
}

export default Dialogue;