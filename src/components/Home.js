import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 id="title">Welcome to Stranger's Things!</h1>
      <p></p>
      
      <button>
        <Link to='/posts/create-post'>Add a Post</Link>
      </button>
    </div>
  )
}

export default Home;