import logo from './logo.svg';
import './App.css';
import Addbutton from './components/addButton';
import Deletebutton from './components/deleteButton';
import Input from './components/input';
import Listofusers from './components/listOfUsers';
import Log from './components/log';
import {useState} from "react";

const App = () =>  {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const Name = (firstnAME) => {
    console.log("name", firstnAME);
    setName(firstnAME)
  }

  const addName = () => {
    console.log("ss");
    setNames([...names, name]);
    setName('')
  }
  const deleteName = (selectName) => {
    setNames([...names].filter(name => name !== selectName))
  }
  return (
    <div className="App">
      <Input namefn={Name} name={name} />
      <Addbutton namesfn={addName}/>
      <Deletebutton />
      <Listofusers users={names} deleteUserfn={deleteName} />
      <Log />
    </div>
  );
}

export default App;
