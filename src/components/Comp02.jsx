import React from "react";
import Employee from "./Employee";

const Comp02 = () => {
  const employees = [
    { no: '202301', name: '1번홍길동', dept: '분신1팀' },
    { no: '202302', name: '2번홍길동', dept: '분신2팀' },
    { no: '202303', name: '3번홍길동', dept: '분신3팀' },
    { no: '202304', name: '4번홍길동', dept: '분신4팀' },
    { no: '202305', name: '5번홍길동', dept: '분신5팀' }
  ];

  return (
    <div>
      <h1>배열 출력</h1>
      {employees.map(emp => {
        return (<Employee key={emp.no} emp={emp} />)
      })}
    </div>
  );

};

export default Comp02;