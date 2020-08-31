import * as types from './actionTypes';

export function loadPosts() {
    console.log('called');
    return dispatch => {
        return dispatch({
            type: types.LIST_POSTS,
            posts: posts
        });
    }
};

export function createPost(post) {
    return dispatch => {
        console.log('I have received data', post.title);
        // Mock API Calls/perist changes
        return dispatch({
            type: types.CREATE_POST,
            payload: post
        });
    }
};

export function editPost(post) {
    return dispatch => {
        // Mock API Calls/perist changes
        return dispatch({
            type: types.EDIT_POST,
            payload: post,
        });
    }
};

export function deletePost(postId) {
    return dispatch => {
        // Mock API Calls/perist changes
        return dispatch({
            type: types.DELETE_POST,
            payload: postId
        });
    }
};

export function likePost(postId, likes) {
    return dispatch => {
        // Mock API Calls/persist changes
        return dispatch({
            type: types.LIKE_POSTS,
            postId: postId,
            likes: likes
        })
    }
}


/*
function persistUpdation(post) {
    let localList = []
    loadDummy().then((res) => {
        localList = res
        console.log('updation has ', localList)
    }).catch((err) => console.log('error while persisting update post', err))

    if (localList !== []) {
        localList.forEach((p) => {
            if (p["id"] === post["id"]) {
                p["title"] = post["title"],
                    p["slug"] = post["slug"],
                    p["body"] = post["body"],
                    p["likes"] = post["likes"]
                p["date"] = post["date"]
            }
        })
    }

    setDummy(JSON.stringify(localList));
}

function persistDeletion(postId) {
    let localList = []
    loadDummy().then((res) => {
        localList = res
    }).catch((err) => console.log('error while persisting update post', err))

    localList.filter((p) => {
        return p["id"] !== postId
    })

    setDummy(JSON.stringify(localList));
}

function persistLikes(postId, likes) {
    let localList = []
    loadDummy().then((res) => {
        localList = res
        console.log('persist like fetched ', localList);
    }).catch((err) => console.log('error while persisting update post', err))

    localList.forEach((p) => {
        if (p["id"] === postId) {
            p["likes"] = likes
        }
    })

    setDummy(JSON.stringify(localList));
} */