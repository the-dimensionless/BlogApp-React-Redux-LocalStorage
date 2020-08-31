import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post, history }) => {
    console.log(history);
    return (
        <div style={styles.card}>

            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}</h5>
                    <p className="card-text">{post.slug}</p>
                    <Link to={{
                        pathname: `viewDetails`,
                        state: { post }
                    }} className="btn btn-primary">View more</Link>
                </div>
            </div>

        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

const styles = {
    card: {
        padding: 15,
    },
}

export default Post;