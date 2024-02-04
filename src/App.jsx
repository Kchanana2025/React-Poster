import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

//Post naam ka function import kr lia hmnne ./components/Post se
function App() {
  const [modalIsVisible, setModalISVisible] = useState(false);
  function hideModalHandler() {
    setModalISVisible(false);
  }
  function showModalHandler() {
    setModalISVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible}
          onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}
//ek rule hota hai ki ki there should be a single element jisne andr chahe jitne bhi sibling element ho jo jsx code return kr rhe ho
//in sabhi posts ka reply alag alag aara hai means ki though hmne same component function likha hua hai bahot baar lekin react usko utni hi baar execute kr rha hai.ek hi answer save krke baar baar display nai kr rha wo 
//custom components ho ya default elements <Post></Post> or</Post> jo mrzi likhol
export default App;
