import Searchbar from './Searchbar';
import Navigation from './Navigation';

function Header(props) {
  return (
    <>
      <Searchbar handleSearch={props.handleSearch} />
      <Navigation />
    </>
  )
}

export default Header;


