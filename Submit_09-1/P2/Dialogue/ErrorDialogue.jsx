import React from "react";
import Dialogue from "./Dialogue";

//오류 다이얼로그, 일반 다이얼로그를 가져와서 색만 바꿈.
function ErrorDialogue(props) {
    return(
        <Dialogue 
            style={{backgroundColor:"#444444"}}
            title="에러"
            message="에러 다이얼로그 입니다."   />
    );
}

export default ErrorDialogue;