// components ki file ka NamedNodeMap,unko import krna and unko as html use krna isnn sabhi mein component ka first letter capital hona compulsary hai
//small letter se shuru shuru hone wale elements in html are default elements like div/span/p.isliye capital letter se shuru krna compulsary hota hai custom components ko.
//const names = ['Maximilian', 'Manuel'];
import classes from './Post.module.css'
function Post(props) {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    //50 50chances hai koi bhi name aane ka
    return (
        <div className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
    );
}
export default Post;