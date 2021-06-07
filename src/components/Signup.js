import React, {Component} from 'react';

class Signup extends React.Component {

   render = () =>{
    return <div id='signup'>
       <form action="/signup" method="POST">
          <label>User Name</label>
          <br />
          <input type="text" name="username"/>
          <br />
          <label>Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <input type="submit" value="Sign Up" />
       </form>
    </div>
  }
}
export default Signup;
