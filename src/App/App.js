import React from "react";
import Header from '../Header';
import './App.scss';


class App extends React.Component {

      state = {
        test: ''
      }



  render(){
    return(
      <div className="App">
        <Header />
        <div className='title'>
          <span>Welcome to React. Start hacking away!</span>
        </div>
      </div> 
    );
  }
}

export default App;