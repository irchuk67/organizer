import React from "react";
import Landing from "./Pages/Landing/Landing";
import Header from "./Components/Header/Header";
import Authorisation from "./Pages/Authorisation/Authorisation";
import Registration from "./Pages/Registration/Registration";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Landing/>
        <Authorisation/>
        <Registration/>
    </div>
  );
}

export default App;
