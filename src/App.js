import React, { Component } from "react";
import NewsList from "./components/newsList/";
//import api from "./dataStore/stubAPI";
import * as api from './api';
import _ from "lodash";
import "./App.css";
//import { Link } from "react-router-dom";
import Form from "./components/newsForm"

export default class App extends Component {

  state = {posts: [{}], sort:"votes" };

  componentDidMount() {
      api.getAll().then(resp => {
          this.setState({
              posts: resp.posts, sort: "votes"
          });
      }).catch(console.error);
  };


 incrementUpvote = (id) => {
  api.upvote(id).then(resp=> {
         var upvotedPost = _.find(this.state.posts, post=>post.id === id);
         upvotedPost.upvotes++;  
         this.setState({})
       }) ;
};

  addNewsItem = (title, link) => {
    api.add(title,link)
    .then(resp => {
                  const newPost = {"id":resp.id,"title":title,"link":link,"upvotes":0,"comments":[]};
                  this.setState({posts: this.state.posts.concat([newPost])});
    })
  };

  sort = () => {
    if(this.state.sort === "votes")      {
      this.setState({sort:"year"});
    }else{
      this.setState({sort:"votes"})
    }
  };
  


 render() {
  let posts;
  if(this.state.sort === "votes"){
   posts = _.sortBy(this.state.posts, post => post.upvotes);
  }else{
    posts = _.sortBy(this.state.posts, post => post.year);
  }

  return (
      <div className="container">
        <div className="colo-md-8 offset-0">
          <p></p>
        <button className="btn btn-dark buttnWidth" onClick={this.sort}>Sort year/upvotes</button>
        <p></p>
        </div>
          <div className="row">
              <div className="col-md-9 col-md-offset-1">
                  <NewsList posts={posts} 
                  upvoteHandler={this.incrementUpvote} />
              </div>
          </div>
          <div className="row">
              <div className="col-md-9 col-md-offset-1">
                  <Form handleAdd={ this.addNewsItem } />
              </div>
          </div>
      </div>
  );
}

}
