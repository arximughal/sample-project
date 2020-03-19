import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {
	HomePage,
	Login
} from './containers';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Router>
				<div className="App">
					<Redirect to='/login'/>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/login' component={Login} />
				</div>
			</Router>
		);
	}
}
