import axios, { AxiosError } from 'axios'
import { useState, useEffect } from 'react';
import './App.css';

import divider from './assets/images/pattern-divider-desktop.svg'
import dividerMobile from './assets/images/pattern-divider-mobile.svg'
import dice from './assets/images/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const generateAdvice = async() => {
    const data = axios.get("https://api.adviceslip.com/advice");
    data.then(newAdvice => {
      setAdvice(newAdvice.data.slip.advice);
      setAdviceId(newAdvice.data.slip.id);
    }).catch((error: AxiosError) => {
      if (error.response) {
        alert("Status: " + error.response.status);
      } else if (error.request) {
        alert(error.request);
      } else {
        alert('Error: '+ error.message);
      }
    })
  }

  useEffect(() => {
    generateAdvice();
  }, [])

  return (
    <section>
      <label htmlFor="advice">Advice #{ adviceId }</label>
      <h1 id="advice">"{ advice }"</h1>
      <img id='dividerDesktop' src={ divider } alt="Divider Desktop"></img>
      <img id='dividerMobile' src={ dividerMobile } alt="Divider Mobile"></img>
      <button type="button" onClick={ generateAdvice }>
        <img src={ dice } alt="Dice"></img>
      </button>
    </section>
  )
}

export default App;
