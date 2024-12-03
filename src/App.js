import React, { StrictMode, useState } from 'react';
import ReactDOMClient from 'react-dom/client';
import {AxisAnimation} from './Components/AxisAnimation';

import { Refresh }from './Components/Refresh'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <AxisAnimation key={count} />
    </StrictMode>
  );
}

export default App
