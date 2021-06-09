import React, {Component} from 'react';

class Login extends React.Component {
   state = {
      currentUser: "",
      password: "",
   }

   handleLogin = (event) =>{
      this.setState(
         {
            [event.target.name]: event.target.value
         }
      )
   }

   sendLoginInfo = (event) =>{
      this.props.login(event, this.state)
   }

   render = () => {
      return <div id='login'>
         <form action="/signup/login" onSubmit={this.sendLoginInfo}>
            <label> User Name</label>
            <br />
             <input type="text"
             id="username"
             name="username"
             value={this.props.currentUser} onChange={this.handleLogin} />
             <br />
             <label>Password</label>
             <br />
             <input type="password"
             id="password"
             name="password"
             value={this.props.ccurrentUser} onChange={this.handleLogin} />
             <br />
             <input type="submit" value="Sign In"  />
         </form>
      </div>
   }

}
export default Login;
