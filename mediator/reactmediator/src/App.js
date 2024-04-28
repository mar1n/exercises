import logo from './logo.svg';
import './App.css';
import Addbutton from './components/addButton';
import Deletebutton from './components/deleteButton';
import Input from './components/input';
import Listofusers from './components/listOfUsers';

import {useState} from "react";

const App = () =>  {
  const [names, setNames] = useState([]);
  return (
    <div className="App">
      <Input />
      <Addbutton />
      <Deletebutton />
      <Listofusers users={['Szymon', 'Dawid']} />
    </div>
  );
}

export default App;
