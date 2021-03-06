import './App.css';
import Header from './components/Header'
import { Component } from 'react';
import apiKey from './config';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
// import Potter from './components/Topics/Potter';
// import Marvel from './components/Topics/Marvel';
// import StarWars from './components/Topics/StarWars';
// import The100 from './components/Topics/The100';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={(props) => <Home apiKey={apiKey} {...props} />} />
              <Route path="/harry%20potter" render={(props) => <Home apiKey={apiKey} {...props} />} />
              <Route path="/star%20wars" render={(props) => <Home apiKey={apiKey} {...props} />} />
              <Route path="/marvel%20heroes" render={(props) => <Home apiKey={apiKey} {...props} />} />
              <Route path="/:search" render={(props) => <Home apiKey={apiKey} {...props} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
