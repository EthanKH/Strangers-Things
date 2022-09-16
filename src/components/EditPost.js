import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost, deletePost } from '../api';

const EditPost = ({ posts, token, fetchPosts, navigate }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
    fetchPosts();
    navigate("/posts");
  }
  
  
  return (
    <form onSubmit={ (ev) => {
      ev.preventDefault();
      editPost();
      
    }}>
      <input
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
      <p></p>
      <input 
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />
      <p></p>
      <input 
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />
      <p></p>
      <input 
        type='text'
        placeholder={price}
        onChange={(ev) => setNewPrice(ev.target.value)}
      />
      <p></p>
      <h4>Check the box below if everything looks good!</h4>
      <input 
        type='checkbox'
        checked={newWillDeliver}
        onChange={(ev) => setNewWillDeliver(ev.target.checked)}
      />
      <p></p>
      <button type='submit'>Edit Post</button>
          <button type="submit" onClick={() =>{
          deletePost(token,postID);
        }}>
          Delete
        </button>
          
    </form>
  )
}

export default EditPost;