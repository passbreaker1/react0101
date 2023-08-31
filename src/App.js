import {useState} from 'react';
import React from 'react';
import './App.css';

function App() {
  
  const [hedd, setHedd] =useState([
    {
      id:1, memo: 'react를 배워봅시다',
    }
  ])


  const [txt, setTxt] = useState('')

  const mouse = (e) => {
    setTxt(e.target.value)
  }
  const musebtn = () => {
     // e.preventDefault();
  const newobj = {
    id:hedd.length+1,
    memo:txt,
  }
  setHedd([...hedd, newobj])
  setTxt('');
  }

  return (
    <div >
      <div className="icon">
        
        <input type="text" 
        value={txt}
        onChange={mouse}
        />
        
        <button onClick={musebtn}>추가하기</button>
       
      </div>
      <h2 className="ha">Todo List</h2>
      <div className="whh">
       
            {hedd.map((item) => (
             
              <div key={item.id}>
               <div className = "box">{item.memo}</div>
              </div>
              
            ))}
       
      </div>
      
        
    </div>
  );
}

export default App;
