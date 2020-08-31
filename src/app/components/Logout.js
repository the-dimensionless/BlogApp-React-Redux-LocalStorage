import React from 'react';

const Logout = (props) => {
    console.log('Here')
    alert('Logging out')
    props.auth.logout();
    props.history.push('/');

    return (
        <div>

        </div>
    );
};

export default Logout;