import React, { useEffect, useState } from 'react'
import './Home.js'

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    const storedBlogPosts = localStorage.getItem('blogPosts')
    if (storedBlogPosts) {
      setBlogPosts(JSON.parse(storedBlogPosts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
  }, [blogPosts])

  const addBlogPost = (blogPost) => {
    setBlogPosts([...blogPosts, blogPost])
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlogPost = { title, description, date, author }
    addBlogPost(newBlogPost)
    setTitle('')
    setDescription('')
    setDate('')
    setAuthor('')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1 className="my-4">Blog Posts</h1>
          {blogPosts.map((post, index) => (
            <div className="card mb-4" key={index}>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.description}</p>
                <p className="card-text"><small className="text-muted">Posted on {post.date} by {post.author}</small></p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h1 className="my-4">Add Blog Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Blog Post
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home