import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Change (props){
 if(props.value){
 	return <h1>this is true </h1>
 }
 else
 	 	return <h1> this is false </h1>


}







class ChangeMeesage extends React.Component {
   constructor(props)
	{
		super(props);
		this.state ={ value : true};
	}


	handleclick=()=>{
          
		this.setState ({
			value :!this.state.value
		})
	}



	render(){
		return(
		<div>
               <button onClick={this.handleclick} > change the meesage</button>

               <Change value={this.state.value} /> 


		</div>)
	}
}


ReactDOM.render(<ChangeMeesage/>, document.getElementById('root'));

registerServiceWorker();
