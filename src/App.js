import React from "react";
import Auth from './components/Auth'
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import Subject from "./components/Subject";
import Paper from "./components/Paper";
import Evaluation from "./components/Evaluation";
class App extends React.Component {

  render() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Auth} />
      <Route path="/select-subject" component={Subject} />
      <Route path="/paper/:subject" component={Paper}/>
      <Route path="/evaluate/:marks" component={Evaluation}/>      
    </div>
  </Router>
  )
  }
}



export default App;