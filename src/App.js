import React, {useEffect, useState} from "react";
import './App.css'
import Navbar from "./Components/Navbar";
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
import Header from "./Components/Header";
import Product from "./Components/Product";
import About from "./Components/About";


function App() {
  const [loading,setLoading]=useState()
  const override=css`
  display: block;
    border-color: red;
    margin-top: 20%;
  `
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000);
  }, [])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color="#3d2514" Loading={loading} css={override} size={40}/>
            :
            <>
              >
              <Navbar/>
              <Header/>
              <Product/>
              <About/>
            </>

      }



    </div>
  );
}
export default App;
