import React from "react"

import SideBar from "./SideBar/Sidebar"
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import "./App.css"
import Home from "./Screens/Home"
import Messages from "./Screens/Messages/Messages"

function App() {


  return (
    <div className="App2">

<BrowserRouter>
<SideBar>

<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/Messages' element={<Messages/>} />
{/* <Route exact path='/signup' element={<Signup/>} /> */}

</Routes>


{/* <div></div> */}

</SideBar>
</BrowserRouter>

    </div>


  )
}

export default App
