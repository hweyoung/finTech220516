//컴포넌트와 프롭스 
//프롭스를 통한 데이터 전달 
const Welcome = ({username,age})=>{
    console.log(username,age);
    return (<h2>안녕하세요 {username}님 나이는 {age}세 입니다.</h2>);
}
export default Welcome;