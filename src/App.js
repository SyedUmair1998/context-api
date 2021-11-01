import React, { useState } from 'react';
import User from './User';

export const myContext = React.createContext();

const App = () => {
  const [name,setName] = useState('Syed Umair Hussain');
  return (
    <myContext.Provider value = {name}>
    <User />
    </myContext.Provider>
  )
}

export default App
