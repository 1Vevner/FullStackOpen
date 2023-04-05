import ServerService from "./ServerService";

const RemoveEntry = (id, personObject) =>{
    console.log("remover.js", id, personObject)
    const {persons, changePerson} = personObject
    const confirmedelete = window.confirm (`are you sure you want to delete id = $(id)?`)
    if (confirmedelete) {
        ServerService.remove(id)
        .then(personData => changePerson (persons.filter(newPersons => newPersons.id !== id)))
        .catch(error=>{
            console.log("remove.js, deletion failed")
            alert("No entry with such ID")
        })
    }
}

export default RemoveEntry