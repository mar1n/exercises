import './App.css';
import Addbutton from './components/addButton';
import Input from './components/input';
import Listofusers from './components/listOfUsers';
import Log from './components/log';
import {useState} from "react";


const App = () =>  {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [message, setMessage] =useState('');

  const Name = (firstnAME) => {
    setName(firstnAME)
  }

  const mediator = {
    message: (actionName) => setMessage(actionName),
    addName: function() {
      console.log(mediator, this);
      mediator.message("Add message");
      setNames([...names, name]);
      setName('')
    },
    deleteName: (selectName) => {
      mediator.message("Delete Name");
      setNames([...names].filter(name => name !== selectName))
    }
  }
  return (
    <div className="App">
      <Input namefn={Name} name={name} />
      <Addbutton namesfn={mediator.addName}/>
      <Listofusers users={names} deleteUserfn={mediator.deleteName} />
      <Log message={message}/>
    </div>
  );
}

export default App;
