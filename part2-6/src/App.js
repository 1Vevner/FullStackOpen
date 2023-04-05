import { useState, useEffect } from "react";
import AddForm from "./Components/AddForm";
import ChangeHandler from "./Components/MiniTools";
import serverService from "./Components/ServerService";
import RemoveEntry from "./Components/Remover";
import Messages from "./Components/Messages";
import './index.css'

const source = "App.js"
const Filter = ({newFilter, changeFilter}) =>{
  return(
    <div>
      <h2>Phonebook</h2>
      <ChangeHandler text="Filter Show with" nameArg={newFilter} changeArg={changeFilter} source={source}/>
    </div>
  )
}

const SubMapper = ({id, name, personObject}) => {
  console.log("01 subMapper", personObject)
  const remove = () =>{
    RemoveEntry(id,personObject)
  }
  return(
    <li>
      {name.name} {name.number}
      <button onClick={remove}>Delete</button>
    </li>
  )
}

const Map = ({names, personObject}) =>{
  return(
    <div>
      <h2>Numbers</h2>
      <ul>
        {names.map(name => 
            <SubMapper key={name.id} id={name.id} name = {name} personObject={personObject}/>
        )}
      </ul> 
    </div>
  )
}

const App = () => {

  //State to store names
  const [persons, setPersons] = useState([])
  const [typeState, setTypeState] = useState()
  const [message, setMessage] = useState('')

  const SetNotification = (type, text) =>{
    setTypeState(type)
    setMessage(text)
    setTimeout (()=>{
        setMessage(null)
    },3000)
}
  useEffect(() => {
    console.log('effect')
    serverService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
      .catch(error =>{
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const personObject = {persons: persons, changePerson: setPersons}

  //State to store single name that will be stored in the Main state
  const [newFilter, setNewFilter] = useState('')

  const namesToShow = (newFilter === '')
    ? persons 
    : persons.filter(
      person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  console.log ("03 filtering", namesToShow)

  return (
    <div>
      <Filter value = {newFilter} changeFilter = {setNewFilter}/>
      <Messages.Notification type = {typeState} text = {message}/>
      <AddForm personObject={personObject} notification= {SetNotification}/>
      <Map names = {namesToShow} personObject={personObject}/>
    </div>
  )

}

export default App;
