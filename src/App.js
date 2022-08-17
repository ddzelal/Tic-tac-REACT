import './App.css';
import Board from './components/Board';
import { useState } from 'react'

function App() {
  const [xo, setXo] = useState([[null, null, null],
                                [null, null, null],
                                [null, null, null]])


  return (
    <Board xo={xo} setXo={setXo} />
  );
}

export default App;
