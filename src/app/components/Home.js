import React from 'react';

import PostsList from './PostsList';

const Home = (props) => {
    return (
        <div>
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">BlogSite App</h1>
                        <p className="lead">This is a modified Home page that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>

            </div>
            <PostsList />
        </div>
    );
};

export default Home;