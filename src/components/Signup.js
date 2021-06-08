import React, {Component} from 'react';
import axios from 'axios';

class Signup extends React.Component {
   state = {
      username: "",
      password: "",
   }

   handleSignup = (event) =>{
      this.setState(
         {
            [event.target.username]: event.target.value
         }
      )
   }

   sendUserInfo = () =>{
      this.props.signUp(this.state)
   }

   render = () =>{
    return <div id='signup'>
    <div>
      {/*signUp={this.signUp}*/}
      {/*handleSignup={this.handleSignup}*/}

    </div>
       <form action="/signup" method="POST" onSubmit={this.sendUserInfo}>
         <h3>Sign Up for Moms Who Blog</h3>
          <label htmlFor="username">User Name:</label>
          <br />
          <input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.handleSignup}/>
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
          type="password"
          name="password"
          value={this.props.password}
          onChange={this.handleSignup}
          />
          <br />
          <input type="submit" value="Sign Up" />
       </form>
    </div>
  }
}
export default Signup;
