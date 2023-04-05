const Header = props => {
  console.log(props.course)
  return (
    <>  
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({part}) => {
  console.log ("content part:", part)
  return(
    <>
      <Part part = {part[0]}/>
      <Part part = {part[1]}/>
      <Part part = {part[2]}/>
    </>
  )
}

const Part = ({part}) => {
  const {name, exercise} = part
  console.log ("the name is:", name)
  return(
    <>
      <p>
          {name} {exercise}
      </p> 
    </>
  )
}

const Total = (props) => {
  let sum = props.sum[0].exercise + props.sum[1].exercise + props.sum[2].exercise
  console.log('this is the total')
  console.log(sum)
  return (  
    <>
      <p>Number of exercises {sum}</p>  
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part = [
    { 
      name : 'Fundamentals of React',
      exercise : 10
    },
    { 
      name : 'Using props to pass data',
      exercise : 7
    },
    { 
      name : 'State of a component',
      exercise : 14
    }
  ]

  return (
    <div>
      <Header course = {course}  />
      <Content part = {part}/>
      <Total sum = {part}/>    
    </div>
  )
}

export default App