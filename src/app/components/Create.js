import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

const Create = (props) => {

    // eslint-disable-next-line
    let [postId, setPostId] = useState(Math.max.apply(Math, props.posts.map(function (o) { return o["id"]; })) + 1);
    let [postTitle, setPostTitle] = useState('');
    let [postSlug, setPostSlug] = useState('');
    let [postBody, setPostBody] = useState('');

    let authorId = props.auth.getUserDetails().id;

    function submitForm() {
        const post = {
            id: postId,
            title: postTitle,
            slug: postSlug,
            body: postBody,
            date: new Date().toDateString(),
            authorId: authorId,
            likes: []
        }

        props.createPost(post);
        //console.log('Sent for creation', post);
        props.history.push('/home');
    }

    return (
        <div className="container" style={styles.container}>
            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <input name="title" placeholder="Enter title" className="card-title"
                        value={postTitle} className="form-control"
                        onChange={e => setPostTitle(e.target.value)}
                    /><br />
                    <p className="card-text">
                        <input name="slug" placeholder="Enter Slug" className="card-text" className="form-control"
                            value={postSlug}
                            onChange={e => setPostSlug(e.target.value)}
                        />
                    </p>

                </div>

                <div className="card-body">
                    <p className="card-title">
                        <textarea rows="4" cols="50" name="body" placeholder="Enter Body" className="card-text" className="form-control"
                            value={postBody} onChange={e => setPostBody(e.target.value)}
                        >

                        </textarea>
                    </p>
                    <p className="card-text">{new Date().toDateString()}</p>
                </div>
            </div>

            <div style={styles.buttonContainer}>
                <div style={styles.buttonGroup}>
                    <button className="btn btn-primary" style={styles.button}
                        onClick={() => submitForm()}
                    >Create</button>

                </div>
            </div>

        </div>
    );
};

const styles = {
    container: {
        padding: '4%',

        alignSelf: 'center'
    },
    buttonContainer: {
        padding: 5,
        flex: 1,
        flexDirection: "row"
    },
    buttonGroup: {
        width: '100%',
        padding: 2,
    },
    button: {
        width: '100%',

    }
}
function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts,
    };
}

export default connect(mapStateToProps, { createPost })(Create);