import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {


    return (
        /*this is declarative code of adding an event listener in the text box
        docuemnt.querySelector('textarea').addEventListener('change',function()) aur neeche jo onChange krke likha hai wo declartive code hai*/

        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.changeBodyFunc} />
                {/* onChange is a prop joki use hota h event listening ke lie aur ye camel case mein likha hota hai */}
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange} />
            </p>
        </form>
    );
}

export default NewPost;