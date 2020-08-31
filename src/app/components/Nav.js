import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ auth }) => {

    //console.log(auth)

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-light" style={styles.navStyle}>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">

                    </li>
                    {!auth.isAuthenticated() && (
                        <li className="nav-item">
                            <Link to='/' className="nav-link" style={styles.customeColor}> Login </Link>
                        </li>
                    )}

                    {!auth.isAuthenticated() && (
                        <li className="nav-item">
                            <Link to='/register' className="nav-link" style={styles.customeColor}>Register</Link>
                        </li>
                    )}

                    {auth.isAuthenticated() && (
                        <li className="nav-item">
                            <Link to='/home' className="nav-link" style={styles.customeColor}>Home</Link>
                        </li>
                    )}
                    {auth.isAuthenticated() && (
                        <li className="nav-item">
                            <Link to='/create' className="nav-link" style={styles.customeColor}>Create</Link>
                        </li>
                    )}

                    {auth.isAuthenticated() && (
                        <li className="nav-item">
                            <Link to='/logout' className="nav-link" style={styles.customeColor}>Logout</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

const styles = {
    navStyle: {
        backgroundColor: '#41B3A3',
    },
    customeColor: {
        color: 'white'
    }
}

export default Nav;