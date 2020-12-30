import Searchbar from './Searchbar';
import Navigation from './Navigation';

function Header(props) {
  return (
    <>
      <h1>Flickr Search</h1>
      <h4>Search Flickr Tags Below</h4>
      <Searchbar handleSearch={props.handleSearch} />
      <Navigation />
    </>
  )
}

export default Header;


