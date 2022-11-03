import React from "react";

//컨텍스트 사용
const ThemeContext = React.createContext("light");

//컨텍스트로 value를 전달
function ContextApp() {
    return (
        <ThemeContext.Provider value="lavender">
            <Toolbar    />
        </ThemeContext.Provider>
    )
}

//중간에 props로 전달할 필요 없음.
function Toolbar() {
    return (
        <div>
            <ThemeButton   />
        </div>
    )
}

function ThemeButton() {
    return (
        <div>
            <Button />
        </div>
    )
}

//value를 사용할 컴포넌트
function Button() {
    return (
        <div>
            <ThemeContext.Consumer>
                {value => (<div style={{margin:50, padding:50, backgroundColor:value}}>
                    <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
                    <button>확인</button>
                </div>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ContextApp;