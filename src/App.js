import React from "react";
import "App.css";
import noimg from './noimage.png'; 


const App = () => (
    <div>
        <h1 className="wow">Hello React!!!</h1>
        <img src={noimg} alt="" />
    </div>
);


export default App;