import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import web3js from 'web3';
import {reportABI} from './report_abi.js'
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"

function NavTop() {
  return (
    <>
      <div id="top-bar">
        <ul>
          <li id="left-title">Solace</li>
          <div id="right-nav">
            <span>
              <li>About</li>
            </span>
          </div>
        </ul>
      </div>
    </>
  );
}

function Intro() {
  return (
    <>
      <div id="intro">
        <div>
          <p id="headline">Seamless, Instant Reporting. Anywhere, Anytime. </p>
        </div>
        <div>
          <p id="subliminal">Solace is an incident reporting platform, leveraging the speed and immutability of Solana</p>
        </div>
      </div>
    </>
  );
}

function Icons() {
  return (
    <>
      <div id="icons">
        <FontAwesomeIcon icon={faFile} id="document"/>
        <a href="https://github.com/shondle/HackTXProject" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} id="github"/>
        </a>
      </div> 
    </>

  );
}

function BodySection () {
  return (
    <>
      <div id="body-section">
        <div id="body-left">

        </div>
        <div id="body-right">

        </div>  
      </div>
    </>

  );
}

function Form({storage,onClick}) {

  return (
    <>
      <div id="form">
        <div id="info">
          <h2 id="submit-head">Submit an Incident</h2>
          <form>
            <fieldset>
              <input id="wallet" type="text" placeholder="wallet address"></input>
              <input id="city" type="text" placeholder="city"></input>
              <input id="state" type="text" placeholder="state"></input>
              <input id="zipcode" type="text" placeholder="zipcode"></input>
              <input id="country" type="text" placeholder="country"></input>
            </fieldset>
            <fieldset>
              <input id="incidentType" type="text" placeholder="Incident Type"></input>
              <input id="incidentDescription" type="text" placeholder="Incident Description"></input>
              <label>Time of Incident:
              <input id="time" type="time"></input>
              </label>
              <label>Date of Incident:
              <input id="date" type="date"></input>
              </label>
            </fieldset>
            <button type="button" onClick={onClick}></button>
          </form>
        </div>
      </div>
      <p>wallet: {storage.wallet}</p>
    </>


  );
}

function App() {
  
  
  const loadWeb3 = async() => {
     if (window.etherum) {
       window.web3= new Web3(window.ethereum);
       alert("success")
       await window.ethereum.enable();
     } else if (window.web3) {
       window.web3 = new Web3(window.web3.currentProvider);
     } else {
       window.alert("Install Metamask");
     }
  }

   const [account, setAccount] = useState('');

   const loadBlockchain = async () => {
     const web3 = window.web3;
     const account = await web3.eth.getAccounts();
     setAccount(account[0]);

     const networkId = await web3.eth.net.getId();

     const report = new web3.eth.Contract('report_abi.js', 0xd9145CCE52D386f254917e481eB44e9943F39138);
   }

   useEffect(() => {
     loadWeb3();
     loadBlockchain();
   });

  const [storage, setStorage] = useState({
    wallet: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    incidentType: "",
    incidentDescription: "",
    time: "",
    date: ""
  });

  function updateValue() {
    setStorage(prevStorage => {
      return {
        wallet: document.getElementById("wallet").value,
        city: document.getElementById("city").value,
        stat: document.getElementById("state").value,
        zipcode: document.getElementById("zipcode").value,
        country: document.getElementById("country").value,
        incidentType: document.getElementById("incidentType").value,
        incidentDescription: document.getElementById("incidentDescription").value,
        time: document.getElementById("time").value,
        date: document.getElementById("date").value,
      }
    })
    // startApp();
    newInfo(storage.city,storage.state,storage.zipcode,storage.country);
    newClaim(storage.incidentType, storage.incidentDescription, storage.time, storage.date, '', '');
    privInfo('','','','','','');
    newReport();
    document.getElementById("submit-head").innerHTML = getReport(0);
  }

  return (
    <>
      <NavTop />
      <Intro/>  
      <Icons/>
      <BodySection/>
      <Form storage={storage} onClick={updateValue}/>
    </>
    
  );
}


var reports;
function startApp() {
  var reportAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
  reports = new web3js.eth.Contract(reportABI, reportAddress);
}

//submit info
function newInfo(city, state, zipCode, country) {
  return reports.methods.reports(city, state, zipCode, country).send()
}

//submit claim info
function newClaim(eventType,
  eventDescription,
  timeIncident,
  dateIncident,
  timeReport,
  dateReport) {
  return reports.methods._newClaim(eventType, eventDescription, timeIncident, dateIncident, timeReport, dateReport).send();
}

//submit private info
function privInfo(firstName, lastName, gender, DOB, phoneNumber, race) {
  return reports.methods.privInfo(firstName, lastName, gender, DOB, phoneNumber, race).send();
}

//create new report
function newReport() {
  return reports.methods.newReport().send();
}

function getReport(id) {
  return reports.methods.reports(id).send()
}

window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3js !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new web3js(web3js.currentProvider);
  } else {
    // Handle the case where the user doesn't have Metamask installed
    // Probably show them a message prompting them to install Metamask
  }

  // Now you can start your app & access web3 freely:
  startApp()

})


//find the address of who submitted a certain report contract

/*window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    // Handle the case where the user doesn't have Metamask installed
    // Probably show them a message prompting them to install Metamask
  }

  // Now you can start your app & access web3 freely:
  startApp()

})*/


export default App;
