import React, { Component } from "react";
import NewsList from "./components/newsList/";
import Form from "./components/newsForm/";
import api from "./dataStore/stubAPI";
import _ from "lodash";
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sort: "votes"
    }
  }
 
  incrementUpvote = id => {
    api.upvote(id);
    this.setState({});
  };
  addNewsItem = (title, year, author, link) => {
    api.add(title, year, author, link);
    this.setState({});
  };
  removeNewsItem = id => {
    api.removePost(id);
    this.setState({});
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
     posts = _.sortBy(api.getAll(), post => -post.upvotes);
    }else{
      posts = _.sortBy(api.getAll(), post => -post.year);
    }

    return (
      <div className="container-fluid" class="backClr">
        <div className="row">
          <div className="col-md-8 offset-2 ">
            <Form handleAdd={this.addNewsItem} />
          </div>
        </div>
        <div className="colo-md-8 offset-2">
          <p></p>
        <button className="btn btn-primary" onClick={this.sort}>Sort year/upvotes</button>
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
}
