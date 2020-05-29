import axios from 'axios';
import Search from './Search';
import Travels from "./Travels";
import pre from "../images/pre.jpg";
import { connect } from 'react-redux';
import plane from "../images/plane.jpg";
import React, { Component } from 'react';
import airport from '../images/airport.jpg';
import deep_blue from "../images/deep_blue.jpg";
import sky from "../images/Sky_with_Sun_Background.jpg"
import plane_take_off from "../images/plane_take_off.jpg";


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            travels: props.travels,
            users: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/users")
        .then(users => {
            console.log("initial users ==> ", users.data)
            if (users.data.length)
            {
                console.log('OK!!!')
                this.setState({
                    users: users.data
                })
            }
            console.log('NOT OK ')
        })
        .catch(error => console.log('getUsers Error : ', error));
    }

    render(){
        console.log("travels in store ==> ", this.state.travels)
        console.log("current users in store ==> ", this.state.users)
        return (    
                <div className="home">
                    <div className="section white center">
                        <Search />
                    </div>
                    <div className="parallax-container">
                        <div className="parallax"><img src={sky}/></div>
                    </div>
                    <div className="section white center">
                        <div className="row container">
                            <h5 className="center">Derniers voyages</h5>
                        <Travels travelsList = {this.props.travels} usersList={this.props.users}/>
                        </div>
                    </div>
                    <div className="parallax-container parallax-text">
                            <p className="white-text text-darken-3 lighten-3">Envoyez rapidement et simplement votre colis.</p>
                            <p className="white-text right text-darken-3 lighten-3">Trouvez votre transporteur.</p>
                        <h4 className="white-text center">Trankilow</h4>
                        <p className="white-text text-darken-3 lighten-3">Vos Kilos ont de la valeur.</p>
                        <p className="white-text right text-darken-3 lighten-3">Renforcez la communauté de voyageurs.</p>

                        <div className="parallax"><img src={airport}/>
                        </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
        travels: state.travels
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);