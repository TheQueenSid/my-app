
import { useState } from 'react';
import './App.css';
import { Add } from './Component/Add/Add';
import { Div } from './Component/Div/Div';


function App() {

  const[inputValue,setInputValue]=useState(0);
  const[inputValue1,setInputValue1]=useState(0);

  const printValue =()=>{
    console.log("FunctionPrintValue",inputValue)
    
  }
 

  return (
    <div>
      <h1>Calculation</h1>
      <div>
        <input value={inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
          console.log("InputValue",inputValue)
        }}
        type='Number'
        placeholder='Enter a Number'>
      </input>

      <div>
        <input value={inputValue1}
        onChange={(e)=>{
          setInputValue1(e.target.value)
          console.log("InputValue",inputValue1)
        }}
        type='Number'
        placeholder='Enter a Number'>
      </input>
          
          <button onClick={printValue}>Click Me</button>
          <p> Value:{inputValue}</p>

          <button onClick={printValue}>Click Me</button>
          <p> Value:{inputValue1}</p>

        
      </div>
      </div>

<Add a={inputValue} b={inputValue1}></Add>
{/*<Sub a="5" b="3"></Sub>
<Multi a="5" b="3"></Multi>
  <Div a="5" b="3"></Div>*/}
    </div>
  
   
  );
}

export default App;
