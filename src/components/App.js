import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
let [visibile, setVisible] = useState(false)

  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={()=> setVisible(true)}>
        Click
      </button>
      {
        visibile && 
        <p id="para" className="show">
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
        </p>
      }
    </div>
  );
}

export default App
