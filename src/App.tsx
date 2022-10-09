import React from 'react';
import logo from './logo.svg';
// import './App.css';
const Pc= React.lazy(()=> import("./pc"));
const Mobile=React.lazy(()=> import("./mobile"));
function App() {
  return (
    <div className="App">
    {(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  )?<Mobile></Mobile>:<Pc></Pc>}
    </div>
  ); 
}

export default App;
