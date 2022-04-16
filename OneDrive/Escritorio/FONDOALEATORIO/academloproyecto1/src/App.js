import './App.css';
import { useState } from 'react';
import Quotes from './Quotes.json'
import LogoTwitter from './logo/png-transparent-computer-icons-logo-twitter-miscellaneous-blue-logo-thumbnail.png' 
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Buttons'


function App() {

  let quoteRandom = Math.floor(Math.random() * Object.keys(Quotes.quotes).length)

	
  const [quotes, setQuote] = useState(Quotes.quotes[quoteRandom])


  

  

  function changeQuotes(){
    let quoteRandom = Math.floor(Math.random() * Object.keys(Quotes.quotes).length)
    setQuote(Quotes.quotes[quoteRandom])
 
  }

  return (
    <div className="App">
      <header className={`appointment${Quotes}`}>
      <div className='container-appointment'>
      <QuoteBox  text={quotes} />

      <div className='container-button'>
      <Button  btnColor={Quotes} another={changeQuotes} />
			
     </div>
       <div className='container-logo'>
          <a href="https://twitter.com/" target="BLACK"> 
            <img src={LogoTwitter} alt="logo de red social " /> 
          </a>
      </div>
    </div>
  </header>
 </div>
  
 );
}

export default App;
