import './App.css';
import M from 'materialize-css';
import getWeb3 from "./getWeb3";
import Home from './components/Home';
import Login from './components/Login';
import React, { Component } from 'react';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Footer from './components/Footer';
import Voyages from './components/Voyages';
import SideMenu from './components/SideMenu';
import AddTravel from './components/AddTravel';
import UserDetails from './components/UserDetails';
import SimpleStorageContract from "./contracts/SimpleStorage.json"
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

 class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      web3: null,
      accounts: null,
      contract: null
    }
  }

  componentDidMount = async () => {
    const options = {
      responsiveThreshold: 0,
    }
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, options);
    });

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
//       if (window.confirm('Ce site utilise la blockchain ethereum. Pour en tirez pleinement profit, veuillez connecter un portefeuille crypto. A moins que vous souhaitiez télécharger Metamask ?')) 
// {
// window.location.href='https://metamask.io/';
// };
      alert(
        // `Failed to load web3, accounts, or contract. Check console for details.`,
        'Ce site utilise la blockchain ethereum. Pour en tirez pleinement profit, veuillez connecter un portefeuille crypto ou installer un client comme Metamask'
      );
      console.error(error);
    }


  }
   render(){
    return (
      <div className="App">
        <Router>
          <nav className = "indigo">
            <div className="brand-logo center">Trankilow</div>
              <div className="nav-wrapper">
                  <ul id="nav-mobile" className="left hide-on-med-and-down">
                  {/* <ul id="nav-mobile" className="left"> */}
                    <li>
                      <a className="" href="/"> Accueil</a>
                    </li>
                  </ul>
                  <ul className="hide-on-large-only">
                    <li>
                         <SideMenu/>
                    </li>
                  </ul>
                  <Login accounts = {this.state.accounts}/>
              </div>
          </nav>
        {/* <SideMenu /> */}
        
        
  
          <Switch>
              <Route exact path = '/' component = {Home}/>
              <Route exact path = '/signup' component = {SignUp}/>
              <Route exact path = '/signin' component = {SignIn}/>
              <Route path = '/travels' component = {Voyages}/>
              <Route path = '/newTravel' component = {AddTravel}/>
              <Route path = '/menu' component = {SideMenu}/>
              <Route path = '/profile/:userId' component = {UserDetails}/>
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
  
}

export default App;
