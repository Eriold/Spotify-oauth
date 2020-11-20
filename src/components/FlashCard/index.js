import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const FlashCard = ({ id, title, image, artists }) => {
  return (
    <div className="card ms-3">
      <div className="row no-gutters">
        <img src={image} alt={title} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 20 ? `${title.substring(0, 15)}...` : title}
          </h5>
          <div className="row no-gutters">
            <div className="col-md-7">
              <p>{artists}</p>
            </div>
            <div className="col-md-4">
              <Link to={`./detail/${id}`}>
                <Button active>detail...</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
