import React, { useState } from 'react';
import { connect } from 'react-redux';
import { likePost, editPost, deletePost } from '../redux/actions/postActions';
import { unstable_batchedUpdates } from 'react-dom';

let post = {}
const ViewDetails = props => {
    //console.log('Props are ', props);
    post = props.location.state.post
    let local = post;
    let user = props.auth.getUserDetails()

    let canEdit = (user.id === local.authorId) ? true : false;

    let [postTitle, setPostTitle] = useState(local.title);
    let [postSlug, setPostSlug] = useState(local.slug);
    let [postBody, setPostBody] = useState(local.body);

    let [likes, setLikes] = useState(local.likes.length);
    const [likelist, setLikeList] = useState(local.likes);

    const updateForm = () => {

    }

    const deletion = () => {
        props.deletePost(local.id);
        props.history.push('/home');
    }

    function toggleLike() {

        let localList = likelist

        if (likelist.includes(user["id"])) {
            localList = likelist.filter((id) => {
                return id !== user["id"]
            })
            //console.log('fter removing localList is ', localList)

            setLikeList(localList)
            setLikes(likes - 1)
        } else {

            localList = [...likelist, user["id"]]
            setLikeList(localList)
            //console.log('after  adding localList is ', localList)
            setLikes(likes + 1)
        }
        // console.log('after ', likelist)
        props.likePost(local.id, localList);
    }

    return (
        <>

            <div className="container" style={styles.container}>
                <div className="card">
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <input name="title" placeholder="Enter title" className="card-title"
                            value={postTitle} className="form-control"
                            onChange={e => setPostTitle(e.target.value)}
                            disabled={!canEdit}
                        /><br />
                        <p className="card-text">
                            <input name="slug" placeholder="Enter Slug" className="card-text" className="form-control"
                                value={postSlug}
                                onChange={e => setPostSlug(e.target.value)}
                                disabled={!canEdit}
                            />
                        </p>

                    </div>

                    <div className="card-body">
                        <p className="card-title">
                            <textarea rows="4" cols="50" name="body" placeholder="Enter Body" className="card-text" className="form-control"
                                value={postBody} onChange={e => setPostBody(e.target.value)}
                                disabled={!canEdit}
                            >

                            </textarea>
                        </p>
                        <p className="card-text">{new Date().toDateString()}</p>
                    </div>
                </div>

                <br />
                <div className="container">
                    <button className="btn btn-primary"
                        onClick={() => toggleLike()}
                    >Like {likes}</button>
                </div>
                <br />
                <div style={styles.buttonContainer}>
                    <div style={styles.buttonGroup}>
                        <button className="btn btn-primary" style={styles.button}
                            onClick={() => updateForm()}
                        >Update</button>

                        <button className="btn btn-danger" style={styles.button}
                            onClick={() => deletion()}
                        >Delete</button>

                    </div>
                </div>

            </div>
        </>
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
        width: '50%',

    }
}

function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts.filter((p) => {
            if (p.id === post.id)
                return true;
        }),
    };
}

export default connect(mapStateToProps, { editPost, deletePost, likePost })(ViewDetails);