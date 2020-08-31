import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> Login </Link>
                        </li>
                        <li>
                            <Link to='/profile'>Register</Link>
                        </li>
                        {isAuthenticated() && (
                            <li>
                                <Link to='/home'>Home</Link>
                            </li>
                        )}
                        {isAuthenticated() && (
                            <li>
                                <Link to='/create'>Create</Link>
                            </li>
                        )}

                        <li>
                            <button onClick={isAuthenticated() ? logout : login} >
                                {isAuthenticated() ? "Log Out" : "Log In"}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;