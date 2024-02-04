//jis component mein change hona hota hai usme useState ka use krte hai aur jo wo set wala function hota hai jiski vjah se changes render hone hote hai usko hm uss component mein bhj dete hai jisme event handler hota hai
import classes from './PostList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal'

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler() {
        //setPosts([postData, ...posts]);
        //this is not an ideal code 
        // there is a rule if u update a state and that state is dependent on previous state value
        //we should pass a function to setPosts which will be automatically be called by react..see at 2:16
        setPosts((existingPost) => [postData, ...existingPosts]);


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
            <ul className={classes.posts}>
            </ul>

        </>
    );
}
export default PostList;