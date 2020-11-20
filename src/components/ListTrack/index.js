import React from 'react';
import { FlashCard } from '../Cards';
import { useResize } from '../../hooks/useResize';

export const ListTrack = ({ albums }) => {
  const { width } = useResize();

  return (
    <div className="card-columns justify-content-center">
      {Object.keys(albums).length > 0 &&
        albums.items.map((item) => (
          <FlashCard
            key={item.id}
            type={item.album_type}
            title={item.name}
            image={width < 1000 ? item.images[1].url : item.images[0].url}
            artists={item.artists[0].name}
            id={item.id}
          />
        ))}
    </div>
  );
};
