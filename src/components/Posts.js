import { Button,TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  //   function postMatches(post, string) {
  //     const{ title, description} = post;
  //       if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
  //         return post;         
  //         }        
  //         //return true if any of the fields you want to check against include the text strings have an .includes() method//      
  //       }          

  //       const filteredPosts = posts.filter(post => postMatches(post, searchTerm));     
  //       const postsToDisplay = searchTerm.length ? filteredPosts : posts;                

  //       return (         
  //         <div className='outerDiv' id='outer div element'>
  //           <div className='searchedBar'>
  //             <form onSubmit={(event) => {
  //               event.preventDefault();             
  //                 }}>
  //                   <input
  //                     type ='text'
  //                     placeholder = 'Search'
  //                     onChange = {(event) => setSearchTerm(event.target.value)}
  //                   ></input>
  //                     <Button type ='Search'>Search</Button>
  //               </form>
  //           </div>   

  
  return (
    <div id='outer div element'>
    {
      posts.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          <div key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            {
              isAuthor ? (
                <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              ) : (
                <Link to={`/posts/${_id}`}>View</Link>
              )
            }
          </div>
        )
      })
    }
  </div>
  )
}

export default Posts;