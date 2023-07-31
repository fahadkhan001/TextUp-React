
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//wether dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type :type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
   const toggleMode= ()=>{
      if(mode === 'light')
      {
        setMode("dark")
        document.body.style.backgroundColor = '#070637'
        showAlert("Dark Mode has been enabled","success")
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode has been enabled","success")
      }
   }
   const togglered=()=>{
    if(mode === 'light'){
      setMode("red")
      document.body.style.backgroundColor = "red"
      showAlert("Red mode had been enabled","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has enabled","success")
    }
   }
  return (
    <>
    {/*<BrowserRouter>*/}
    {/* <Navbar title="TextUp" about_title="About_us"  mode ={mode} toggleMode={toggleMode}/ */}
    <Navbar title = "textup"  mode={mode} togglered={togglered}  toggleMode={toggleMode}></Navbar> 
    <Alert alert={alert}/>
    <div className='container'>
    {/*<Routes>
    <Route exact path="/about"element={<About/>}></Route>
    <Route exact path="/"element={<Textform showAlert={showAlert} heading='Enter the text to Analyse Below' mode={mode} />}></Route>
  </Routes>*/}

  <Textform showAlert={showAlert} heading='Enter the text to Analyse Below' mode={mode} />
    </div>
    {/*</BrowserRouter>*/}
    </>
  );
}


export default App;
