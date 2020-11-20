import React from 'react';
import { Button } from '../../components/Button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { DetailCard } from '../../components/Cards';

const Container = styled.div`
  padding: 50px;
`;

export const Detail = (props) => {
  const { searchId } = props.match.params;
  const { items } = useSelector((state) => state.albums);
  const item = items.find((album) => album.id === searchId);

  console.log(
    'album:',
    items.find((album) => album.id === searchId)
  );

  const handleReturn = () => {
    props.history.goBack();
  };
  return (
    <Container>
      <h1>Detail of Album</h1>
      <hr />
      <DetailCard
        image={item.images[0].url}
        title={item.name}
        artist={item.artists}
        releaseDate={item.release_date}
        totalTracks={item.total_tracks}
      />
      <Button onClick={handleReturn}>Return</Button>
    </Container>
  );
};
