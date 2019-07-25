import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // to connect a component with the store
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  
  // state = {
  //   posts: []
  // };

  // componentWillMount() {
  //   //console.log("mounted")
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     //.then(data => console.log(data));
  //     .then(data => this.setState({ posts: data }));
  // }

  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost) // unshift is like push but item will be placed at the beginning
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h2 style={{color:"#61DAFB", textAlign:"center"}}>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,  // posts comes from reducers => index.js
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts); // connecting action to component
