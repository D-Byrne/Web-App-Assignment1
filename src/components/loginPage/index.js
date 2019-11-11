import React, { useCallback, useContext } from "react";
import { withRouter, Redirect} from "react-router";
import app from "../../base.js"
import { AuthContext } from "../../Auth.js";
import "./LoginPage.css" 


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try{
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    }, 
    [history]
  );
   
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/home" />
    }

    return (
        <div className="center">
          <br/>
          <br />
            <h1 className="centerHeader">Log In</h1>
            <form className="center" onSubmit={handleLogin}>
                
                    
                    <input className="inputWidth" name="email" type="email" placeholder="Email" />
              
                <br />
                <br />
                    <input className="inputWidth" name="password" type="password" placeholder="Password" />
                <br />
                <br />
                <button className="buttonWidth btn btn-primary" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(Login);
