import './App.css';
import M from 'materialize-css';
import getWeb3 from "./getWeb3";
import Home from './components/Home';
import { connect } from 'react-redux';
import Login from './components/Login';
import React, { Component } from 'react';
import SignIn from './components/Signin';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Footer from './components/Footer';
import Voyages from './components/Voyages';
import SideMenu from './components/SideMenu';
import CreateUser from './components/CreateUser';
import UserDetails from './components/UserDetails';
import CreateTravel from './components/CreateTravel';
import TravelDetails from './components/TravelDetails';
import SimpleStorageContract from "./contracts/SimpleStorage.json"
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

 class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      web3: null,
      accounts: null,
      contract: null,
      // isConnected: true
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

      console.log("Ethereum Account => ", accounts)

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
        <div>

          <Router>
            <Navbar accounts = {this.state.accounts}/>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/signup' component = {SignUp}/>
                <Route exact path = '/signin' component = {SignIn}/>
                <Route path = '/travels' component = {Voyages}/>
                <Route path = '/trajet/:id' component = {TravelDetails}/>
                <Route path = '/newTravel' component = {CreateTravel}/>
                <Route path = '/newUser' component = {CreateUser}/>
                <Route path = '/menu' component = {SideMenu}/>
                <Route path = '/profile/:userId' component = {UserDetails}/>
              </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default connect()(App);
