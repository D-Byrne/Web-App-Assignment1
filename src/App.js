import React, { Component } from "react";
import NewsList from "./components/newsList/";
import Form from "./components/newsForm/";
import api from "./dataStore/stubAPI";
import _ from "lodash";
import "./App.css";

export default class App extends Component {
  incrementUpvote = id => {
    api.upvote(id);
    this.setState({});
  };
  addNewsItem = (title, year, author, link) => {
    api.add(title, year, author, link);
    this.setState({});
  };
  render() {
    let posts = _.sortBy(api.getAll(), post => -post.upvotes);
    return (
      <div className="container-fluid" class="backClr">
        <div className="row">
          <div className="col-md-8 offset-2 ">
            <Form handleAdd={this.addNewsItem} />
          </div>
        </div>
        <div>
          <div className="col-md-8 offset-2">
            <NewsList posts={posts} upvoteHandler={this.incrementUpvote} />
          </div>
        </div>
      </div>
    );
  }
}
