import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorDialogue from "./components/Dialogue/ErrorDialogue";
import WarningDialogue from "./components/Dialogue/WarningDialogue";
import WelcomeDialogue from "./components/Dialogue/WelcomeDialogue";
import NoticeDialogue from "./components/Dialogue/NoticeDialogue";

const root  = ReactDOM.createRoot(document.getElementById("root"));

//위에서부터 순서대로, 경고, 인사, 오류, 공지 다이얼로그
root.render(
    <div>
        <WarningDialogue    /> 
        <WelcomeDialogue    />
        <ErrorDialogue  />
        <NoticeDialogue />
    </div>
);