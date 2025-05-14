import React, { useState } from "react";
const Map3 = () => {
    const [names, setNames] = useState([
        {id: 1, text: "html 연습"},
        {id: 2, text: "css복습"},
        {id: 3, text: "자바스크립트이해"},
        {id: 4, text: "리액트프로젝트"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1); //nextId 값에 1을 더해준다
        setNames(nextNames);
        setInputText(''); // inputText를 비운다.
    };

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};
export default Map3;