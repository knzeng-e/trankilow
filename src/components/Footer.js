import React from 'react';
import { NavLink } from 'react-router-dom';
import airport from '../images/airport.jpg';

const Footer = () => {
    return (
        // <footer className = "page-footer indigo footer center">
        <footer className = "page-footer footer">
            <div className="description">
                <h6 className="">Envoyez rapidement et simplement votre colis.</h6>
                <h6 className="right">Trouvez votre transporteur.</h6>
                <p className="" style={styles.copyright}>
                    Copyright Maat {'\u00A9'} 2021 {'\u2625'}
                </p>
                <div className = "myBlock">
                    <h6> Vos Kilos ont de la valeur.</h6>
                    <h6 className="right">Renforcez la communauté de voyageurs.</h6>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    copyright: {
        fontSize: 14
    }
}

export default Footer;