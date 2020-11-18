import React from 'react';
import { FlashCard } from './components/FlashCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import data from './data/example';

const App = () => {
  console.log(data, 'see');
  return (
    <div>
      <Header />
      <h1>App start</h1>
      <div className="card-columns">
        {data.map((data) => (
          <FlashCard
            title={data.title}
            image={data.img}
            id={data.id}
            describe={data.detail}
            album={data.album}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
