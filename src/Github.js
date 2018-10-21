import React, { Component } from 'react';
import Resdata from './Resdata.js';
import Axios from 'axios';
class Github extends Component{
  constructor(props){
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    const test = '3b9faac546a14fbafba60e2f8e380d28';
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${test}`)
      .then(res => {
        const persons = res.data.list;
        this.setState({ persons });
      })
      .catch(error => {console.log(error)})
  }

  render() {
    if(!this.state.persons)return<p>Loading...</p>
    return (
      <div className="user-header">
        {this.state.persons.map((person, index) => 
          <li key = {index}>{person.main.temp} </li>)}
      </div>
    )
  }
}


  /* state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      Axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.followers_url;
        this.setState({ repos });
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <Resdata getUser={this.getUser} />
        { this.state.repos ? <a href="#"> { this.state.repos }</a> : <p>Please enter a username.</p> }
      </div>
    );
  }
}; */

export default Github;