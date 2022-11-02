import React from "react";
import Dialogue from "./Dialogue";

//공지 다이얼로그, 일반 다이얼로그를 가져와서 색만 바꿈.
function NoticeDialogue(props) {
    return(
        <Dialogue 
            style={{backgroundColor:"#6666ff"}}
            title="공지"
            message="공지사항 다이얼로그 입니다."   />
    );
}

export default NoticeDialogue;