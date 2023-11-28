import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <Header />
      <aside>
        <Subreddits />
      </aside>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
