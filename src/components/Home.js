import Results from './Results';
import axios from 'axios';
import { Component } from 'react';
import Header from './Header';

class Home extends Component {
  state = {
    photos: [],
    search: this.props.match.params.search
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
    if (this.state.search === undefined) {
      this.searchRequest('harry potter, star wars, marvel');
    } else {
      this.searchRequest(this.state.search);
    }
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


