import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import "./signupPage.css";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const{ email, password } = event.target.elements;
        try{
         await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/home");
        } catch (error) {
        alert(error);
        }
      }, [history]);
     
      return(
        <div className="center">
            <br />
            <br />
              <h1 className="centerHeader">Sign Up</h1>
              <form className="center" onSubmit={handleSignUp}>
                  
                  
                      <input className="inputWidth" name="email" type="email" placeholder="Email" />
                
                  <br />
                  <br />

                      <input className="inputWidth" name="password" type="password" placeholder="Password" />
                  <br />
                  <br />
                  <button className="buttonWidth btn btn-primary" type="submit">Sign Up</button>
              </form>
          </div>
      );
};

export default withRouter(SignUp);