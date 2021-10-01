import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route data="/">
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
