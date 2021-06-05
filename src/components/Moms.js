import React, {Component} from 'react';

export default class Moms extends Component {
   render(){
      return(
         <div>
         <h3>Author: {this.props.moms.author}</h3>
         <img src={this.props.moms.img}/>
         <h3>Title: {this.props.moms.title}</h3>
         <h3>Blog Entry: {this.props.moms.blog}</h3>
         <details>
            <summary>Edit Blog Entry</summary>
               <form id={this.props.moms.id}
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
               <button value={this.props.moms.id}
               onClick={this.props.deleteMom} id="del-btn">
               Delete Blog
               </button>
         </details>
         </div>
      )
   }

}
