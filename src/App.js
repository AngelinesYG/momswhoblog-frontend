import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import AddForm from './components/AddForm.js'
import Moms from './components/Moms.js'


class App extends Component {
   state = {
      moms:[],
      image: "",
      author: "",
      title: "",
      blog: "",
   }

   addMoms = (moms) =>{
      axios
      .post('http://localhost:3001/moms', moms)
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
      .get('http://localhost:3001/moms')
      .then((response) =>{
         this.setState({
            moms: response.data
         })
      })
      .catch((error) => console.error(error))
   }

   deleteMom = (event) =>{
      axios.delete('http://localhost:3001/moms' + event.target.value).then((response)=>{
         this.getMom()
      })
   }

   updateMom = (event)=>{
      event.preventDefault()
      const id = event.target.id
      axios.put('http://localhost:3001/moms' + id,
      this.state).then((response)=>{
         this.getMom()
         this.setState({
            moms:[],
            image: "",
            author: "",
            title: "",
            blog: "",
         })
      })
   }

   componentDidMount(){
      this.getMoms()
   }

   render() {
      return(
         <div className="">
         <AddForm addMoms={this.addMoms}/>
            {this.state.moms.map((moms) => {
               return <Moms moms={moms}
               updateMom={this.updateMom}
               deleteMom={this.deleteMom}
               handleChange={this.handleChange}
               />
            })}

         </div>
      )
   }

}
export default App;
