import Post from './Post';
import classes from './PostList.module.css'
function PostList() {
    return (
        <ul className={classes.posts}>
            <li><Post author="Maximilian" body="react" /></li>
            <li><Post author="Manuel" body="checkout" /></li>
        </ul>
    );
}
export default PostList;