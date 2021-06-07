import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import ScrollUpButton from 'react-scroll-up-button'
import AddForm from './components/AddForm.js'
import Moms from './components/Moms.js'
import Footer from './components/Footer'
import Header from './components/Header'
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
         })
      })
   }

   componentDidMount(){
      this.getMoms()
      .then(response =>{
         this.setState({
            moms: response.data,
            currentUser:{},
         })
      })
   }

   signUp = (event) =>{
      event.preventDefault()
      axios.post('https://momswhoblog-backend.herokuapp.com/users', this.state).then(response =>{
         this.setState({
            currentUser: response.data,
         })
      })
   }

   logIn = (event) =>{
      event.preventDefault()
      axios.post('https://momswhoblog-backend.herokuapp.com/login', this.state).then(response =>{
         this.setState({
            currentUser: response.data,
         })
      })
   }

   render() {
      return(
         <Router>
            <div className="">
            logIn={this.logIn}
            signUp={this.signUp}
            handleChange={this.handleChange}
            currentUser={this.state.currentUser.username}
               <ScrollUpButton/>
               <Nav/>
               <Switch>
                  <Route path="/" exact component={Welcome}>
                     <Welcome/>
                     <Footer/>
                     <Signup/>
                     <Login/>
                  </Route>


                  <Route path="/Moms">
                  <AddForm addMoms={this.addMoms} id="add"/>
                     {this.state.moms.map((moms) => {
                        return <Moms moms={moms}
                        updateMom={this.updateMom}
                        deleteMom={this.deleteMom}
                        handleChange={this.handleChange}
                        />
                     })}
                  </Route>
               </Switch>
            </div>
         </Router>
      )
   }
}
export default App;
