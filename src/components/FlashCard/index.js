import React from 'react';

// Waiting estructure data API.
export const FlashCard = ({ id, title, image, describe, album }) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} alt={title} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{describe}</p>
            <p className="card-text">
              Album: <small className="text-muted"> {album}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
