import React from 'react';
// Components
import ConnectRoom from './components/ConnectRoom';

export default function App(props) {
  // Подключение к socket по клику

  return (
    <div className="App">
      <ConnectRoom />
    </div>
  );
}

