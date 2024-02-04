import Post from './Post';
import classes from './PostList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal'

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost
                    changeBodyFunc={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={classes.posts}>
                <li><Post author={enteredAuthor} body={enteredBody} /></li>
                <li><Post author="Manuel" body="checkout" /></li>
            </ul>

        </>
    );
}
export default PostList;