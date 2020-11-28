import './App.css';
import Header from './components/Header'
import { Component } from 'react';
import apiKey from './config';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Potter from './components/Topics/Potter';
import Marvel from './components/Topics/Marvel';
import StarWars from './components/Topics/StarWars';
import The100 from './components/Topics/The100';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/potter" render={() => <Potter title='Potter' />} />
              <Route path="/marvel" render={() => <Marvel />} />
              <Route path="/starwars" render={() => <StarWars />} />
              <Route path="/the100" render={() => <The100 />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
