import React from "react";
import Dialogue from "./Dialogue";

//인사 다이얼로그, 일반 다이얼로그를 가져와서 색만 바꿈.
function WelcomeDialogue(props) {
    return(
        <Dialogue 
            style={{backgroundColor:"#00ff00"}}
            title="인사말"
            message="인사말 다이얼로그 입니다."   />
    );
}

export default WelcomeDialogue;