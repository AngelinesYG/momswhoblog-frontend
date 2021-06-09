import React, {Component} from 'react';
import axios from 'axios';

class Signup extends React.Component {
   state = {
      firstName: "",
      email: "",
      username: "",
      password: "",
   }

   handleSignup = (event) =>{
      this.setState(
         {
            [event.target.name]: event.target.value
         }
      )
   }

   sendUserInfo = (event) =>{
      this.props.signUp(event, this.state)
   }

   render = () =>{
    return <div id='signup'>
       <form action="/signup" onSubmit={this.sendUserInfo}>
         <h3>Sign Up for Moms Who Blog</h3>
         <label htmlFor="firstName">First Name:</label>
         <br />
         <input
         type="text"
         name="firstName"
         value={this.props.firstName}
         onChange={this.handleSignup}/>
         <br />
         <label htmlFor="email">Email:</label>
         <br />
         <input
         type="text"
         name="email"
         value={this.props.email}
         onChange={this.handleSignup}/>
         <br />
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
