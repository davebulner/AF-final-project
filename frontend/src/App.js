import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./App.css"
import Showcase from "./components/Showcase"

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Showcase />

      </div>
      <Footer />
    </>
  )
}

export default App;
