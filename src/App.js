import { useState } from 'react';
import { ethers } from 'hardhat';

import Lock from '../src/artifacts/contracts/Lock.sol/Lock.json';

import logo from './logo.svg';
import './App.css';


function App() {
  // const greeting =

  const lockAddress = '0xc97c731c92eb1cb694f6143ac6433c2f35bbbfdde89f8d197a86b0a47778673e';
  const [lock, setLock] = useState()

async function fetchLock() {
  if (!typeof window.ethereum !== 'undefined'){
    const provider = new ethers.provider.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(lockAddress, Lock.abi, provider)
    try {
      // console.log(contract)
      console.log('data:', data)
    } catch (err) {
      console.log("Error", err)
    }
  }
}

async function setLocktest() {

} 

async function requestAcc() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
