import React, {Component} from 'react'

export default class AddForm extends Component {
   state = {
      moms:[],
      image: "",
      author: "",
      title: "",
      blog: "",
   }

   handleChange = (event) =>{
      this.setState({
         [event.target.id]: event.target.value,
      })
   }

   handleSubmit = (event) =>{
      event.preventDefault()
      this.props.addMoms(this.state)
   }

   render(){
      return(
         <div>
            <h1>Create New Blog</h1>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="author">Author:</label>
               <input
               type="text"
               id="author"
               value={this.state.author}
               onChange={this.handleChange}
               />
               <br />
               <input type="submit" value="Add New Blog"/>
            </form>
         </div>
      )
   }

}
