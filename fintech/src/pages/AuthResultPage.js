import React, { useEffect, useState } from 'react'
import AppBar from '../components/common/AppBar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

const AuthResultPage = () => {
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setAccessToken] = useState('토큰이 없습니다.')
  const [userSeqNo, setUserSeqNo] = useState('사용자 번호가 없습니다.') 

  
  useEffect(() => {
    handleGetAccessToeknClick(); 
 },[]);


  const handleGetAccessToeknClick = () => {
    const sendData = {
        code: code,
        client_id:"640d5b24-f3e8-4959-892b-2da7289a263e",
        client_secret:"3601a298-ae18-4ba2-bdb3-f63b2dfde313",
        redirect_uri:"http://localhost:3000/authResult",
        grant_type:"authorization_code"
    }
    // ****** 본인 client Id 와 Secret Value 로 변경 바랍니다. ******

    const encodedData = queryString.stringify(sendData);
    const option = {
        method : "POST",
        url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
        header: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        data: encodedData
    }

    axios(option).then(({data}) => {
        console.log(data)
        if(data.rsp_code === "O0001"){
            alert("인증코드가 만료되었습니다. 인증을 다시 진행해 주세요");
        }
        else {
            setAccessToken(data.access_token);
            setUserSeqNo(data.user_seq_no);
            localStorage.setItem("accessToken",data.access_token);
            localStorage.setItem("userSeqNo",data.user_seq_no);
        } 
    })
  }

  return (
    <>
        <AppBar title={"인증결과"}></AppBar>
        <p>인증코드 : {code}</p>
        <button onClick={handleGetAccessToeknClick}> 인증 요청 </button>
        <p>accessToken : {accessToken}</p>
        <p>userSeqNo : {userSeqNo}</p>
    </>
  )
}

export default AuthResultPage