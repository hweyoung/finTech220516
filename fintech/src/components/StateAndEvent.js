//react snipet사용 rafce
import React from 'react'

let userText = "사용자 입력 내용"

const handleClick = () => {
    alert("test");
}

const handleChange =(event)=>{
    //구조분해
    const {value} = event.target;
    userText = value;
    console.log(userText);
}

const StateAndEvent = () => {
  return (
      <>
        <p>사용자 입력 내용</p>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>데이터 변경</button>
      </>
  )
}

export default StateAndEvent