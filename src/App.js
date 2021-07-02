import { BrowserRouter, Route, Switch } from  "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/Navbar";
import Publication from "./components/Publication";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={Post} path='/post' />
      <Route component={Project} path='/project' />
      <Route component={Publication} path='/publication' />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
