import React from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {
  const newPost = {
    title: 'New Post Title',
    description: 'Description',
    price: 'Price',
    location: 'Location',
    willDeliver: false
  }
  
  async function addPost() {
    const results = await createPost(token, newPost)
    fetchPosts();
    navigate(`/posts`)
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    
    <button onClick={() => addPost()}>Create a New Post</button>
  )
}

export default CreatePost;