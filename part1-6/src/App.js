import { useState } from "react";

const FeedbackButton = ({ text, val, valSet }) => <button onClick={()=>valSet(val + 1)}>{text}</button>

const Feedback = (props) => {
  console.log ("the props:", props)
  const { goodval, neutralval, badval} = props.states
  return (
    <>
      <h1>Give Feedback</h1>
      <FeedbackButton text = "Good" val = {goodval.good} valSet={goodval.setGood} />
      <FeedbackButton text = "Neutral" val = {neutralval.neutral} valSet={neutralval.setNeutral} />
      <FeedbackButton text = "Bad" val = {badval.bad} valSet={badval.setBad} />
    </>
  )
}

const Tabulate = ({ text, val, post}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{val}</td>
      <td>{post}</td>
    </tr>
  )
}
const Statistics = ({ states }) =>{
  
  const {
    goodval:{good}, 
    neutralval:{neutral}, 
    badval:{bad}
  } = states
    
  console.log("the statistics states is:", states)
  //console.log("the statistics goodval is:", goodval)
  console.log("the statistics good is:", good)
  
  if ((good + bad + neutral) === 0){
    return (
      <>
        <h1>Statistics</h1>
        <h2>No Feedback Given</h2>
      </>
    )
  } else {
    return(
      <>
        <h1>Statistics</h1>
        <table>
          <Tabulate text = "good" val = {good}/>
          <Tabulate text = "neutral" val = {neutral}/>
          <Tabulate text = "bad" val = {bad}/>
          <Tabulate text = "all" val = {(good + bad + neutral)}/>
          <Tabulate text = "average" val = {(good - bad) / 2}/>
          <Tabulate text = "positive" val = {( good + neutral) / 2} post = "%"/>
        </table>
      </>
    )
  }
}

const Renderer = ({states}) =>{
  console.log ("renderer states", states)

  return(
    <>
      <Feedback states = { states }/>
      <Statistics states = { states }/>
    </>
  )
}

const Anecdote = (props) => {

  const arr = Array(props.anecdotes.length).fill(0)
  const [vote, setVote] = useState(arr)

  console.log ("01 vote first", vote)
  console.log (props, "anecdote")

  const {
    anecdotes,
    selecter:{selected, setSelected}
  } = props
  
  console.log ("anecdote",anecdotes)
  console.log ("01 anecdote", selected)
  
  const anecdoteClick = () => {
    //if (selected === (anecdotes.length - 1)) {setSelected(0)} 
    //else {setSelected(selected+1)}
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log("01 result:", selected)
  }

  const voteSetter = () => {
    const copy = [...vote]
    copy[selected]++
    setVote(copy)
  }

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>This Anecdote got: {vote[selected]} votes</p>
      <button onClick={voteSetter}>Vote</button>
      <button onClick={anecdoteClick}>Next anecdote</button>
      <h2>Anecdote by most vote</h2>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
    </>
  )
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  console.log("anecdote lenght", anecdotes.length)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const goodval = {good, setGood}
  const neutralval = {neutral, setNeutral}
  const badval = {bad, setBad}

  const states = {goodval, neutralval, badval}
  console.log ("the goodval is", goodval)
  return (
    <div>
      <Renderer states = {states}/>
      <Anecdote anecdotes = {anecdotes} selecter = {{selected, setSelected}} />
      
    </div>
  )
}

export default App
