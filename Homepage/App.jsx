import React from "react";
import './App.css'
import Homepage from "./Homepage";
import Learn from "./Learn";
import Blog from "./Blog"
import Bookmarks from "./Bookmarks"
import UI_KIT from "./UI_KIT"
import LAIN_NYA from "./LAIN_NYA"

import { Switch,Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";

 const App = () => {
  return (
    <>
    <Switch>
    
     <Route exact path= "/" component={Homepage} />
      <Route exact path= "/learn" component={Learn} />
      <Route exact path= "/blog" component={Blog} />
      <Route exact path= "/bookmarks" component={Bookmarks} />
      <Route exact path= "/ui kit" component={UI_KIT} />
      <Route exact path= "/lain nya" component={LAIN_NYA} />
      <Redirect to="/" />
      
   </Switch>  
     </>
  );
 };

export default App;
