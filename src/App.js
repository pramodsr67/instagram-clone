import React, { useState,useEffect } from 'react';
import './App.css';

import {db} from './firebase'
import Post from './Post';

function App() {

  const[posts,setPosts] = useState([]);
  // USEEFFECT runs a piece of code based on a specific condition
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
      //everytime a new post is added ,this code is fired
      setPosts(snapshot.docs.map(doc=>({
        id: doc.id,
        post: doc.data() 
    })))
  })
  },[])
    return (
      <div className="app">        
       <div className="app__header">
         <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage"/>
       </div>

       {
       posts.map(({id,post})=>(
         <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
  }

       

       
      </div>
    );
  }


export default App;
