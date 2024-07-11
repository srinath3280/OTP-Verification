import { useState } from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase/setup.js';

function App() {


  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const conformation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(conformation)
    } catch (error) {
      console.error(error)
    }
  }

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data)
      if(data){
        alert("Phone number verified successfully");
      }
    } catch (error) {
      console.error(error)
      alert("OTP number wrong");
    }
  }

  return (
    <div className="App">
      <h1>OTP Verification</h1>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <button className='btn' onClick={sendOtp}>SEND OTP</button>
      <br />
      <div id='recaptcha'></div>
      <input
        type='text'
        name='otp'
        placeholder='Enter OTP'
        onChange={(e) => setOtp(e.target.value)}
      />
      <br />
      <button className='btn1' onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
}

export default App;
