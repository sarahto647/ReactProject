//////////////////////////////////////////WORKING TRY///////////////////////////////////////////
import React from "react";

// We use Route in order to define the different routes of our application
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import SimpleMap from "./components/SimpleMap";
const App = () => {
  return (
    
<Router>
    <div>
       {/* <SimpleMap/> */}
      <Navbar/>
     <Switch>
     {/* <Route path="/" exact component={Home}/> */}
     
    
    <Route exact path="/SimpleMap" component={SimpleMap}/>
    </Switch>
    </div>

</Router>
    

  );
};

export default App;

