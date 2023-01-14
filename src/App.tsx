import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import SunEditorComponent from "./components/SunEditorComponent/index"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SunEditorComponent />
    </div>
  );
}

export default App;
