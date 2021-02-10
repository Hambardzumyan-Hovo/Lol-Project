import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Champions from "./components/Champions/Champions";
import Players from "./components/Players/Players";
import { Route, HashRouter } from "react-router-dom";
import ChampShow from "./components/Champions/Champion/ChampionShowcase/ChampShow";
import Cinematic from "./components/Cinematic/Cinematic";

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Navbar />
        <Route exact path='/' render={() => <Cinematic />} />
        <Route path='/champions' render={() => <Champions />} />
        <Route path='/players' render={() => <Players />} />
        <Route path='/champion' render={() => <ChampShow />} />
      </div>
    </HashRouter>
  );
}

export default App;
