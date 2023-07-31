
import { useState } from 'react';
import './App.css';
import Comp01 from './components/Comp01';
import Comp02 from './components/Comp02';
import { Comp03 } from './components/Comp03';
import Hello from './components/Hello';
import Student from './components/Student';
import Wrapper from './components/Wrapper';
import Count1 from './components/Count1';
import Count from './components/Count';


function Header(props) {
  return (
    <div>
      <h1>
        <a href='/' onClick={
          function(e){
            e.preventDefault();
            props.onChangeMode(e);
          }
        }>{props.title}</a>
      </h1>
    </div>
  );
}

function Nav(props) {
  const lis = [
    // <li><a href="">body</a></li>,
    // <li><a href="">body</a></li>,
    // <li><a href="">body</a></li>
  ];
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<span key={'s'+i}><li><a id={t.id} href={'read' + t.title} onClick={event => {
      event.preventDefault();
      props.onChangeMode(event);
    }}>{t.body}</a></li></span>);
  }
  return (
    <div>
      <ol>
        {lis}
      </ol>
    </div>
  );
}

function Article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.body}
    </div>
  );
}


function App() {
  const [ mode, setMode ] = useState('WELCOME');
  const [ id, setId ] = useState(null);
  const name = 'MyReacTTTTTTTTTTT';
  const style = {
    color:'red',
    fontSize:'20px',
    backgroundColor: 'black',
  }
  const topics = [
    { id:1, title:'html', body:'html is ..'},
    { id:2, title:'css', body:'css is ..'},
    { id:3, title:'js', body:'js is ..'}
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content =  <Article title='Welcome' body='Hello, Web!!'></Article>;
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content =  <Article title={title} body={body}></Article>;

  }

  const [number, setNumber] = useState(1);

  return (
    <div>
      <Header title='REACT_PROPS' onChangeMode={function(e){
        console.log(mode);
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={function(e){
        console.log(mode);
        console.log(e.target.id);
        setMode("READ");
        setId(e.target.id/1);
      }}></Nav>
      {/* <Article title='Welcome' body='Hello, Web'></Article> */}
      {content}
      {/* <div style={style}>{name}</div>
      <div className="gray-box">graybox</div>
      <Student/>
      <Comp01/> 
      <Comp02/> */}
      {/* <Comp03/>
      <Wrapper>
        <Hello color='green' name='React' favoriteNumber={123}/>
        <Hello color='red ' favoriteNumber={33}/>        
        <Hello color='pink' name='백백' favoriteNumber={2}/>
      </Wrapper> */}


      <Count1/>

      <Count number={number} onCN={function(e){
        if (e.target.className == 'pn') {
          setNumber(number+1)
        }
        if (e.target.className == 'mn') {
          setNumber(number-1)
        }
      }}/>

    </div>
  );
}

export default App;
