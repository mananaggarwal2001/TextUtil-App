import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
import "./App.css"
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState({ color: "light" });
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'warning');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 54 104)';
      document.body.style.color = 'white';
      showAlert('dark mode has been enabled', 'success');

    }
  }

  return (
    <>

      <Navbar title="textUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert message={alert} />
      <div className='container'>

        <TextForm heading="Enter the text to analyze" alert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  )
}




export default App;
