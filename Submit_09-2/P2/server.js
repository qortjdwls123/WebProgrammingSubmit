const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { send } = require('process');
const { response } = require('express');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'textbook/build')));
app.use(bodyParser.urlencoded({ extended: false }));

var keyid=3;
var userList=[
    {keyid:1, name:"홍길동", id:"kdhong", passwd:"1111"},
    {keyid:2, name:"박길동", id:"kdpark", passwd:"1111"}
];
var isMember = false;

const mainPage = (req, res) => {
    res.sendFile(path.join(__dirname, 'textbook/build/index.html'));
}

const listUsers = (req, res) => {
    console.log("회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다.")
    res.json(userList);
}

const addUser = (req, res) => {
    const {name, id, passwd} = req.body;
    userList.push({keyid:keyid++, name, id, passwd});
    console.log("회원등록요청을 완료하였으며, 이를 반영한 전체목록입니다.");
    userList.map((user, i) => {
        console.log(user.keyid + "." + user.name + "." + user.passwd);
    })
    return res.send('success');
}

const sendSearchResult = (req, res) => {    //해당 회원이 있는지 여부를 전송
    console.log("해당 회원이 존재하는지 검색합니다.");
    if(isMember) {
        console.log("있습니다.");
        res.send("Member");
    }
    else {
        console.log("없습니다.");
        res.send("NotMember");
    }
}

const searchUser = (req, res) => {  //해당 회원 정보가 있는지 조사
    isMember = false;
    const {id, passwd} = req.body;
    userList.map((user, i) => {
        if(user.id == id && user.passwd == passwd){
            isMember = true;
        }
    });
    return res.send('success');
}

app.get("/", mainPage);
app.get("/users", listUsers);
app.post("/users", addUser);
app.get("/users/search", sendSearchResult);
app.post("/users/search", searchUser);


app.listen(65020, () => {
    console.log("------------------------");
    console.log("(리액트 연동용)웹서버 실행중...");
    console.log("접속주소:http://localhost:65020/");
    console.log("------------------------");
});