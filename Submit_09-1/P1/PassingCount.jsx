import React, {useState} from "react";
import './PassingCount.css';

//첫번째 자식 요소.
//부모로부터 데이터를 받아(props) 단순히 출력만
const FirstChild = (props) => {
    console.log(`자식1${props.data}`);
    return(
        <div className="first">
            <p>자식1 컴포넌트</p>
            <p>(카운터:{props.data})</p>
        </div>
    );
};

//두번째 자식 요소.
//props로 함수를 받아, left, right를 변경하기 위한 함수를 만들고 버튼에 적용.
const SecondChild = (props) => {
    const onLeftClick = () => props.setLeft((prevData) => parseInt(prevData) + 1);
    const onRightClick = () => props.setRight((prevData) => parseInt(prevData) + 1);

    console.log("자식2 (버튼)");
    return(
        <div className="second">
            <p>자식2 컴포넌트</p>
            <button onClick={onLeftClick}>◀ 카운터++</button>
            <button onClick={props.resetData}>카운터 0</button>
            <button onClick={onRightClick}>카운터++ ▶</button>
        </div>
    );
};

//세번째 자식 요소.
//부모로부터 데이터를 받아(props) 단순히 출력만
const ThirdChild = (props) => {
    console.log(`자식3${props.data}`);
    return(
        <div className="third">
            <p>자식3 컴포넌트</p>
            <p>(카운터:{props.data})</p>
        </div>
    );
};

//부모 요소.
//세 자식 요소가 사용할, state 변수들은 여기서 생성, 관리.
//두 변수 초기화를 위한 함수 resetData.
function PassingCount() {
    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);
    const resetData = () => {setLeftCount(0); setRightCount(0);}

    return(
        <div className="parent">
            부모컴포넌트
            <br />
            (왼쪽카운트: {leftCount}, 오른쪽카운트:{rightCount})
            <div className="layout">
                <FirstChild data={leftCount}    />
                <SecondChild setLeft={setLeftCount}
                    setRight={setRightCount}
                    resetData={resetData}   />
                <ThirdChild data={rightCount}   />
            </div>
        </div>
    );
};

export default PassingCount;