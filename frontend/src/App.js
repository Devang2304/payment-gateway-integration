import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const loadRazorpay = (src) =>{
  return new Promise((resolve)=>{
  const script = document.createElement('script')
  script.src= src
  
  script.onload = () =>{
    resolve(true)
  }
  script.onerror = () =>{
    resolve(false)
  }
  document.body.appendChild(script)
  })
}

const __DEV__ = document.domain === 'localhost'

function App() {

  const [name,setName] = useState('Devang')

  const displayRazorpay = async () =>{

    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
      alert('Razoerpay sdk fialed to load!')
      return
    }
    const  options = {
      "key": __DEV__? "rzp_test_Bbqg7B2fi9OCuu" : 'GO_AND_GET_PRODCUTION_KEY', 
      "amount": "50000", 
      "currency": "INR",
      "name": "Donation", 
      "description": "Thank you for nothing please donate us something",
      "image": "http://localhost:1337/logo.svg",
      "order_id": "order_9A33XWu170gUtm", 
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": { 
          name
      }
  }
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={displayRazorpay}
        >
          Donate $5
        </a>
      </header>
    </div>
  )
}

export default App;
