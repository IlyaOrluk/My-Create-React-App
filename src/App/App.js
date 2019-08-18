import React from "react";
import { hot } from 'react-hot-loader/root';
import Header from '../Header';
import './App.scss';


class App extends React.Component {

      state = {
        test: ''
      }



  render(){
    return(
      <div className="app">
        <Header />
        <div className='title'>
          <span>Welcome to React. Start hacking away!</span><br/>
          <span>If you liked it, then follow me on <a href='https://github.com/IlyaOrluk/'><i className="fab fa-github" aria-hidden="true"></i>Github</a></span>
        </div>
      </div> 
    );
  }
}

export default hot(App);