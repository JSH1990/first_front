import {useState} from "react";

const DropDownComponent = () => {
    const [selectValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <h2>드롭다운 예제</h2>
            <select value={selectValue} onChange={handleChange}>
                <option value="" disabled>
                    과일을 선택하세요
                </option>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
            </select>
            <p>선택된 과일 : {selectValue}</p>
        </>
    );
};

export default DropDownComponent;