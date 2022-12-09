import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="bg-[#101728]">
      <div className='max-w-[1440px] content-center m-auto'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
