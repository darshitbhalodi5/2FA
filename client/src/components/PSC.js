import '../styles/psc.css';
import { useEffect, useState } from 'react';
import {hasNumber,hasUpperCase,hasLowerCase,hasSpecialCharacter} from '../helper/utils';
import styles from '../styles/Username.module.css';

function App() {
  const [password, setPassword] = useState("");
  const [strength,setStrength] = useState(0);
  const [progressBarStyles,setProgressBarStyles] = useState({
    width : '0%',
    backgroundColor : 'transparent'
  });
   
  const handlePwdChange = (event) => {
    setPassword(event.target.value);
  }

  useEffect(()=> {
  let totalStrength = 0;
  if(password.length > 3){
    const strengthByLength = Math.min(6,Math.floor(password.length / 3));
    let strengthByCharacterType = 0;

    if(hasNumber.test(password)){
      strengthByCharacterType += 1;
    }
    if(hasUpperCase.test(password)){
      strengthByCharacterType += 1;
    }
    if(hasLowerCase.test(password)){
      strengthByCharacterType += 1;
    }
    if(hasSpecialCharacter.test(password)){
      strengthByCharacterType += 1;
    }
    totalStrength = strengthByLength + strengthByCharacterType;
  }
  else
   totalStrength = 0;

  setStrength(totalStrength);
  setProgressBarStyles({
    backgroundColor : 'red',
    width : `${totalStrength * 10}%`
  })
  if(totalStrength > 8){
    setProgressBarStyles({backgroundColor : 'green', width : `${totalStrength * 10}%`})
  }else if(totalStrength > 6){
    setProgressBarStyles({backgroundColor : 'orange' ,width : `${totalStrength * 10}%`})
  }
  } , [password])
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className={styles.window}>
    <div className="App">
      <h1 className="py-6 text-3xl font-bold" style={{color:'#e16162'}}>Password Strength Checker</h1>
      <input type="text" value={password} onChange={handlePwdChange} placeholder="Enter your password to check strength..."/>
      <div className="progress-container">
        <div className="progress-bar" style={ {...progressBarStyles} }></div>
      </div>
      <p>Strength of your password is <u>{strength}</u> from 10</p>
    </div>
    </div>
    </div>
  );
}

export default App;