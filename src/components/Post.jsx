// components ki file ka NamedNodeMap,unko import krna and unko as html use krna isnn sabhi mein component ka first letter capital hona compulsary hai
//small letter se shuru shuru hone wale elements in html are default elements like div/span/p.isliye capital letter se shuru krna compulsary hota hai custom components ko.
import { Link } from "react-router-dom";
import classes from "./Post.module.css";
function Post(props) {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  //50 50chances hai koi bhi name aane ka
  return (
    <Link to={`/posts/${props.id}`}>
      <div className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </div>
    </Link>
  );
}
export default Post;
