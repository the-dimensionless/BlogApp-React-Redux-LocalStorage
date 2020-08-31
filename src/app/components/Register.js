import React, { useRef, useState } from 'react';
import Header from './Header';
import loginImg from '../../login.svg';

const Register = (props) => {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const containerRef = useRef();

    const handleSubmit = (e) => {
        console.log("values ")

        const user = {
            id: props.auth.getCurrentLength() + 1,
            name: name,
            email: email,
            password: password
        }
        console.log('New user- >', user)
        props.auth.signup(user);
        props.history.push('/', null);
    }
    return (
        <div>
            <Header />
            <hr></hr>

            <div style={styles.baseContainer} ref={containerRef}>
                <div className="content">
                    <div style={styles.imageContainer}>
                        <img style={styles.img} src={loginImg} alt="student on computer" />
                    </div>
                    <div className="container">
                        <form>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" className="form-control" placeholder="username"
                                    value={name} onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" className="form-control" placeholder="email"
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="password"
                                    value={password} onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                        </form>


                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                        Register
                    </button>
                </div>
            </div>

        </div>

    );
};

const styles = {
    baseContainer: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },

    header: {
        fontSize: 24,
        fontFamily: "Open Sans"
    },

    img: {
        height: 180
    }
}

export default Register;