import React, { Component } from 'react';
import Photo from './Photo';

class Results extends Component {
  // console.log(`results: ${props.results.photos['photo'][0].id}`);
  render() {
    const p = this.props.photos;

    const photoList = p.map((photo, index) =>
      <li>
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
      </li>
    );

    console.log(`data: ${p}`);

    return (
      <>
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {photoList}
          </ul>
        </div>
      </>
    );
  }
}

export default Results;


