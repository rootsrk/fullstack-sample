import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const axios = require('axios');

function App() {
  const [response, setResponse] = useState({})
  const getResponse = () => {
    axios
      .get('/api')
      .then(function (response) {
        // handle success
        setResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
         {response.text}
        </p>
      </header>
    </div>
  );
}

export default App;
