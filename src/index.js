import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import CommentPage from "./components/commentPage";
import "./index.css";
import Login from "./components/loginPage";
import SignUp from "./components/signupPage";
import app from "./base";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const Router = (props) => {
  return (
   <AuthProvider>
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-2">
              <h1>
                <Link to="/home">Book Recommedations</Link>
              </h1>
            </div>
            <div className="col-md-1">
            <button  className="btn btn-dark" onClick={() => app.auth().signOut()}>
              Log Out</button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-dark"> <Link to="/login">Log in</Link></button>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/posts/:post_id" component={CommentPage} />
          <PrivateRoute exact path="/home" component={App} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={SignUp}/>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));