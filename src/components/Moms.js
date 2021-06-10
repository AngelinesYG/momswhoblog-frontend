import React, {Component} from 'react';
import '../App.css';

export default class Moms extends Component {
   render(){
      return(
         <div className="momblog">
         <h3>By: {this.props.moms.author}</h3>
         <img src={this.props.moms.img}/>
         <details>
         <summary id="blogtitle">{this.props.moms.title}</summary>
         <h4 id="blogentry">Blog: {this.props.moms.blog}</h4>
         </details>
         <details>
            <summary>Edit Blog</summary>
               <form name={this.props.moms._id}
               onSubmit={this.props.updateMom}>
                  <label htmlFor="author">Author</label>
                  <br/>
                  <input type="text" id="author"
                  onChange={this.props.handleChange}/>
                  <br />
                  <label htmlFor="img">Image</label>
                  <br/>
                  <input type="text" id="img"
                  onChange={this.props.handleChange}/>
                  <br />
                  <label htmlFor="title">Title</label>
                  <br/>
                  <input type="text" id="title"
                  onChange={this.props.handleChange}/>
                  <br />
                  <label htmlFor="blog">Blog</label>
                  <br/>
                  <input type="text" id="blog"
                  onChange={this.props.handleChange}/>
                  <br />
                  <input type="submit" value="Update Blog"/>
               </form>
               <button name={this.props.moms._id}
               onClick={this.props.deleteMom} id="del-btn">
               Delete Blog
               </button>
         </details>
         </div>
      )
   }

}
