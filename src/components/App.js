import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
let [visibile, setVisible] = useState(false)

 
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      {
        visibile ?
        <p id="para" className="show">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p> : <p id="para" className="hide"></p>
      }
      <button id="click" onClick={()=> setVisible(true)}>
        Click
      </button>
    </div>
  );
}

export default App
