import React, { Component } from "react";
import NewsList from "./components/newsList/";
//import api from "./dataStore/stubAPI";
import * as api from './api';
import _ from "lodash";
import "./App.css";
//import { Link } from "react-router-dom";
import Form from "./components/newsForm"

export default class App extends Component {

  state = {posts: [{}]};

  componentDidMount() {
      api.getAll().then(resp => {
          this.setState({
              posts: resp.posts
          });
      }).catch(console.error);
  };

  /*
  constructor(props){
    super(props)
    this.state = {
      sort: "votes"
    }
  }
 */

 /*
  incrementUpvote = id => {
    api.upvote(id);
    this.setState({});
  };
  */

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
                  const newPost = {"id":resp.id,"title":title,"link":link,"upvotes":0, "comments":[]};
                  this.setState({posts: this.state.posts.concat([newPost])});
    })
  };

  /*
  addNewsItem = (title, year, author, link) => {
    api.add(title, year, author, link);
    this.setState({});
  };
 */

 /*
  removeNewsItem = id => {
    api.removePost(id);
    this.setState({});
  };
*/

/*
  sort = () => {
    if(this.state.sort === "votes")      {
      this.setState({sort:"year"});
    }else{
      this.setState({sort:"votes"})
    }
  };
  */


 render() {
  const posts = _.sortBy(this.state.posts, post =>
      post.upvotes);
  return (
      <div className="container">
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


/*
  render() {
    let posts;
    if(this.state.sort === "votes"){
     posts = _.sortBy(api.getAll(), post => -post.upvotes);
    }else{
      posts = _.sortBy(api.getAll(), post => -post.year);
    }

    return (
      <div className="container-fluid" class="backClr">
        <div className="row">
          <div className="col-md-8 offset-2 ">
          <p></p>
          <button className="btn btn-dark buttnWidth"><Link to={"/addBook"}>Add Book</Link></button>
          </div>
        </div>
        <div className="colo-md-8 offset-2">
          <p></p>
        <button className="btn btn-dark" onClick={this.sort}>Sort year/upvotes</button>
        <p></p>
        </div>
        <div>
          <div className="col-md-8 offset-2">
            <NewsList posts={posts} upvoteHandler={this.incrementUpvote} removeHandler={this.removeNewsItem} />
          </div>
        </div>
      </div>
    );
  }
  */
}
