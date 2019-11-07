import React, { Component } from "react";
import "./newsForm.css";

export default class Form extends Component {
  state = { title: "", author: "", year:"", link: "" };
  handleTitleChange = e => this.setState({ title: e.target.value });
  handleYearChange = e => this.setState({ year: e.target.value });
  handleAuthorChange = e => this.setState({ author: e.target.value });
  handleLinkChange = e => this.setState({ link: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.title, this.state.author, this.state.year, this.state.link);
    this.setState({ title: "", year:"", author: "", link: "" });
  };
  render() {
    return (
      <form className="form bg-dark text-light">
        <h3>Add a Book</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Year"
            value={this.state.year}
            onChange={this.handleYearChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Link"
            value={this.state.link}
            onChange={this.handleLinkChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}
