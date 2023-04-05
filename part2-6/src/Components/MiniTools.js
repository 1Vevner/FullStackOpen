
const ChangeHandler = ({text, nameArg, changeArg, source}) =>{
    const handleArg = (event) =>{
        console.log("Mini Handler value", event.target.value)
        changeArg (event.target.value)
    }
    console.log(`[${source}] nameArg`, nameArg)
    return(
        <>
            {text}:
            <input
                value = {nameArg}
                onChange = {handleArg}
            />
        </>
    )
}

export default ChangeHandler;