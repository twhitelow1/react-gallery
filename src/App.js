import './App.css';
import Header from './components/Header'
import { Component } from 'react';
import apiKey from './config';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" component={Home} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
