import { useState } from 'react'
import Buttons from './components/buttons/Buttons'
import Category from './components/category/Category'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'

function App() {
const [data,setData]=useState("")

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

export default App;
