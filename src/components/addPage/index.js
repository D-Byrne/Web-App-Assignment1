import React, { Component } from "react";
import Form from "../newsForm/";
import api from "../../dataStore/stubAPI";
//import _ from "lodash";
import "../../App.css";

export default class AddPage extends Component {
  
  addNewsItem = (title, year, author, link) => {
    api.add(title, year, author, link);
    this.setState({});
  };

  render() {
    return (
      <div className="container-fluid" class="backClr">
        <div className="row">
          <div className="col-md-8 offset-2 ">
            <Form handleAdd={this.addNewsItem} />
          </div>
        </div>
      </div>
    );
  }
}