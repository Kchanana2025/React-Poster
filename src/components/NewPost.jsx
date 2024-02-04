import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        // to prevent http request to serverbecause hmare pass koi server hi nai h
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();//hides the Modal
    }

    return (
        /*this is declarative code of adding an event listener in the text box
        docuemnt.querySelector('textarea').addEventListener('change',function()) aur neeche jo onChange krke likha hai wo declartive code hai*/

        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
                {/* onChange is a prop joki use hota h event listening ke lie aur ye camel case mein likha hota hai */}
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>

            </p>
        </form>
    );
}

export default NewPost;