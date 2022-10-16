import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

//npm install -g create-react-app




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
        <a href="https://docs.google.com/presentation/d/1th9fYC44LOn_pMgmqzTZWwnYTgrhA5P0BlQZFAHm1F4/edit#slide=id.p" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} id="document"/>
        </a>
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
        <p id="support">Supported Blockchains</p>
        <div id="body-main">
        <div id = "top">
          <div id="top-left">
            <img id="solana" src="https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg" alt="solana"></img>
          </div>
          <div id="top-right">
            <img id="polygon" src="https://lh3.googleusercontent.com/d9l7LiRLTIuW5ETaPKKlQZn-enik5Nf57ZSR8fGixRzeKnes_2fXz-ribaSDOzQHkF80i5AjnJwh-0sKKVfbwj-pz1xieQjxZyIN85YVF6ez2NAgYJNepIQyQYMQJjIw6oYFgW0-kQ=w2400" alt="polygon"></img>
          </div>
        </div>
        <div id = "bottom">
          <div id="bottom-left">
            <img id="ethereum" src="https://avatars.githubusercontent.com/u/6250754?s=200&v=4" alt="ethereum"></img>
          </div>
          <div id="bottom-right">
            <img id="bnb" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png" alt="bnb"></img>
          </div>
        </div>
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
          <p id="support2">Submit an Incident</p>
          <form>
            <fieldset id="first">
              <input id="wallet" type="text" placeholder="wallet address"></input>
              <input id="city" type="text" placeholder="city"></input>
              <input id="state" type="text" placeholder="state"></input>
              <input id="zipcode" type="text" placeholder="zipcode"></input>
              <input id="country" type="text" placeholder="country"></input>
            </fieldset>
            <fieldset id="second">
              <input id="incidentType" type="text" placeholder="Incident Type"></input>
              <input id="incidentDescription" type="text" placeholder="Incident Description"></input>
              <label id="TOI">Time of Incident:
              <input id="time" type="time"></input>
              </label>
              <label id="DOI">Date of Incident:
              <input id="date" type="date"></input>
              </label>
            </fieldset>
            <fieldset id="third">
              <input id="firstName" type="text" placeholder="first name"></input>
              <input id="lastName" type="text" placeholder="last name"></input>
              <input id="gender" type="text" placeholder="gender"></input>
              <label id="birth"> Date of Birth:             
                <input id="DOB" type="date" placeholder="DOB"></input>
              </label>
              <input id="num" type="num" placeholder="phone#"></input>
              <input id="race" type="text" placeholder="race"></input>
            </fieldset>
            <button type="button" onClick={onClick}>Submit</button>
          </form>
        </div>
      </div>
      <p>wallet:{storage.wallet}</p>
      <p>state:{storage.stat}</p>
      <p>city:{storage.city}</p>
      <p>country:{storage.country}</p>
      <p>incidentType:{storage.incidentType}</p>
      <p>incidentDescription:{storage.incidentDescription}</p>

    </>


  );
}

function App() {

  const [storage, setStorage] = useState({
    wallet: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    incidentType: "",
    incidentDescription: "",
    time: "",
    date: "",
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    phone: "",
    race: ""
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
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        gender: document.getElementById("gender").value,
        DOB: document.getElementById("DOB").value,
        phone: document.getElementById("num").value,
        race: document.getElementById("race").value
      }
    })
    
    //test(storage);
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

export default App;

