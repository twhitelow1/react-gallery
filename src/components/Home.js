import Results from './Results';
import axios from 'axios';
import { Component } from 'react';
import Header from './Header';

class Home extends Component {
  state = {
    photos: [],
    search: 'harry potter, star wars, marvel'
  }
  handleSearch = (search) => {
    this.setState({ search });
    this.props.history.push(search);
    this.searchRequest(search);

  }

  searchRequest(search) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response);
        this.setState({ photos: response.data.photos['photo'] })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&tags=${this.state.search}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response);
        this.setState({ photos: response.data.photos['photo'] })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <>
        <Header handleSearch={this.handleSearch} />
        <Results photos={this.state.photos} />
      </>
    )
  }
}

export default Home;


