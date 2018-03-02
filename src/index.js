import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Cartoon(props)
{
	return <h1> hello , {props.name} </h1>
}


function Show ()
{
      return <div>
                   <Cartoon name='thana' />
                   <Cartoon name='labadi' />
             </div>

}



ReactDOM.render(<Show />, document.getElementById('root'));



registerServiceWorker();
