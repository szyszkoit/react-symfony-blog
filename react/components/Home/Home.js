// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Row} from 'react-bootstrap';
import Car from './Car';

class Home extends Component {
  render(){
      //console.log(this.props);
      // Get data from route props
      const posts = this.props.posts;
      //Map through cars and return linked cars
      const postNode = posts.map((post) => {
          return (
              <Link
                  to={"/post/"+post.id}
                  className="list-group-item"
                  key={post.id}>
                  {post.name}
              </Link>
          )
      });
      return (
          <Row>
              <h1>Posts page</h1>
              <div className="list-group">
                  {postNode}
              </div>
          </Row>
      );
  }
}

export default Home;