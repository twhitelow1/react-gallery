import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <>
        <li class="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </>
    );
  }
}

export default NotFound;