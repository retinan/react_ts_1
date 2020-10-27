import React from "react";

type GreetingsProps = {
    name: string,
    mark: string,
    // children:React.ReactNode;세
    optional?: string,
    onClick: (name:string) => void,
};

// React.FC 를 사용할때 .. defaultProps를 사용할 수 없다는 이슈가 있음. 현재 20년 10월 19일
// const Greetings: React.FC <GreetingsProps> = ({name, mark}) => (
//         <div>Hello, {name} {mark} </div>
// );


// React.FC를 사용하지 않고 화살표 함수를 사용할때. defaultProps를 사용할 수 있음.
// const Greetings = ({name,mark}:GreetingsProps) => (
//     <div>Hello, {name} {mark} </div>
// );

// 함수 컴포넌트 선언 취향에 따라 화살표 함수 보다는 function으로 사용하는 것을 권장. 최근 컴포넌트 선언에 arrow func -> Function 으로 선언하는 추
function Greetings({name, mark, optional, onClick}:GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            { optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: "!"
};

export default Greetings;