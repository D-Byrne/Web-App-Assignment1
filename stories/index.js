import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { action } from "@storybook/addon-actions";
import NewsList from "../src/components/newsList";
import NewsItem from "../src/components/newsItem";
import NewsForm from "../src/components/newsForm/";
import CommentForm from "../src/components/commentForm";
import Comment from "../src/components/comment";
import CommentList from "../src/components/commentList";
import Login from "../src/components/loginPage";
import SignUp from "../src/components/signupPage";

const post = {
  id: 1,
  title: "Post 1.",
  link: "http://www.foo.bar",
  author: "Joe Bloggs",
  comments: [],
  upvotes: 10
};
storiesOf("Book Recommendation App/News Form", module).add("default", () => (
  <NewsForm handleAdd={action("Add new post")} />
));

storiesOf("Book Recommendation App/News Item", module)
  .add("default", () => (
   <BrowserRouter><NewsItem post={post} upvoteHandler={action("upvoted")} /></BrowserRouter>
  ))
  .add("No hyperlink", () => (
    <BrowserRouter>
    <NewsItem post={{ ...post, link: "" }} upvoteHandler={action("upvoted")} />
    </BrowserRouter>
  ));
storiesOf("Book Recommendation App/News List", module).add("default", () => {
  const defaultPosts = [
    { ...post, id: 1, title: "Post 1", upvotes: 10 },
    { ...post, id: 2, title: "Post 2", upvotes: 20 },
    { ...post, id: 3, title: "Post 3", upvotes: 30 },
    { ...post, id: 4, title: "Post 4", upvotes: 40 }
  ];
  return <BrowserRouter><NewsList posts={defaultPosts} /></BrowserRouter>;
});

storiesOf("Book Recommendation App/Comment page/Comment Form", module).add("default", () => (
  <CommentForm post={post} addCommentHandler={action("comment added")} />
));

const comment = {
  id: 1,
  author: "Joe Bloggs",
  comment: "I agree with .....",
  upvotes: 10
};

storiesOf("Book Recommendation App/Comment page/Comment", module).add("default", () => (
  <Comment upvoteHandler={action("upvoted")} comment={comment} />
));

storiesOf("Book Recommendation App/Comment page/Comment list", module).add("default", () => {
  const defaultComments = [
    comment,
    { ...comment, author: "Jane Smith", upvotes: 3, id: 2 },
    { ...comment, comment: "On the other hand", id: 3 },
    { ...comment, author: "Jill Dwyer", upvotes: 5, id: 4 }
  ];
  return (
    <CommentList upvoteHandler={action("upvoted")} comments={defaultComments} />
  );
});

storiesOf("Book Recommendation App/Authentication/Login", module).add("default", () => {
 <BrowserRouter><Login /></BrowserRouter> 
});

storiesOf("Book Recommendation App/Authentication/Signup", module).add("default", () => {
  <SignUp />
});
