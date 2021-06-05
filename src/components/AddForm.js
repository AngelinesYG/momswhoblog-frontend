import React, {Component} from 'react'

export default class AddForm extends Component {
   state = {
      moms:[],
      img: "",
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

   showForm = () => {
      const addForm = document.querySelector('.addForm')
      addForm.classList.toggle('visible')
   }

   render(){
      return(
         <div>
            <div className="create-blog">
            <h1>Let's get Venting!</h1>

            </div>
            <form className="addForm" onSubmit={this.handleSubmit}>
               <label htmlFor="author">Author:</label>
               <input
               type="text"
               id="author"
               value={this.state.author}
               onChange={this.handleChange}
               />
               <br />
               <label htmlFor="img">Image:</label><br/>
               <input
               type="text"
               id="img"
               value={this.state.img}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="title">Title:</label><br/>
               <input
               type="text"
               id="title"
               value={this.state.title}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="blog">Blog Entry:</label><br/>
               <input
               type="text"
               id="blog"
               value={this.state.blog}
               onChange={this.handleChange}
               />
               <br/>
               <input type="submit" value="Add New Blog" onClick={this.showForm}/>
            </form>
         </div>
      )
   }
}
