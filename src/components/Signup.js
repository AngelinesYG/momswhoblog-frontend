import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Signup extends React.Component {
   state = {
      firstName: "",
      email: "",
      username: "",
      password: "",
      redirect: null,
   }

   handleSignup = (event) =>{
      this.setState(
         {
            [event.target.name]: event.target.value,
         }
      )
   }

   sendUserInfo = (event) =>{
      this.props.signUp(event, this.state)
   }

   render = () =>{
    return <div id='signup'>
       <form action="/signup" onSubmit={this.sendUserInfo}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Iu3hrsWtXPAKGr9_05EDX_yALmzdICKumw&usqp=CAU"/>
         <h3>Sign Up for Moms Who Blog</h3>
         <label htmlFor="firstName">First Name:</label>
         <br />
         <input
         type="text"
         name="firstName"
         value={this.props.firstName}
         onChange={this.handleSignup}/>
         <br />
         <br />
         <label htmlFor="email">Email:</label>
         <br />
         <input
         type="text"
         name="email"
         value={this.props.email}
         onChange={this.handleSignup}/>
         <br />
         <br />
          <label htmlFor="username">User Name:</label>
          <br />
          <input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.handleSignup}/>
          <br />
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
          <br />
          <input type="submit" value="Sign Up"/>
       </form>
    </div>
  }
}
export default Signup;
