import React from "react";
import Employee from "./Employee";

const Comp01 = () => {
  const employee = { no:'202301', name:'홍길동', dept:'마케팅' };
  const employee1 = { no:'202302', name:'박길동', dept:'인사팀' };
  return (
    <div>
      <Employee emp={employee}></Employee>
      <Employee emp={employee1}></Employee>
    </div>
  )
};

export default Comp01;