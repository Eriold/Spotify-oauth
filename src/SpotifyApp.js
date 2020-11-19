import React from 'react';
import { FlashCard } from './components/FlashCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import data from './data/example';

const App = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Search />
      </div>
      <div className="card-columns">
        {data.map((data) => (
          <FlashCard
            title={data.title}
            image={data.img}
            id={data.id}
            describe={data.detail}
            album={data.album}
            key={data.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
