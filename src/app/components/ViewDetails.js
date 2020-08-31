import React from 'react';
import { connect } from 'react-redux';
import { likePost, editPost, deletePost } from '../redux/actions/postActions';

let post = {}
const ViewDetails = props => {
    //console.log('Props are ', props);
    post = props.location.state.post
    let currentUser = props.auth.getUserDetails();
    const handleDeletion = () => {
        props.deletePost(post.id);
        props.history.push('/home');
    }


    return (
        <div className="container" style={styles.container}>
            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h3 className="card-title">
                        {post.title}</h3>
                    <p className="card-text">{post.slug}</p>

                </div>

                <div className="card-body">
                    <p className="card-title">
                        {post.body}</p>
                    <p className="card-text">{post.date}</p>
                </div>
            </div>
            <button className="btn btn-block btn-primary"><i className="fa fa-thumbs-up">Like</i> </button>


            {(currentUser.id === post.authorId) ?
                <div style={styles.buttonContainer}>
                    <div style={styles.buttonGroup}>
                        <button className="btn btn-secondary" style={styles.button}>Edit</button>

                        <button className="btn btn-danger" style={styles.button}
                            onClick={() => handleDeletion()}
                        >Delete</button>
                    </div>
                </div>
                :
                <div>
                </div>
            }

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