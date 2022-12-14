import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
    function postMatches(post, string) {
      const{ title, description} = post;
        if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
          return post;         
          }        
          //return true if any of the fields you want to check against include the text strings have an .includes() method//      
        }          

const filteredPosts = posts.filter(post => postMatches(post, searchTerm));     
const postsToDisplay = searchTerm.length ? filteredPosts : posts;                

return (         
  <div className='outerDiv'>
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();             
          }}>
            <input
              type ='text'
              placeholder = 'Search'
              onChange = {(event) => setSearchTerm(event.target.value)}
            ></input>
                <button type ='Search'>Search</button>
      </form>
    </div>   
    <div>  
      {
        postsToDisplay.map((post) => {
          const {description, location, price, title, _id, isAuthor } = post;
          return (
            <div key={_id} id='postBox'>
              <h3><p>{title}</p></h3>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Location: {location}</p>
              {
                isAuthor ? (
                  <button id="btn">
                    <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                  </button>
                ) : (
                  <button id="btn">
                    <Link to={`/posts/${_id}`}>View</Link>
                  </button>
                )
              }
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Posts;