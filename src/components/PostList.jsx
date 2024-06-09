//jis component mein change hona hota hai usme useState ka use krte hai aur jo wo set wala function hota hai jiski vjah se changes render hone hote hai usko hm uss component mein bhj dete hai jisme event handler hota hai
import classes from './PostList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal'
import Post from './Post'

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        //here we are sending put request to our server
        // fetch('http://localhost:8080/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(postData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // there is a rule if u update a state and that state is dependent on previous state value
        //we should pass a function to setPosts which will be automatically be called by react
        //whenever you will call state change function(setPosts here)
        setPosts((existingPost) => [postData, ...existingPost]);


    }
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting} onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {/* isko: false bhi likh skte thee dono cases mein kuch bhi render nai hota */}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (<Post key={post.body} author={post.author} body={post.body} />))}
                    {/* we are mapping each post element inkto jsx element so that we can pass it to out post component */}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }} >
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!!</p>
                </div>
            )}
        </>

    );
}
export default PostList;