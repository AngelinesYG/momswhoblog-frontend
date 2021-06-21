import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios'
import './App.css';
import ScrollUpButton from 'react-scroll-up-button'
import AddForm from './components/AddForm.js'
import Moms from './components/Moms.js'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Nav from './components/Nav'
import Welcome from './components/Welcome'


class App extends Component {
   state = {
      moms:[],
      img: "",
      author: "",
      title: "",
      blog: "",
      loggedIn: false,
      currentUser: {},
   }

   addMoms = (moms) =>{
      axios
      .post('https://momswhoblog-backend.herokuapp.com/moms', moms)
      .then((response)=>{
         this.getMoms()
      })
      .catch((error) => console.error(error))
   }

   handleChange = (event) => {
      this.setState({
         [event.target.id]: event.target.value,
      })
   }

   getMoms = () => {
      axios
      .get('https://momswhoblog-backend.herokuapp.com/moms')
      .then((response) =>{
         this.setState({
            moms: response.data
         })
      })
      .catch((error) => console.error(error))
   }

   deleteMom = (event) =>{
      axios.delete('https://momswhoblog-backend.herokuapp.com/moms/' + event.target.getAttribute("name")).then((response)=>{
         this.getMoms()
      })
   }

   updateMom = (event)=>{
      event.preventDefault()
      const id = event.target.getAttribute("name")
      axios.put('https://momswhoblog-backend.herokuapp.com/moms/' + id,
      this.state).then((response)=>{
         this.setState({
            moms: response.data,
            img: "",
            author: "",
            title: "",
            blog: "",
            redirect: false
         })
      })
   }

   componentDidMount =(event)=>{
      axios
      .get('https://momswhoblog-backend.herokuapp.com/moms/')
      .then(response =>{
         this.setState({
            moms: response.data,
            currentUser:this.state.currentUser,
         })
      })
   }

   signUp = (event, newUser) =>{
      event.preventDefault()
      axios.post('https://momswhoblog-backend.herokuapp.com/signup/', newUser).then(response =>{
         this.setState({
            currentUser: response.data,
         });
         return <Redirect to="/Moms" />
      })
   }

   login = (event, loggedInUser) =>{
      event.preventDefault()
      console.log(loggedInUser)
      axios.put('https://momswhoblog-backend.herokuapp.com/signup/login/', loggedInUser).then(response =>{
         console.log(response)
         this.setState({
            currentUser: response.data,

         });
         return <Redirect to="/Moms" />
      })
   }
   handleSignup = (event) =>{
      this.setState(
         {
            [event.target.name]: event.target.value,
         }
      )
   }

   handleLogin = (event) =>{
      this.setState(
         {
            [event.target.name]: event.target.value,
         }
      )
   }

   logout = (event) =>{
      this.setState(
         {
            currentUser: "",
         }
      );
      return <Redirect to="/" />
   }
   handleLogout = (event) =>{
      this.setState({
         currentUser: "",
      })
   }

   render() {
      return(
         <Router>
            <div className="main-container">
               <ScrollUpButton/>
               <Nav/>
               <Switch>
                  <Route path="/" exact component={Welcome}>
                   <div id="welcome-container">
                     <Welcome/>
                   </div>
                   <div id="footer-container">
                     <Footer/>
                   </div>
                  </Route>
                  {!this.state.currentUser.username ?
                     <div>
                     <Route path="/signup">
                        <div id="signup-container">
                        <Signup signUp={this.signUp}
                        handleSignup={this.handleSignup}

                        />
                        </div>
                     </Route>
                     <Route path="/login" exact component={Login}>
                      <div id="login-container">
                        <Login login={this.login}
                        handleLogin={this.handleLogin}
                        />
                      </div>
                     </Route>
                     </div>
                      : null
                  }

                  <Route path="/Moms">
                  <AddForm addMoms={this.addMoms} id="add"/>
                   <div id="smaller-width">
                     <div id="mom-container">
                     {this.state.moms.map((moms) => {

                        return <Moms moms={moms}
                        updateMom={this.updateMom}
                        deleteMom={this.deleteMom}
                        handleChange={this.handleChange}
                        currentUser={this.state.currentUser}
                        />
                     })}
                     </div>
                   </div>
                  </Route>
               </Switch>
            </div>
         </Router>
      )
   }
}
export default App;
