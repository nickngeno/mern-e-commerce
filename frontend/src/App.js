import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/productDetails" component={ProductScreen} />
      </Switch>
    </Router>
  );
}

export default App;
