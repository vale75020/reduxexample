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

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts); // connecting action to component
