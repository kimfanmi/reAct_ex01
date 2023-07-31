import React from 'react'

const Student = () => {
  const style = {
    color: 'red',
    background : 'yellow',
    fontSize: '30px'
  }
  const name = '홍길동';
  const nickname = '김돈홍';
  const nickname2= null;
  return (
    <div>
      <h1 style={style}>첫번째 컴포넌트 {name}</h1>
      {name === '홍길동' ? <h2>{name}입니다</h2> : <h2>{name}이 아닙니다</h2> }
      {nickname && <h2>홍길동의 별명은 {nickname}입니다</h2> }
      {nickname2 ?? <h2>두번째 별명은 없습니다.</h2> }
    </div>
  );
}

export default Student;