import React from "react";
import Dialogue from "./Dialogue";

//경고 다이얼로그, 일반 다이얼로그를 가져와서 색만 바꿈.
function WarningDialogue(props) {
    return(
        <Dialogue 
            style={{backgroundColor:"#ff0000"}}
            title="경고"
            message="경고 다이얼로그 입니다."   />
    );
}

export default WarningDialogue;