import React from 'react'
import { Keduit } from './Keduit';

export const Comp03 = () => {
  const keduit = [
    {no:1, name:'김궁서', lcx:1, lcy:1},
    {no:2, name:'이희태', lcx:4, lcy:1},
    {no:3, name:'김유진', lcx:5, lcy:1},
    {no:4, name:'구상모', lcx:1, lcy:2},
    {no:5, name:'김재훈', lcx:3, lcy:2},
    {no:6, name:'이한재2', lcx:7, lcy:4},
    {no:7, name:'박기웅', lcx:5, lcy:2},
    {no:8, name:'안광현', lcx:6, lcy:2},
    {no:9, name:'임대훈', lcx:1, lcy:3},
    {no:10, name:'노태종', lcx:2, lcy:3},
    {no:11, name:'김영란', lcx:3, lcy:3},
    {no:12, name:'김진', lcx:5, lcy:4},
    {no:13, name:'박상현', lcx:6, lcy:4},
    {no:14, name:'이한재1', lcx:4, lcy:2}
  ];
  const maintop = -90;
  return (
    <div style={{position:'relative', height:'360px'}}>
      {keduit.map(
        p => <Keduit key={'ke'+p.no} style={{textAlign: 'center', border: '1px solid black', padding:'10px', margin:'20px',width:'100px', position:'absolute', left:p.lcx>5?150*p.lcx+80+'px':p.lcx>2?150*p.lcx-20+'px':150*p.lcx-120+'px', top:90*p.lcy+maintop+'px'}} keduit={p}/>
      )}
      {/* <h1>한정교 우리반</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>발사이즈</th>
          </tr>
        </thead>
        <tbody>
          {keduit.map(
            p => <Keduit key={'ke'+p.no} keduit={p} />
          )}
        </tbody>
      </table> */}
    </div>
  )
}

export default Comp03;