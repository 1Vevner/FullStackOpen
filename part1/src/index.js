import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Rend from './rend'
import Comp from './compob'
import Fac from './fac'

let counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
ReactDOM.createRoot(document.getElementById('root_two')).render(<Rend counter = {counter}/>)
ReactDOM.createRoot(document.getElementById('root_three')).render(<Comp />)
