import React, { useEffect } from 'react';
import Post from './Post';

import { loadPosts, editPost, deletePost } from '../redux/actions/postActions';

import { connect } from 'react-redux';

const PostsList = (props) => {
    const posts = props.posts.map(post => {
        return <Post post={post} history={props.history} key={post.id} />
    })

    return (
        <div>
            {posts}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts,
    };
}

export default connect(mapStateToProps, { loadPosts, editPost, deletePost })(PostsList);