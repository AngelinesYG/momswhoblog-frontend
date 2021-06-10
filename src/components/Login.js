import React, {Component} from 'react';
import '../App.css';

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

   // handleLogout = history => () =>{
   //    store.remove('loggedin');
   //    history.push('/login');
   // }

   render = () => {
      return <div id='login'>
         <form action="/login" onSubmit={this.sendLoginInfo}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjqD1bqQx7kh9GuJ5fz55L1fNaJ8e4O_Z1A&usqp=CAU"/>
            <br />
            <label> User Name</label>
            <br />
             <input type="text"
             id="username"
             name="username"
             value={this.props.currentUser} onChange={this.handleLogin} />
             <br />
             <br />
             <label>Password</label>
             <br />
             <input type="password"
             id="password"
             name="password"
             value={this.props.ccurrentUser} onChange={this.handleLogin} />
             <br />
             <br />
             <input type="submit" value="Sign In"  />
         </form>
      </div>
   }

}
export default Login;
