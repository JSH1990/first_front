import { useState } from "react";

const EventPractice = () => {
    const [message, setMessage] = useState('안녕하세요');
    const changeMsg = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text"
            placeholder="아무거나 입력하세요"
            onChange={changeMsg}
            value={message}/>

            <h2>입력받은 메세지 : {message}</h2>
        </div>
    );
}

export default EventPractice;