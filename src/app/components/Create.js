import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

const Create = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.addPostForm}>
                <h3 style={styles.header}>Create New Post</h3>

                <input style={styles.textInput} placeholder="Enter Title" onChangeText={(text) => setPostTitle(text)}
                />

                <input style={styles.textInput} placeholder="Enter Slug" onChangeText={(text) => setPostSlug(text)}
                />

                <input style={styles.textBody} placeholder="Enter Body" onChangeText={(text) => setPostBody(text)}
                />

                <button style={styles.button} onPress={() => submitForm()}>
                    <p style={styles.buttonText}>Create</p>
                </button>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
    },
    addPostForm: {
        alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    textBody: {
        alignSelf: 'stretch',
        height: 80,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#f8f8f8'
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'

    }
});

function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts,
    };
}

export default connect(mapStateToProps, { createPost })(Create);