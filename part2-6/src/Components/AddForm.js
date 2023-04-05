import { useState } from "react";
import ChangeHandler from "./MiniTools";
import ServerService from "./ServerService";

const source = "AddForm"
const AddName = ({nameObject, numberObject}) =>{
    const {name, changeName}  = nameObject
    const {number, changeNumber} = numberObject
    console.log ("05 objects", name)
    return(
        <>
            <ChangeHandler text="Name" nameArg={name} changeArg={changeName} source={source} />
            <ChangeHandler text="Number" nameArg={number} changeArg={changeNumber} source={source}/>
        </>
    )
}

const AddForm = ({personObject, notification}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const {persons, changePerson} = personObject
    const nameObject  = {name: newName, changeName: setNewName}
    const numberObject = {number: newNumber, changeNumber:setNewNumber}

    const addName = (event) =>{
        event.preventDefault()
        const newID = persons.length + 1
        const newObject = {
            name : newName,
            number : newNumber,
            id: newID
        }
        console.log ("inside add name")

        //alert when name already exists
        /* if persons.includes(newObject.name) then alert else concat*/
        console.log("01 newObject", newObject)
        console.log("01 name is new?", persons.map(names => names.name).includes(newName))
        let isWhiteSpace = newName.replaceAll(" ","") === ""
        let isExistent = persons.map(names => names.name.replaceAll(" ","")).includes(newName.replaceAll(" ",""))
        console.log ("isWhiteSpace?", isWhiteSpace)
        console.log ("isExistent?", isExistent)
        const findIdByName = (name) => {
            const person = persons.find(p => p.name === name);
            return person ? person.id : null;          
        } 

        if(isWhiteSpace){
            alert ("No White Space Allowed")
            console.log ("No White Space Allowed")
        }else if (isExistent){
            ServerService.update(findIdByName(newName), newObject)
            .then(personData => {
                changePerson (persons.map(
                    person => person.id !== newID 
                    ? person
                    : personData
                ))
                notification(1, "Updated Successfully")
            })
            .catch(error =>{
                notification(0, "Already exists")
            })
        } else {
            ServerService.create(newObject)
            .then(personData => {
                changePerson (persons.concat(personData))
                notification(0, "Added Successfully")
                console.log ("addform 02 added successfully")
            })
            .catch(error =>{
                notification(1, "Adding Failed")
            })
        }
        
    }

    return(
        <form onSubmit={addName}>
            <h2>Add New</h2>
            <AddName nameObject = {nameObject} numberObject = {numberObject}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddForm;