import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Increm extends React.Component{

constructor(props)
{
	super(props);
	this.state={ counter : 0};
}

increment=(e)=>{
  e.preventDefault();
	this.setState({ counter : this.state.counter +1});
}

   render(){return  <button href="http://www.google.com" onClick={this.increment}> value is{this.state.counter} </button>}




}

ReactDOM.render(<Increm/>, document.getElementById('root'));


registerServiceWorker();
