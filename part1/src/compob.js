import { useState } from "react"

const History =({allClicks}) =>{
    console.log(allClicks.length)
    if (allClicks.length === 0){
        return(
            <div>Click the buttons to populate the list</div>
        )
    } else {
        return (
            <div>{allClicks.join(" ")}</div>
        )
    }
}

const Button = props =>{
    console.log("Button log")
    console.log(props)
    const {handleClick, text} = props
    return (
        <button onClick = {handleClick}>{text}</button>
    )
}

const hello = (who) => () => console.log("hello", who)

const Comp = () =>{
    const [click, setClick] = useState({left:0, right:0})
    const [allClicks, setAllClicks] = useState([])

    const reset = () =>{
        setClick({left:0, right:0})
        setAllClicks ([])
    }

    const clickLeft = () =>{
        const newClick = {
            ...click,
            left: click.left + 1
        }
        setAllClicks (allClicks.concat('L'))
        setClick(newClick)
    }
    
    const clickRight = () =>{
        const newClick = {
            ...click,
            right: click.right + 1
        }
        setAllClicks (allClicks.concat('R'))
        setClick(newClick)
    }


    return(
        <div>
            {click.left}
            <Button handleClick = {clickLeft} text = {"Left"}/>
            <Button handleClick = {reset} text = {"Reset"}/>
            <Button handleClick = {clickRight} text = {"Right"}/>
            {click.right}
            <h1><History allClicks = {allClicks}/></h1>
            <button onClick = {hello('world')}>Button</button>
            <button onClick = {hello('react')}>Button</button>
            <button onClick = {hello('function')}>Button</button>
        </div>
    )
}

export default Comp