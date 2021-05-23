import {Component} from 'react';
import Navbar from "./compenents/Navbar";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./compenents/Home"
import Contact from "./compenents/Contact"
import About from "./compenents/About";
import Post from "./compenents/Post";

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        
      <div className="App">
      <Navbar />
      <Switch> 
      <Route path="/poketimes" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/:post_id" component={Post} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
 
}
export default App;
