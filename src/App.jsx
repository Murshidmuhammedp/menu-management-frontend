
import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons/Buttons'
import Category from './components/category/Category'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'

import { HashLoader } from 'react-spinners'

function App() {
const [data,setData]=useState("")
console.log(data,"data kitnilla")

  return (
    <div>
      <Navbar />
      <Menu />
      <Buttons  setData={setData}/>
      <Category  data={data}/>
      <Footer />
    </div>
  )
}

export default App
