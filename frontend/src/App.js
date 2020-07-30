import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./components/screens/Home"
import Single from "./components/screens/Single"
import Category from "./components/screens/Category"


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/single">
    <Single/>
    </Route>
    <Route path="/category">
    <Category/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
