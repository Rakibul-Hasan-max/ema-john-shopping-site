import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route data="/">
            <Shop></Shop>
          </Route>
          <Route data="/shop">
            <Shop></Shop>
          </Route>
          <Route data="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route data="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route data="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
