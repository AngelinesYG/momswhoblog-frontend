import React, {Component} from 'react';

export default class Moms extends Component {
   render(){
      return(
         <div>
         <h3>Author: {this.props.moms.author}</h3>
         <details>
            <summary>Edit Blog Entry</summary>
               <form id={this.props.moms.id}
               onSubmit={this.props.updateMom}>
                  <label htmlFor="author">Author</label>
                  <br/>
                  <input type="text" id="author"
                  onChange={this.props.handleChange}/>
                  <br />
               </form>
         </details>
         </div>
      )
   }

}
