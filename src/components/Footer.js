import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className = "page-footer indigo footer center">
            <p style={styles.copyright}>
                Copyright {'\u00A9'} 2020 {'\u2625'}
            </p>
        </footer>
    )
}

const styles = {
    copyright: {
        fontSize:14
    }
}

export default Footer;