import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
   state = {moms:[]}

   componentDidMount(){
      fetch('/moms')
      .then(res => res.json())
      .then(moms => this.setState({moms}));
   }
   render() {
      return(
         <div className="">
         <h1>Moms</h1>
         <ul>
            {this.state.moms.map(mom =>
            <li key={mom.id}>{mom.username}</li>
            )}
         </ul>
         </div>
      );
   }

}
export default App;
