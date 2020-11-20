import React from 'react';

const DetailCard = (props) => {
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={props.image}
          alt={props.title}
          className="img-thumbnail  animate__animated animate__bounceInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{props.title}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Artists:</strong>{' '}
            {props.artist.map((artist) => artist.name).join(', ')}
          </li>
          <li className="list-group-item">
            <strong>Release date:</strong> {props.releaseDate}
          </li>
          <li className="list-group-item">
            <strong>Total trackse:</strong> {props.totalTracks}
          </li>
        </ul>

        <h5>Listeng</h5>
        <p>Spotify</p>
      </div>
    </div>
  );
};

export default DetailCard;
